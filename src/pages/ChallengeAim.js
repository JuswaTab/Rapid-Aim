import React, { useEffect, useState } from 'react';
import "../App.css";
import gunFireAudio from "../assets/9mm.mp3";
import ScoreCard from "../components/ScoreCard/ScoreBoard";
import Timer from "../components/ScoreCard/Timer";
import TargetPreAim from "../components/Target/Challenge";
import Result from "./Result";

const gunFire = new Audio(gunFireAudio);

function ChallengeAim() {
  const [score, setScore] = useState(0);
  const [countdown, setCountdown] = useState(50);// State for the countdown timer
  const [gameOver, setGameOver] = useState(false);

  // Function to reset the game state when the player retries
  const onRetry = () => {
    setScore(0); // Reset score to 0
    setCountdown(30); // Reset countdown to 30 seconds
    setGameOver(false); // Reset game over status
  };

  // Effect hook to handle the countdown timer
  useEffect(() => {
    if (countdown === 0) { // Check if the countdown has reached 0
      setGameOver(true);
    } else {
      const timer = setTimeout(() => { // Decrease the countdown by 1 every second
        setCountdown(countdown - 1);  // Update countdown state
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);
 
  // Function to handle score increase when the target is hit
  const handleScoreIncrease = () => {
    gunFire.currentTime = 0;  // Reset gunfire audio to the beginning
    gunFire.play();  // Play the gunfire sound effect
    setScore((prev) => prev + 1); // Increment the score by 1
  };

  return (
    <>
    {/* Check if the game is over */}
      {gameOver ? (
        <Result score={score} onRetry={onRetry} />
      ) : (
        <div className="container">
          <ScoreCard score={score} />
          <Timer timer={countdown} />
          <TargetPreAim score={score} setScore={handleScoreIncrease} />
        </div>
      )}
    </>
  );
}

export default ChallengeAim;
