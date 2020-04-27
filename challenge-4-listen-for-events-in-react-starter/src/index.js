import React, { useState } from "react";
import ReactDOM from "react-dom";
import ScotchInfoBar from "./ScotchInfoBar";
import "./styles.css";

function App() {
  const [phrase, setPhrase] = useState("");

  if (phrase === "open sesame") {
    alert("You may pass!");
  }

  return (
    <div className="App">
      <h2>What's the secret phrase?</h2>

      <input
        type="text"
        placeholder="Super duper secret"
        onChange={e => setPhrase(e.target.value)}
      />

      <p>
        Hint: It's <strong>open sesame</strong>
      </p>

      <ScotchInfoBar seriesNumber={4} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
