"use client";

export type ConfettiPiece = {
  x: number;
  rot: number;
  size: number;
  color: string;
};

const COLORS = ["#db4927", "#2d62ff", "#dd23bb", "#ffd9c7", "#222222"];
const PIECE_COUNT = 16;

// Generates the random particle data for one burst — called from the click
// handler (an event, not render) so the component below stays pure.
export function makeConfettiBurst(): ConfettiPiece[] {
  return Array.from({ length: PIECE_COUNT }, (_, i) => {
    const angle = (i / PIECE_COUNT) * Math.PI * 2;
    const distance = 50 + Math.random() * 70;
    return {
      x: Math.round(Math.cos(angle) * distance),
      rot: Math.round(Math.random() * 360),
      size: 5 + Math.round(Math.random() * 4),
      color: COLORS[i % COLORS.length],
    };
  });
}

// A quick celebratory burst from the center of whatever wraps this. No
// canvas, no library, just a handful of divs riding the confetti-fall
// keyframe (globals.css). `burstKey` increments on each click to re-trigger.
export function Confetti({
  burstKey,
  pieces,
}: {
  burstKey: number;
  pieces: ConfettiPiece[];
}) {
  if (burstKey === 0) return null;

  return (
    <div
      key={burstKey}
      aria-hidden
      className="pointer-events-none absolute inset-0 z-20 overflow-visible"
    >
      {pieces.map((piece, i) => (
        <span
          key={i}
          className="absolute top-1/2 left-1/2 animate-confetti-fall rounded-sm"
          style={
            {
              width: piece.size,
              height: piece.size,
              backgroundColor: piece.color,
              "--confetti-x": `${piece.x}px`,
              "--confetti-rot": `${piece.rot}deg`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
