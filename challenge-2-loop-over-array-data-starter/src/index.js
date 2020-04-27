import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import ScotchInfoBar from "./ScotchInfoBar";

/**
 * Our data comes from users-data.js
 * -----------------------------
 */
import users from "./users-data";

/**
 * Our React component where we display data
 * -----------------------------
 */
function App() {
  var userData = [];
  users.forEach((user, index) => {
    userData.push(
      <div key={index}>
        <div>
          <strong>{user.name}</strong>
        </div>
        <div>{user.location}</div>
        <div>{user.car}</div>
      </div>
    );
  });

  return (
    <div className="App">
      <div className="page-deets" />
      <div className="users">{userData}</div>
      <ScotchInfoBar />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
