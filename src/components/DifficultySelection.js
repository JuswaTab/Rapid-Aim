import React from 'react';

function DifficultySelection({ setDifficulty }) {
  return (
    <div className="difficulty-selection">
      <h2>Select Difficulty</h2>
      <button onClick={() => setDifficulty({ respawnRate: 1000, timer: 30, pointsMultiplier: 2 })}>
        Easy
      </button>
      <button onClick={() => setDifficulty({ respawnRate: 800, timer: 20, pointsMultiplier: 3 })}>
        Normal
      </button>
      <button onClick={() => setDifficulty({ respawnRate: 300, timer: 15, pointsMultiplier: 5 })}>
        Hard
      </button>
    </div>
  );
}

export default DifficultySelection;
