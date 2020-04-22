import { svg_ellipse_arc_deg } from "../src/makeArc";
import { Casos } from "./casos";

const casos: { [n in Casos]: Array<[number, number, string]> } = {
  "100": [
    [
      0,
      359.99,
      "M 390 200 A 190 190 0 1 1 389.9999971061345 199.96683874438042"
    ]
  ],
  "10/90": [
    [
      0,
      35.99,
      "M 390 200 A 190 190 0 0 1 353.73271828705435 311.6523682152474"
    ],
    [
      36,
      324,
      "M 353.71322893124 311.6791979355699 A 190 190 0 1 1 390 199.99999999999994"
    ]
  ],
  "10/20/70": [
    [
      0,
      35.99,
      "M 390 200 A 190 190 0 0 1 353.73271828705435 311.6523682152474"
    ],
    [
      36,
      71.99,
      "M 353.71322893124 311.6791979355699 A 190 190 0 0 1 141.31831019125912 380.7109827353908"
    ],
    [
      72,
      251.99,
      "M 258.71322893124 380.70073809607914 A 190 190 0 1 1 353.693734893053 88.2939757460505"
    ]
  ]
};

describe("makeArc", () => {
  Object.keys(casos).forEach((cn: Casos) => {
    const caso = casos[cn];
    it(cn, () => {
      const a: Array<[number, number, string]> = [];
      const e: Array<[number, number, string]> = [];
      for (const [start, sweep, ed] of caso) {
        const ad = svg_ellipse_arc_deg(
          "M",
          200,
          200,
          190,
          190,
          start,
          sweep,
          0
        );
        a.push([start, sweep, ad]);
        e.push([start, sweep, ed]);
      }
      expect(a).toMatchObject(e);
    });
  });
});
