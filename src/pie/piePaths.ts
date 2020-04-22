import { svg_ellipse_arc_deg } from "./makeArc";

export function genAngSectors(pieData: PieData[]) {
  const total = pieData.reduce((t, c) => t + c.value, 0);
  return pieData.map(pdi => ({
    ...pdi,
    ang: Math.ceil((360 * pdi.value) / total)
  }));
}

export interface PieData {
  value: number;
  detach?: boolean;
  disabled?: boolean;
}

export function genPaths(pieData: PieData[]): string[] {
  let startAngle = 0;

  const sectors = genAngSectors(pieData);
  const ret: string[] = [];
  for (const sector of sectors) {
    if (!sector.disabled) {
      const d = svg_ellipse_arc_deg(
        "M 200 200 L",
        200,
        200,
        190,
        190,
        startAngle,
        sector.ang - 0.1,
        0
      );
      ret.push(d);
    }
    startAngle += sector.ang;
  }
  return ret;
}
