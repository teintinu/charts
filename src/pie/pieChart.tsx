import * as React from "react";
import { genPaths, PieData } from "./genPaths";

export function PieChart({
  data,
  colors
}: {
  data: PieData[];
  colors: string[];
}) {
  const paths = genPaths(data);
  return (
    <svg viewBox="0 0 400 400">
      {paths.map((d, i) => (
        <path d={d} fill={colors[i] || "#000000"} />
      ))}
    </svg>
  );
}
