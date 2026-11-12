import SketchFrame from "./SketchFrame";

// Sample overnight lows falling through a swap threshold.
const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const LOWS = [0.2, 0.28, 0.36, 0.5, 0.66, 0.74, 0.8]; // 0 = warm, 1 = cold
const THRESHOLD = 0.58;
const W = 420;
const H = 150;

export default function WrenchlogSketch() {
  const x = (i: number) => 24 + (i * (W - 48)) / (DAYS.length - 1);
  const y = (v: number) => 14 + v * (H - 28);
  const points = LOWS.map((v, i) => `${x(i)},${y(v)}`).join(" ");
  const crossing = LOWS.findIndex((v) => v > THRESHOLD);

  return (
    <SketchFrame label="Sketch of Wrenchlog: a week of forecast lows dropping below the tire swap threshold on Friday, with an alert to fit the winter set.">
      <div className="flex items-baseline justify-between gap-4">
        <p className="text-sm font-semibold">Forecast lows this week</p>
        <p className="text-sm text-night-soft">Jersey City</p>
      </div>

      <svg viewBox={`0 0 ${W} ${H + 28}`} className="mt-2 w-full">
        <rect
          x="0"
          y={y(THRESHOLD)}
          width={W}
          height={H - y(THRESHOLD)}
          fill="#F5C518"
          opacity="0.07"
        />
        <line
          x1="0"
          x2={W}
          y1={y(THRESHOLD)}
          y2={y(THRESHOLD)}
          stroke="#F5C518"
          strokeWidth="1.5"
          strokeDasharray="5 5"
        />
        <text x={W} y={y(THRESHOLD) - 7} textAnchor="end" fontSize="15" fill="#F5C518">
          swap threshold
        </text>
        <polyline
          points={points}
          fill="none"
          stroke="#8AA7FF"
          strokeWidth="2.5"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        {LOWS.map((v, i) => (
          <g key={DAYS[i]}>
            <circle
              cx={x(i)}
              cy={y(v)}
              r={i === crossing ? 6 : 4}
              fill={i >= crossing ? "#F5C518" : "#101B2D"}
              stroke={i >= crossing ? "#F5C518" : "#8AA7FF"}
              strokeWidth="2.5"
            />
            <text
              x={x(i)}
              y={H + 20}
              textAnchor="middle"
              fontSize="15"
              fill={i === crossing ? "#F5C518" : "#9DACC0"}
              fontWeight={i === crossing ? 700 : 400}
            >
              {DAYS[i]}
            </text>
          </g>
        ))}
      </svg>

      <p className="mt-3 rounded-lg bg-signal px-3 py-2 text-sm font-bold leading-snug text-night">
        Fit the winter set before Friday
      </p>
    </SketchFrame>
  );
}
