"use client";

import { useEffect, useState } from "react";
import { questions } from "./data";
import { IntroScreen } from "./components/IntroScreen";
import { QuestionScreen } from "./components/QuestionScreen";
import { EmailCaptureScreen } from "./components/EmailCaptureScreen";
import { LoadingScreen } from "./components/LoadingScreen";
import { ResultsScreen } from "./components/ResultsScreen";
import { PurchaseScreen } from "./components/PurchaseScreen";
import { track } from "@/lib/analytics";
import type { FunnelPricing } from "@/lib/funnelPricing";

export type Answers = {
  [questionId: string]: string | string[] | undefined;
  name?: string;
  email?: string;
};

type Stage =
  | { kind: "intro" }
  | { kind: "question"; index: number }
  | { kind: "email" }
  | { kind: "loading" }
  | { kind: "results" }
  | { kind: "purchase" };

const TOTAL_STEPS = questions.length + 1; // +1 for email capture

function screenNameForStage(stage: Stage): string {
  if (stage.kind === "question") return `Question: ${questions[stage.index].id}`;
  return stage.kind;
}

export function FunnelClient({ pricing }: { pricing: FunnelPricing | null }) {
  const [stage, setStage] = useState<Stage>({ kind: "intro" });
  const [answers, setAnswers] = useState<Answers>({});

  useEffect(() => {
    track("Funnel Screen Viewed", { "Screen Name": screenNameForStage(stage) });
  }, [stage]);

  const goToQuestion = (index: number) => {
    if (index < 0) {
      setStage({ kind: "intro" });
    } else if (index >= questions.length) {
      setStage({ kind: "email" });
    } else {
      setStage({ kind: "question", index });
    }
  };

  if (stage.kind === "intro") {
    return <IntroScreen onStart={() => goToQuestion(0)} />;
  }

  if (stage.kind === "question") {
    const question = questions[stage.index];
    const selected = answers[question.id];
    const selectedArray = Array.isArray(selected)
      ? selected
      : selected
        ? [selected]
        : [];

    return (
      <QuestionScreen
        question={question}
        progress={stage.index / TOTAL_STEPS}
        selected={selectedArray}
        showContinue={selectedArray.length > 0}
        onBack={() => goToQuestion(stage.index - 1)}
        onSelectSingle={(choiceId) => {
          setAnswers((prev) => ({ ...prev, [question.id]: choiceId }));
          track("Funnel Question Answered", {
            "Question Id": question.id,
            Answer: choiceId,
          });
          goToQuestion(stage.index + 1);
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
          goToQuestion(stage.index + 1);
        }}
      />
    );
  }

  if (stage.kind === "email") {
    return (
      <EmailCaptureScreen
        progress={questions.length / TOTAL_STEPS}
        onBack={() => goToQuestion(questions.length - 1)}
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
