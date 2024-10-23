import "./style.css";

import React from "https://cdn.skypack.dev/react";
import ReactDOM from "https://cdn.skypack.dev/react-dom";

const Text = ({ value }) => (
  <div className="text">
    {value.split("").map((char, i) => (
      <>
        {char === " " && <div className="space" />}
        {char !== " " && (
          <div className="letter" style={{ "--delay": `${i * 0.2}s` }}>
            <span className="source">{char}</span>
            <span className="shadow">{char}</span>
            <span className="overlay">{char}</span>
          </div>
        )}
      </>
    ))}
  </div>
);

const App = () => (
  <div className="app">
    <Text value="VICTOR" />
    <Text value="JEFE" />
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
