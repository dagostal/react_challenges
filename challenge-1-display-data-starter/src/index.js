import React from "react";
import ReactDOM from "react-dom";
import ScotchInfoBar from "./ScotchInfoBar";
import "./styles.css";

/**
 * Our data
 * ------------------------
 */
const user = {
  name: "Chris on Code",
  location: "Las Vegas",
  foodType: "Everything",
  age: 28,
  likes: "Coding into the wee hours of the morning",
  twitterUsername: "chrisoncode",
  avatar:
    "https://scotch-res.cloudinary.com/image/upload/v1556479698/xRZsnhr0_400x400_cpyg2t.png"
};

/**
 * Our React component where we should display data
 * ------------------------
 */
function App() {
  return (
    <div className="App">
      <div className="user-deets">
        <img src={user.avatar} />
        <h3>
          <a>{user.name}</a>
        </h3>
        <p>
          <strong>location</strong>
        </p>
        {user.location}
        <p>
          <strong>Eats</strong>
        </p>
        {user.foodType}
        <p>
          <strong>age</strong>
        </p>
        {user.age}
        <p>
          <strong>likes</strong>
        </p>
        {user.likes}
        <p>
          <strong>Twitter</strong>
          <a href={"https://twitter.com/" + user.twitterUsername}>
            @{user.twitterUsername}
          </a>
        </p>
      </div>
      <ScotchInfoBar />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
