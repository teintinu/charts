import { PieData } from "./genPaths";

export type Casos = "100" | "10/90" | "10/20/70";

export const casos: { [n in Casos]: PieData[] } = {
  "100": [{ value: 100 }],
  "10/90": [{ value: 10 }, { value: 90 }],
  "10/20/70": [{ value: 10 }, { value: 20 }, { value: 70 }]
};
