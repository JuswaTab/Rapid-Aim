import React from "react";
import logo from "../../assets/logo2.png";

// Home component renders the main menu with options to start Regular Aim or Challenge modes.
function Home({ regAim, challengeAim }) {
  return (
    <div className="container">

      <div className="home-container">
        <img src={logo} alt="Logo" />
        <button className="start-button" onClick={regAim}> 
          Regular Aim 
          <div className="start-button-helper-text">Click LMB to shoot</div>
        </button>
        <button className="start-button" onClick={challengeAim}> 
          Challenge 
          <div className="start-button-helper-text">
            The more you Hit it becomes Faster
          </div>
        </button>
      </div>
    </div>
  );
}

export default Home;
