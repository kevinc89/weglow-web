import Image from "next/image";

export function ScreenshotFrame({
  src,
  alt,
  className,
  priority,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-[2rem] border-8 border-white shadow-2xl shadow-[#222]/20 ${className ?? ""}`}
    >
      <Image
        src={src}
        alt={alt}
        width={786}
        height={1704}
        priority={priority}
        className="h-auto w-full"
      />
    </div>
  );
}
