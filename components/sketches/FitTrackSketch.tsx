import SketchFrame from "./SketchFrame";

const MACROS = [
  { name: "Protein", fill: 0.82 },
  { name: "Carbs", fill: 0.64 },
  { name: "Fat", fill: 0.47 },
];

const WEEK = [
  { day: "Mon", session: "Push", done: true },
  { day: "Tue", session: "Pull", done: true },
  { day: "Wed", session: "Legs", done: true },
  { day: "Thu", session: "Rest", done: false },
  { day: "Fri", session: "Upper", done: false },
  { day: "Sat", session: "Lower", done: false },
  { day: "Sun", session: "Rest", done: false },
];

export default function FitTrackSketch() {
  return (
    <SketchFrame label="Sketch of FitTrack: today's protein, carb and fat progress bars above a generated seven-day training program.">
      <p className="text-sm font-semibold">Today&apos;s food log</p>
      <div className="mt-2 space-y-2">
        {MACROS.map((m) => (
          <div key={m.name} className="grid grid-cols-[3.75rem_1fr] items-center gap-3 text-sm">
            <span className="text-night-soft">{m.name}</span>
            <span className="block h-2.5 overflow-hidden rounded-full bg-night-raised">
              <span
                className="block h-full rounded-full bg-beam"
                style={{ width: `${m.fill * 100}%` }}
              />
            </span>
          </div>
        ))}
      </div>

      <p className="mt-5 text-sm font-semibold">Generated program, week 1</p>
      <div className="mt-2 grid grid-cols-7 gap-1 text-xs">
        {WEEK.map((d) => {
          const rest = d.session === "Rest";
          return (
            <div
              key={d.day}
              className={`rounded-md border px-0.5 py-2 text-center ${
                d.done
                  ? "border-signal bg-signal text-night"
                  : rest
                    ? "border-dashed border-night-line text-night-soft"
                    : "border-night-line bg-night-raised"
              }`}
            >
              <p className={d.done ? "" : "text-night-soft"}>{d.day}</p>
              <p className="font-bold">{d.session}</p>
            </div>
          );
        })}
      </div>
    </SketchFrame>
  );
}
