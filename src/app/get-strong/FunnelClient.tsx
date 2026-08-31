"use client";

import { useEffect, useState } from "react";
import { funnelSteps } from "./data";
import { IntroScreen } from "./components/IntroScreen";
import { QuestionScreen } from "./components/QuestionScreen";
import { SocialProofScreen } from "./components/SocialProofScreen";
import { EmailCaptureScreen } from "./components/EmailCaptureScreen";
import { LoadingScreen } from "./components/LoadingScreen";
import { ResultsScreen } from "./components/ResultsScreen";
import { PurchaseScreen } from "./components/PurchaseScreen";
import { track } from "@/lib/analytics";
import type { PlanPricing } from "@/lib/planPricing";

export type Answers = {
  [questionId: string]: string | string[] | undefined;
  name?: string;
  email?: string;
};

type Stage =
  | { kind: "intro" }
  | { kind: "step"; index: number }
  | { kind: "email" }
  | { kind: "loading" }
  | { kind: "results" }
  | { kind: "purchase" };

const TOTAL_STEPS = funnelSteps.length + 1; // +1 for email capture

function screenNameForStage(stage: Stage): string {
  if (stage.kind === "step") {
    const step = funnelSteps[stage.index];
    return step.kind === "question" ? `Question: ${step.question.id}` : `Social: ${step.slide.id}`;
  }
  return stage.kind;
}

export function FunnelClient({ pricing }: { pricing: PlanPricing | null }) {
  const [stage, setStage] = useState<Stage>({ kind: "intro" });
  const [answers, setAnswers] = useState<Answers>({});

  useEffect(() => {
    track("Funnel Screen Viewed", { "Screen Name": screenNameForStage(stage) });
  }, [stage]);

  const goToStep = (index: number) => {
    if (index < 0) {
      setStage({ kind: "intro" });
    } else if (index >= funnelSteps.length) {
      setStage({ kind: "email" });
    } else {
      setStage({ kind: "step", index });
    }
  };

  if (stage.kind === "intro") {
    return <IntroScreen onStart={() => goToStep(0)} />;
  }

  if (stage.kind === "step") {
    const step = funnelSteps[stage.index];
    const progress = stage.index / TOTAL_STEPS;

    if (step.kind === "social") {
      const { slide } = step;
      const body = slide.personalize?.(answers) ?? slide.body;
      return (
        <SocialProofScreen
          slide={{ ...slide, body }}
          progress={progress}
          onBack={() => goToStep(stage.index - 1)}
          onContinue={() => goToStep(stage.index + 1)}
        />
      );
    }

    const { question } = step;
    const selected = answers[question.id];
    const selectedArray = Array.isArray(selected)
      ? selected
      : selected
        ? [selected]
        : [];

    return (
      <QuestionScreen
        question={question}
        progress={progress}
        selected={selectedArray}
        showContinue={selectedArray.length > 0}
        onBack={() => goToStep(stage.index - 1)}
        onSelectSingle={(choiceId) => {
          setAnswers((prev) => ({ ...prev, [question.id]: choiceId }));
          track("Funnel Question Answered", {
            "Question Id": question.id,
            Answer: choiceId,
          });
          goToStep(stage.index + 1);
        }}
        onToggleMulti={(choiceId) => {
          setAnswers((prev) => {
            const current = Array.isArray(prev[question.id])
              ? (prev[question.id] as string[])
              : [];
            const next = current.includes(choiceId)
              ? current.filter((id) => id !== choiceId)
              : [...current, choiceId];
            return { ...prev, [question.id]: next };
          });
        }}
        onContinue={() => {
          track("Funnel Question Answered", {
            "Question Id": question.id,
            Answer: selectedArray,
          });
          goToStep(stage.index + 1);
        }}
      />
    );
  }

  if (stage.kind === "email") {
    return (
      <EmailCaptureScreen
        progress={funnelSteps.length / TOTAL_STEPS}
        onBack={() => goToStep(funnelSteps.length - 1)}
        onSubmit={(name, email) => {
          setAnswers((prev) => ({ ...prev, name, email }));
          track("Funnel Email Submitted");
          setStage({ kind: "loading" });
        }}
      />
    );
  }

  if (stage.kind === "loading") {
    return <LoadingScreen onDone={() => setStage({ kind: "results" })} />;
  }

  if (stage.kind === "results") {
    return (
      <ResultsScreen
        answers={answers}
        onContinue={() => setStage({ kind: "purchase" })}
      />
    );
  }

  return <PurchaseScreen answers={answers} pricing={pricing} />;
}
