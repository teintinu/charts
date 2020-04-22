import { genAngSectors, genPaths } from "../src/genPaths";
import { casos, Casos } from "./casos";

describe("angulos", () => {
  const esperados: { [n in Casos]: number[] } = {
    "100": [360],
    "10/90": [36, 324],
    "10/20/70": [36, 72, 252]
  };

  Object.keys(casos).forEach((cn: Casos) => {
    const caso = casos[cn];
    const esperado = esperados[cn];
    it(cn, () => {
      expect(genAngSectors(caso).map(s => s.ang)).toMatchObject(esperado);
    });
  });
});

describe("genPaths", () => {
  const esperados: { [n in Casos]: string[] } = {
    "100": [
      "M 200 200 L 390 200 A 190 190 0 1 1 389.99971061352466 199.6683876104793"
    ],
    "10/90": [
      "M 200 200 L 390 200 A 190 190 0 0 1 353.9079116847013 311.4107477797999",
      "M 200 200 L 353.71322893124 311.6791979355699 A 190 190 0 1 1 389.99971061352466 199.6683876104793"
    ],
    "10/20/70": [
      "M 200 200 L 390 200 A 190 190 0 0 1 353.9079116847013 311.4107477797999",
      "M 200 200 L 353.71322893124 311.6791979355699 A 190 190 0 0 1 141.60224261803666 380.80293673709326",
      "M 200 200 L 141.28677106876 380.7007380960792 A 190 190 0 1 1 389.99971061352466 199.6683876104793"
    ]
  };

  Object.keys(casos).forEach((cn: Casos) => {
    const caso = casos[cn];
    const esperado = esperados[cn];
    it(cn, () => {
      expect(genPaths(caso)).toMatchObject(esperado);
    });
  });
});
