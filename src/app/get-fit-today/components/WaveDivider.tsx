export function WaveDivider({
  fill,
  flip,
}: {
  fill: string;
  flip?: boolean;
}) {
  return (
    <div
      aria-hidden
      className={`relative h-12 w-full overflow-hidden sm:h-20 ${flip ? "rotate-180" : ""}`}
    >
      <svg
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
      >
        <path
          d="M0,40 C240,100 480,0 720,30 C960,60 1200,100 1440,40 L1440,100 L0,100 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
