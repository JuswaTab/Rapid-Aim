import React, { useEffect, useState } from 'react';
import "../App.css";
import gunFireAudio from "../assets/9mm.mp3";
import ScoreCard from "../components/ScoreCard/ScoreBoard";
import Timer from "../components/ScoreCard/Timer";
import TargetRegAim from "../components/Target/TargetRegAim";
import Result from "./Result";

const gunFire = new Audio(gunFireAudio);

function RegAim({ difficulty }) {
  const [score, setScore] = useState(0);
  const [countdown, setCountdown] = useState(difficulty.timer);
  const [gameOver, setGameOver] = useState(false);

  const onRetry = () => {
    setScore(0);
    setCountdown(difficulty.timer);
    setGameOver(false);
  };

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
    gunFire.pause();
    gunFire.currentTime = 0;
    gunFire.play();
    setScore((prevScore) => prevScore + difficulty.pointsMultiplier); 
  };

  return (
    <>
      {gameOver ? (
        <Result score={score} onRetry={onRetry} />
      ) : (
        <div className="container">
          <ScoreCard score={score} />
          <Timer timer={countdown} />
          <TargetRegAim
            score={score}
            setScore={handleScoreIncrease}
            respawnRate={difficulty.respawnRate}
            difficulty={difficulty}
          />
        </div>
      )}
    </>
  );
}

export default RegAim;
