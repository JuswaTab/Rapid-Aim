import React, { useEffect, useState } from 'react';
import "../App.css";
import gunFireAudio from "../assets/9mm.mp3";
import ScoreCard from "../components/ScoreCard/ScoreCard";
import Timer from "../components/ScoreCard/Timer";
import TargetPreAim from "../components/Target/TargetPreAim";
import Result from "./Result";

// Preload audio
const gunFire = new Audio(gunFireAudio);

function PreAim({ difficulty }) {
  const [score, setScore] = useState(0);
  const [countdown, setCountdown] = useState(difficulty.timer); // Use the timer from difficulty settings
  const [gameOver, setGameOver] = useState(false);
  
  useEffect(() => {
    if (countdown === 0) {
      setGameOver(true);
    } else {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  const handleScoreIncrease = () => {
    gunFire.currentTime = 0;  // Reset audio position
    gunFire.play();
    setScore(score + difficulty.pointsMultiplier);
  };

  return (
    <>
      {gameOver ? (
        <Result score={score} />
      ) : (
        <div className="container">
          <ScoreCard score={score} />
          <Timer timer={countdown} />
          <TargetPreAim score={score} setScore={handleScoreIncrease} respawnRate={difficulty.respawnRate} />
        </div>
      )}
    </>
  );
}

export default PreAim;
