import SketchFrame from "./SketchFrame";

// A small isometric scene: a skyline at the back of the map table, an open
// park in front of it, and a route traced along the street to a pin.
const TILE_W = 34;
const TILE_H = 17;
const LEVEL = 15;
const ORIGIN_X = 240;
const ORIGIN_Y = 100;
const SIZE = 7;
const STREET = 3; // row index of the cross street; rows beyond it are park

// Building heights for the rows behind the street.
const SKYLINE = [
  [3, 5, 2, 6, 4, 2, 3],
  [2, 3, 4, 2, 5, 3, 1],
  [1, 2, 1, 3, 2, 1, 2],
];

type Point = [number, number];

const iso = (x: number, y: number, z = 0): Point => [
  ORIGIN_X + (x - y) * TILE_W,
  ORIGIN_Y + (x + y) * TILE_H - z * LEVEL,
];

const pts = (list: Point[]) => list.map((p) => p.join(",")).join(" ");

function Block({ x, y, h }: { x: number; y: number; h: number }) {
  const gap = 0.12; // so blocks read as separate buildings
  const x0 = x + gap;
  const x1 = x + 1 - gap;
  const y0 = y + gap;
  const y1 = y + 1 - gap;
  return (
    <g stroke="#8AA7FF" strokeWidth="1" strokeLinejoin="round">
      <polygon
        points={pts([iso(x0, y1), iso(x1, y1), iso(x1, y1, h), iso(x0, y1, h)])}
        fill="#1B2B4D"
      />
      <polygon
        points={pts([iso(x1, y0), iso(x1, y1), iso(x1, y1, h), iso(x1, y0, h)])}
        fill="#263C6B"
      />
      <polygon
        points={pts([iso(x0, y0, h), iso(x1, y0, h), iso(x1, y1, h), iso(x0, y1, h)])}
        fill="#3D5A9C"
      />
    </g>
  );
}

export default function XurSketch() {
  const blocks: { x: number; y: number; h: number }[] = [];
  SKYLINE.forEach((row, y) => row.forEach((h, x) => blocks.push({ x, y, h })));
  blocks.sort((p, q) => p.x + p.y - (q.x + q.y));

  const table = [iso(0, 0), iso(SIZE, 0), iso(SIZE, SIZE), iso(0, SIZE)];
  const parkLines: [Point, Point][] = [];
  for (let i = STREET + 1; i < SIZE; i++) {
    parkLines.push([iso(0, i), iso(SIZE, i)]);
  }
  for (let i = 1; i < SIZE; i++) {
    parkLines.push([iso(i, STREET + 1), iso(i, SIZE)]);
  }

  // Route: along the cross street, then into the park.
  const route = [iso(6.5, STREET + 0.5), iso(2.5, STREET + 0.5), iso(2.5, 5.6)];
  const [pinX, pinY] = route[route.length - 1];

  return (
    <SketchFrame label="Sketch of Xur: a spoken request to show Liberty State Park, answered with a 3D skyline and park on a map table and a route traced to a pin.">
      <p className="absolute left-4 top-4 w-fit rounded-full border border-night-line bg-night-raised px-3 py-1.5 text-sm">
        <span className="font-semibold">&ldquo;Show me Liberty State Park&rdquo;</span>
      </p>

      <svg viewBox="0 44 480 300" className="mt-6 w-full">
        <polygon points={pts(table)} fill="#16233D" stroke="#8AA7FF" strokeWidth="1.5" />
        {parkLines.map(([from, to], i) => (
          <line
            key={i}
            x1={from[0]}
            y1={from[1]}
            x2={to[0]}
            y2={to[1]}
            stroke="#2C3F60"
            strokeWidth="1"
          />
        ))}
        {blocks.map((b) => (
          <Block key={`${b.x}-${b.y}`} {...b} />
        ))}
        <polyline
          points={pts(route)}
          fill="none"
          stroke="#F5C518"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx={route[0][0]} cy={route[0][1]} r="6" fill="#101B2D" stroke="#F5C518" strokeWidth="3" />
        <ellipse cx={pinX} cy={pinY} rx="13" ry="6.5" fill="none" stroke="#F5C518" strokeWidth="1.5" />
        <line x1={pinX} y1={pinY} x2={pinX} y2={pinY - 44} stroke="#F5C518" strokeWidth="2.5" />
        <circle cx={pinX} cy={pinY - 52} r="10" fill="#F5C518" />
        <circle cx={pinX} cy={pinY - 52} r="3.5" fill="#101B2D" />
      </svg>
    </SketchFrame>
  );
}
