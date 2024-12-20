import React, { useState } from 'react';
import backgroundVideo from "../assets/Background1.mp4";
import backgroundMusic from "../assets/SoundTRack1.mp3";

function DifficultySelection({ setDifficulty, onBack }) {
  const [selectedDifficulty, setSelectedDifficulty] = useState(null); 

  // Function to handle difficulty selection
  const handleDifficultyClick = (difficulty) => {
    setSelectedDifficulty(difficulty);
    // Update difficulty settings based on the selection
    if (difficulty === 'easy') {
      setDifficulty({ respawnRate: 1500, timer: 30, pointsMultiplier: 2 });
    } else if (difficulty === 'normal') {
      setDifficulty({ respawnRate: 1000, timer: 20, pointsMultiplier: 3 });
    } else if (difficulty === 'hard') {
      setDifficulty({ respawnRate: 800, timer: 15, pointsMultiplier: 5 });
    }
  };

  // Render the difficulty selection interface
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
        className={`difficulty-button easy-button ${selectedDifficulty === 'easy' ? 'selected' : ''}`}
        onClick={() => handleDifficultyClick('easy')}
      >
        Easy
      </button>
      <button
        className={`difficulty-button normal-button ${selectedDifficulty === 'normal' ? 'selected' : ''}`}
        onClick={() => handleDifficultyClick('normal')}
      >
        Normal
      </button>
      <button
        className={`difficulty-button hard-button ${selectedDifficulty === 'hard' ? 'selected' : ''}`}
        onClick={() => handleDifficultyClick('hard')}
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
