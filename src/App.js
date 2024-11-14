import { useState } from "react";
import Home from "./components/Home/Home";
import PreAim from "./pages/PreAim";
import RegAim from "./pages/RegAim";
import DifficultySelection from "./components/DifficultySelection";
import "./App.css";



function App() {
  const [screen, setScreen] = useState(0); 
  const [gameMode, setGameMode] = useState(null); 
  const [difficulty, setDifficulty] = useState(null);

  const handleGameModeSelect = (mode) => {
    setGameMode(mode);
    setScreen(1); 
  };

  const startGame = () => {
    if (!difficulty) {
      alert("Please select a difficulty level!");
      return;
    }
    setScreen(2); 
  };

  return (
    <div>
      {screen === 0 && (
        <Home
          regAim={() => handleGameModeSelect(1)}
          preAim={() => handleGameModeSelect(2)}
        />
      )}
      {screen === 1 && (
        <div className="difficulty-container">
          <DifficultySelection setDifficulty={setDifficulty} />
          <button onClick={startGame} className="start-game-button">
            Start Game
          </button>
        </div>
      )}
      {screen === 2 &&
        (gameMode === 1 ? (
          <RegAim difficulty={difficulty} />
        ) : (
          <PreAim difficulty={difficulty} />
        ))}
    </div>
  );
}

export default App;
