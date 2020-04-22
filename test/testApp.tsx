import * as React from "react";
import { render } from "react-dom";
import "./styles.css";
import { Casos, casos } from "./casos";
import { PieChart } from "../src/pieChart";

const rootElement = document.getElementById("root");
render(<App />, rootElement);

export default function App() {
  var colors = ["#468966", "#FFF0A5", "#FFB03B", "#B64926", "#8E2800"];
  return (
    <div className="App">
      {Object.keys(casos).map((cn: string) => {
        return (
          <div key={cn}>
            {cn}
            <PieChart data={casos[cn as Casos]} colors={colors} />
          </div>
        );
      })}
    </div>
  );
}
