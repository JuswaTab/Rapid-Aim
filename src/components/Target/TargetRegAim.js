import React, { useEffect, useState } from "react";
import bloodSplashImage from "../../assets/bloodSplash.png"; 
import Mob1 from "../../assets/Insect 1.png";
import Mob2 from "../../assets/Insect 2.png";
import Mob3 from "../../assets/Insect 3.png";
import Mob4 from "../../assets/Insect 4.png";
import Mob5 from "../../assets/Insect 5.png";
import Mob6 from "../../assets/Insect 6.png";
import Mob7 from "../../assets/Insect 7.png";
import Mob8 from "../../assets/1.png";
import Mob9 from "../../assets/2.png";
import Mob10 from "../../assets/3.png";
import Mob11 from "../../assets/4.png";

// Functional component for Regular Aim Target
function TargetRegAim({setScore, respawnRate }) {
  const mobArray = [Mob1, Mob2, Mob3, Mob4, Mob5, Mob6, Mob7, Mob8, Mob9, Mob10, Mob11]; // Array of mob images for randomization
  const [xCoord, setxCoord] = useState(300); // State to track X-coordinate of the target
  const [yCoord, setyCoord] = useState(300); // State to track Y-coordinate of the target
  const [mobFace, setMobFace] = useState(mobArray[0]); // State to track the current mob image
  const [timerId, setTimerId] = useState(null);  // State to manage the interval timer ID
  const [bloodSplashCoords, setBloodSplashCoords] = useState(null); // State to track coordinates of blood splash effect

  const x = window.innerWidth - 120;
  const y = window.innerHeight - 150;

  const mobSwitch = () => {
    setxCoord(Math.floor(Math.random() * (x - 10) + 10));
    setyCoord(Math.floor(Math.random() * (y - 30) + 30));
    setMobFace(mobArray[Math.floor(Math.random() * mobArray.length)]);
  };

  // Effect to manage the target's respawn timer
  useEffect(() => {
    if (timerId) clearTimeout(timerId); // Clear any existing timer
    const newTimerId = setInterval(() => { 
      mobSwitch(); // Switch target position at intervals
    }, respawnRate); // Use the provided respawn rate
    setTimerId(newTimerId); // Store the new timer ID


    return () => clearInterval(newTimerId); // Cleanup timer on unmount
  }, [respawnRate]); // Dependency array includes respawnRate

  // Function to handle score increment and blood splash effect on hit
  const handleScore = (e) => {
    e.stopPropagation(); 
    setScore((prev) => prev + 1);  // Increment the score

    setBloodSplashCoords({ x: xCoord, y: yCoord }); // Set blood splash at target position


    setTimeout(() => setBloodSplashCoords(null), 1200); // Clear blood splash after 1.2 seconds

    mobSwitch(); // Switch the target's position
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
        <img src={mobFace} alt="Mob" style={{ pointerEvents: "none" }} /> {/*// Disable interaction with image*/}
      </div>
    </>
  );
}

export default TargetRegAim;
