import type { ReactNode } from "react";

// Dark "screen" that holds each project sketch. The sketches are drawn in
// code to show the idea of each app; they are not screenshots.
// TODO(Gavin): swap these for real screenshots once the apps are ready.
export default function SketchFrame({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div
      role="img"
      aria-label={label}
      className="relative flex aspect-[5/4] flex-col justify-center overflow-hidden rounded-xl border border-night-line bg-night p-4 text-night-text"
    >
      <div aria-hidden="true">{children}</div>
    </div>
  );
}
