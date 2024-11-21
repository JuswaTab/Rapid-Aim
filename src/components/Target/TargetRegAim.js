import React, { useEffect, useState } from "react";
import bloodSplashImage from "../../assets/bloodSplash.png"; 
import Mob1 from "../../assets/Insect 1.png";
import Mob2 from "../../assets/Insect 2.png";
import Mob3 from "../../assets/Insect 3.png";
import Mob4 from "../../assets/Insect 4.png";
import Mob5 from "../../assets/Insect 5.png";
import Mob6 from "../../assets/Insect 6.png";
import Mob7 from "../../assets/Insect 7.png";

function TargetRegAim({ score, setScore, respawnRate }) {
  const mobArray = [Mob1, Mob2, Mob3, Mob4, Mob5, Mob6, Mob7];
  const [xCoord, setxCoord] = useState(300);
  const [yCoord, setyCoord] = useState(300);
  const [mobFace, setMobFace] = useState(mobArray[0]);
  const [timerId, setTimerId] = useState(null);
  const [bloodSplashCoords, setBloodSplashCoords] = useState(null);

  const x = window.innerWidth - 120;
  const y = window.innerHeight - 150;

  const mobSwitch = () => {
    setxCoord(Math.floor(Math.random() * (x - 20) + 20));
    setyCoord(Math.floor(Math.random() * (y - 50) + 50));
    setMobFace(mobArray[Math.floor(Math.random() * mobArray.length)]);
  };

  useEffect(() => {
    if (timerId) clearTimeout(timerId);
    const newTimerId = setInterval(() => {
      mobSwitch();
    }, respawnRate);
    setTimerId(newTimerId);

    return () => clearInterval(newTimerId);
  }, [respawnRate]);

  const handleScore = (e) => {
    e.stopPropagation();
    setScore((prev) => prev + 1);

    setBloodSplashCoords({ x: xCoord, y: yCoord });

    setTimeout(() => setBloodSplashCoords(null), 1200);

    mobSwitch();
  };

  const buttonStyle = {
    position: "absolute",
    top: yCoord,
    left: xCoord,
    height: "fit-content",
    width: "fit-content",
    border: "none",
    cursor: "pointer",
    pointerEvents: "auto",
  };

  const bloodSplashStyle = bloodSplashCoords
    ?  {
        position: "absolute",
        top: bloodSplashCoords.y,
        left: bloodSplashCoords.x,
        height: "60px",
        width: "60px",
        pointerEvents: "none",
        zIndex: 1,
      }
    : { display: "none" };

  return (
    <>
      {bloodSplashCoords && (
        <img
          src={bloodSplashImage} 
          alt="Blood Splash"
          style={bloodSplashStyle}
        />
      )}

      <div style={buttonStyle} onMouseDown={handleScore} className="button">
        <img src={mobFace} alt="Mob" style={{ pointerEvents: "none" }} />
      </div>
    </>
  );
}

export default TargetRegAim;
