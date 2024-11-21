import React from "react";
import logo from "../../assets/logo2.png";
import backgroundVideo from "../../assets/Backresult.mp4"; 
import backgroundMusicHome from "../../assets/Rapid-AimRap.mp3"; 

function Home({ regAim, preAim }) {
  return (
    <div className="container">
      <video className="background-video-home" autoPlay loop muted>
        <source src={backgroundVideo} type="video/mp4" />
      </video>

      <audio autoPlay loop>
        <source src={backgroundMusicHome} type="audio/mp3" />
      </audio>

      <div className="home-container">
        <img src={logo} alt="Logo" />
        <button className="start-button" onClick={regAim}>
          Regular Aim
          <div className="start-button-helper-text">Click LMB to shoot</div>
        </button>
        <button className="start-button" onClick={preAim}>
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
