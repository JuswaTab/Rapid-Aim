import React from "react";
import Score from "../../assets/Score.png";
import "../../App.css";

const TimerStyle = {
  position: "absolute",
  // top: "43%",
  // right: "45%",
  // transform: "translate(-50%, -50%)",
  top: "43%",
  right: "25%",
  transform: "translate(-50%, -50%)",
  color: "white",
  fontSize: "2.25rem ",
  textAlign: "center",
};

// Timer component displays the remaining time for the game.
function Timer({ timer }) {
  return (
    <div className="timer">
      <img src={Score} alt="score" />
      <div style={TimerStyle}>
        <span style={{ fontSize: "1.125rem" }}> Timer: </span> <br />
        {timer}
      </div>
    </div>
  );
}

export default Timer;
