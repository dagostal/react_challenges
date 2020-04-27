import React, { useState } from "react";
import ReactDOM from "react-dom";
import ScotchInfoBar from "./ScotchInfoBar";
import "./styles.css";

function App() {
  const [offsetTop, setOffsetTop] = useState(300);

  function moveBoxUp() {
    setOffsetTop(offsetTop - 20);
  }

  return (
    <div className="App">
      <h1>Move the Box!</h1>
      <button onClick={moveBoxUp}> Move Up</button>

      <div
        className="box"
        style={{
          transform: `translateY(${offsetTop}px)`
        }}
      />

      <ScotchInfoBar />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
