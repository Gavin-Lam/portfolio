import type { ReactNode } from "react";
import type { ProjectId } from "@/lib/data";
import AvaSketch from "./AvaSketch";
import WrenchlogSketch from "./WrenchlogSketch";
import FitTrackSketch from "./FitTrackSketch";
import XurSketch from "./XurSketch";

// Projects without an entry here show their headline result instead.
export const SKETCHES: Partial<Record<ProjectId, ReactNode>> = {
  xur: <XurSketch />,
  "wrenchlog": <WrenchlogSketch />,
  ava: <AvaSketch />,
  fittrack: <FitTrackSketch />,
};
