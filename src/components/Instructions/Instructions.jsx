import React from "react";
import "./Instructions.css";
import Navbar from "../Navbar";

const Instructions = () => {
  return (
    <div className="instructions">
      <Navbar isDark={true} />
      <img src="ins-bg.png" alt="instructions" className="instructions-bg" />
      <div className="instructions-heading">
        <h1>
          Welcome to an enlightening journey guided by <br />
          <span>Karauli Baba</span>
        </h1>
        <h6>
          a beacon of spiritual wisdom and mastery in the <br /> sacred art of
          pooja
        </h6>
      </div>
      <div className="container">
        <img
          src="center-image.png"
          alt="Center Image"
          className="center-image"
        />
        <div className="circular-image">
          <img src="icon-one.png" alt="icon-one" />
        </div>
        <div className="circular-image">
          <img src="icon-two.png" alt="icon-two" />
        </div>
        <div className="circular-image">
          <img src="icon-three.png" alt="icon-three" />
        </div>
        <div className="circular-image">
          <img src="icon-four.png" alt="icon-four" />
        </div>
        <div className="circular-image">
          <img src="icon-five.png" alt="icon-five" />
        </div>
        <div className="circular-image">
          <img src="icon-one.png" alt="icon-six" />
        </div>
        <div className="circular-image">
          <img src="icon-three.png" alt="icon-seven" />
        </div>
        <div className="circular-image">
          <img src="icon-two.png" alt="icon-eight" />
        </div>
      </div>
    </div>
  );
};

export default Instructions;
