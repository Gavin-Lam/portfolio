import SketchFrame from "./SketchFrame";

// Bar heights for the voice waveform (percent of row height).
const WAVE = [22, 40, 65, 34, 80, 55, 92, 60, 38, 72, 48, 85, 58, 30, 66, 44, 76, 52, 28, 60, 36, 20];

export default function AvaSketch() {
  return (
    <SketchFrame label="Sketch of AVA: a short voice exchange about trouble sleeping, with a waveform showing that AVA is listening.">
      <div className="space-y-3">
        <p className="ml-auto w-fit max-w-[85%] rounded-2xl rounded-br-sm bg-beam px-3.5 py-2.5 text-sm leading-snug text-night">
          I haven&apos;t been sleeping well this week.
        </p>
        <p className="w-fit max-w-[85%] rounded-2xl rounded-bl-sm bg-night-raised px-3.5 py-2.5 text-sm leading-snug">
          That sounds draining. Do you want to talk through what has been
          keeping you up?
        </p>
      </div>

      <div className="mt-4 flex items-center gap-3 rounded-xl border border-night-line bg-night-raised px-3.5 py-2.5">
        <span className="h-3 w-3 shrink-0 rounded-full bg-signal" />
        <span className="text-sm font-semibold">Listening</span>
        <span className="flex h-9 flex-1 items-center gap-[3px]">
          {WAVE.map((h, i) => (
            <span
              key={i}
              className="flex-1 rounded-full bg-beam"
              style={{ height: `${h}%` }}
            />
          ))}
        </span>
      </div>
    </SketchFrame>
  );
}
