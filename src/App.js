import { useState } from "react";
import Home from "./components/Home/Home";
import ChallengeAim from "./pages/ChallengeAim";
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
    if (gameMode === 1 && !difficulty) {
      alert("Please select a difficulty level!");
      return;
    }
    setScreen(2);
  };

  const goBackToHome = () => {
    setScreen(0); 
    setGameMode(null); 
    setDifficulty(null); 
  };

  return (
    <div>
      {screen === 0 && (
        <Home
          regAim={() => handleGameModeSelect(1)}
          challengeAim={() => handleGameModeSelect(2)}
        />
      )}

      {screen === 1 && gameMode === 1 && ( // For RegAim
        <div className="difficulty-container">
          <DifficultySelection setDifficulty={setDifficulty} onBack={goBackToHome} />
          <button onClick={startGame} className="start-game-button">
            Start Game
          </button>
        </div>
      )}
      {screen === 1 && gameMode === 2 && (() => setScreen(2))()} 



      {screen === 2 &&
        (gameMode === 1 ? (
          <RegAim difficulty={difficulty} />
        ) : (
          <ChallengeAim />
        ))}
    </div>
  );
}

export default App;
