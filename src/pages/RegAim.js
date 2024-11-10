import React, { useEffect, useState } from 'react';
import "../App.css";
import gunFire from "../assets/9mm.mp3";
import ScoreCard from "../components/ScoreCard/ScoreCard";
import Timer from "../components/ScoreCard/Timer";
import TargetRegAim from "../components/Target/TargetRegAim";
import Result from "./Result";

function RegAim({ difficulty }) {
  const [score, setScore] = useState(0);
  const [countdown, setCountdown] = useState(difficulty.timer); // Use the timer from difficulty settings
  const [gameOver, setGameOver] = useState(false);

  // Countdown timer effect
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

  // Play gunfire sound on score increment
  const handleScoreIncrease = () => {
    const audio = new Audio(gunFire);
    audio.play();
    setScore(score + difficulty.pointsMultiplier); // Adjust points based on difficulty
  };

  return (
    <>
      {gameOver ? (
        <Result score={score} />
      ) : (
        <div className="container">
          <ScoreCard score={score} />
          <Timer timer={countdown} />
          <TargetRegAim score={score} setScore={handleScoreIncrease} respawnRate={difficulty.respawnRate} />
        </div>
      )}
    </>
  );
}

export default RegAim;