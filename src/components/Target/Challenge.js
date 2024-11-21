import React, { useEffect, useState } from "react";
import bloodSplashImage from "../../assets/bloodSplash.png";
import Mob1 from "../../assets/Insect 1.png";
import Mob2 from "../../assets/Insect 2.png";
import Mob3 from "../../assets/Insect 3.png";
import Mob4 from "../../assets/Insect 4.png";
import Mob5 from "../../assets/Insect 5.png";
import Mob6 from "../../assets/Insect 6.png";
import Mob7 from "../../assets/Insect 7.png";

function Challenge({ score, setScore }) {
  const mobArray = [Mob1, Mob2, Mob3, Mob4, Mob5, Mob6, Mob7];
  const [xCoord, setxCoord] = useState(300);
  const [yCoord, setyCoord] = useState(300);
  const [mobFace, setMobFace] = useState(mobArray[0]);
  const [respawnRate, setRespawnRate] = useState(1000); 
  const [timerId, setTimerId] = useState(null);
  const [bloodSplashes, setBloodSplashes] = useState([]); 

  let x = window.innerWidth - 120;
  let y = window.innerHeight - 150;

  const mobSwitch = () => {
    setxCoord(Math.floor(Math.random() * (x - 20) + 20));
    setyCoord(Math.floor(Math.random() * (y - 50) + 50));
    setMobFace(mobArray[Math.floor(Math.random() * mobArray.length)]);
  };

  useEffect(() => {
    if (score >= 45) {
      setRespawnRate(300); 
    } else if (score >= 35) {
      setRespawnRate(400); 
    } else if (score >= 20) {
      setRespawnRate(600);
    } else if (score >= 10) {
      setRespawnRate(800); 
    }

    if (timerId) {
      clearInterval(timerId);
    }

    const newTimerId = setInterval(() => {
      mobSwitch();
    }, respawnRate);

    setTimerId(newTimerId);

    return () => clearInterval(newTimerId); 
  }, [score, respawnRate]);

  const handleScore = (e) => {
    if (e.buttons === 1) { 

      const splashId = Date.now(); 
      setBloodSplashes((prev) => [
        ...prev,
        { x: xCoord, y: yCoord, id: splashId },
      ]);
      setScore((prev) => prev + 1);
      mobSwitch(); 


      setTimeout(() => {
        setBloodSplashes((prev) =>
          prev.filter((splash) => splash.id !== splashId)
        );
      }, 1800);
    }
  };

  const buttonStyle = {
    position: "absolute",
    top: yCoord,
    left: xCoord,
    height: "fit-content",
    width: "fit-content",
    border: "none",
    background: "transparent",
    cursor: "pointer",
  };

  return (
    <div>
      {bloodSplashes.map((splash) => (
        <img
          key={splash.id}
          src={bloodSplashImage}
          alt="Blood Splash"
          style={{
            position: "absolute",
            top: splash.y,
            left: splash.x,
            width: "50px",
            height: "50px",
            pointerEvents: "none",
          }}
        />
      ))}

      <div style={buttonStyle} onMouseDown={(e) => handleScore(e)} className="button">
        <img src={mobFace} alt="Mob" />
      </div>
    </div>
  );
}

export default Challenge;
