import React, { useEffect, useState } from "react";
import zombie1 from "../../assets/1.png";
import zombie2 from "../../assets/3.png";
import zombie3 from "../../assets/4.png";
import zombie4 from "../../assets/2.png";

function TargetRegAim({ score, setScore, respawnRate, difficulty }) {
  const zombieArray = [zombie1, zombie2, zombie3, zombie4];
  const [xCoord, setxCoord] = useState(300);
  const [yCoord, setyCoord] = useState(300);
  const [zombieFace, setZombieFace] = useState(zombieArray[0]);
  const [timerId, setTimerId] = useState(null);

  const x = window.innerWidth - 120;
  const y = window.innerHeight - 150;

  // Move zombie to random position
  const zombieSwitch = () => {
    setxCoord(Math.floor(Math.random() * (x - 20) + 20));
    setyCoord(Math.floor(Math.random() * (y - 50) + 50));
    setZombieFace(zombieArray[Math.floor(Math.random() * zombieArray.length)]);
  };

  // Set interval to reposition zombie
  useEffect(() => {
    if (timerId) clearTimeout(timerId);
    const newTimerId = setInterval(() => {
      zombieSwitch();
    }, respawnRate);
    setTimerId(newTimerId);

    return () => clearInterval(newTimerId);
  }, [respawnRate]);

  // Score handler
  const handleScore = (e) => {
    e.stopPropagation();  // Prevents click event from bubbling up
    setScore((prev) => prev + 1);
    zombieSwitch();  // Immediately reposition zombie on hit
  };

  const buttonStyle = {
    position: "absolute",
    top: yCoord,
    left: xCoord,
    height: "fit-content",
    width: "fit-content",
    border: "none",
    cursor: "pointer",
    pointerEvents: "auto"  // Ensure clicks are allowed on this element
  };

  return (
    <div style={buttonStyle} onMouseDown={handleScore} className="button">
      <img src={zombieFace} alt="Zombie" style={{ pointerEvents: "none" }} />
    </div>
  );
}

export default TargetRegAim;
