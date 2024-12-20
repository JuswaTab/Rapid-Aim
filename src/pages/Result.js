import React, { useEffect } from "react";
import gameOverAudio from "../assets/gameOver.mp3";

function Result({ score, onRetry }) {
  const gameOverMusic = new Audio(gameOverAudio);

  useEffect(() => {
    // Play the game-over music when the component mounts
    gameOverMusic.play();
    return () => {
      gameOverMusic.pause();
      gameOverMusic.currentTime = 0;
    };
  }, [gameOverMusic]);  // Dependency array ensures this effect runs once when the component mounts

  return (
    <div className="result-container">
      <div>Your Score is {score}</div>
      <div>Average kill per second: {(score / 15).toFixed(2)}</div> {/* Calculate and display the average kills per second */}
      <div>
        Your aim is
        {score > 7 ? (
          <span style={{ color: "green" }}> Good </span>
        ) : (
          <span style={{ color: "red" }}> Not Good Enough </span>
        )}
      </div>
      <button className="start-button" onClick={onRetry}>
        Retry
      </button>
      <button className="start-button" onClick={() => window.location.reload()}>
        Go to Home
      </button>
    </div>
  );
}

export default Result;
