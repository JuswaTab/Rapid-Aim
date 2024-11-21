// DifficultySelection.js
import React from 'react';
import backgroundVideo from "../assets/Background1.mp4";
import backgroundMusic from "../assets/SoundTRack1.mp3";

function DifficultySelection({ setDifficulty, onBack }) {
  return (
    <div className="difficulty-selection">
      <video className="background-video" autoPlay loop muted>
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      
      <audio autoPlay loop>
        <source src={backgroundMusic} type="audio/mp3" />
      </audio>

      <h2 className="h2-DiSec">Select Difficulty</h2>
      <button
        className="difficulty-button easy-button"
        onClick={() => setDifficulty({ respawnRate: 1000, timer: 30, pointsMultiplier: 2 })}
      >
        Easy
      </button>
      <button
        className="difficulty-button normal-button"
        onClick={() => setDifficulty({ respawnRate: 800, timer: 20, pointsMultiplier: 3 })}
      >
        Normal
      </button>
      <button
        className="difficulty-button hard-button"
        onClick={() => setDifficulty({ respawnRate: 300, timer: 15, pointsMultiplier: 5 })}
      >
        Hard
      </button>
      <button className="back-button" onClick={onBack}>
        Back to Home
      </button>
    </div>
  );
}

export default DifficultySelection;
