import { useState } from "react";
import Home from "./components/Home/Home";
import PreAim from "./pages/PreAim";
import RegAim from "./pages/RegAim";
import DifficultySelection from "./components/DifficultySelection";

function App() {
  const [screen, setScreen] = useState(0);
  const [difficulty, setDifficulty] = useState(null);

  const startGame = (mode) => {
    if (!difficulty) {
      alert("Please select a difficulty level!");
      return;
    }
    setScreen(mode);
  };

  return (
    <div>
      {screen === 0 && (
        <div>
          <DifficultySelection setDifficulty={setDifficulty} />
          <Home regAim={() => startGame(1)} preAim={() => startGame(2)} />
        </div>
      )}
      {screen === 1 && <RegAim difficulty={difficulty} />}
      {screen === 2 && <PreAim difficulty={difficulty} />}
    </div>
  );
}

export default App;
