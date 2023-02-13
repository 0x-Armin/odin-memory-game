import React, { useState } from "react";
import Scoreboard from "./scoreboard";
import Cards from "./cards";

const App = () => {
  const [resetTrigger, setResetTrigger] = useState(0);
  const [incrementTrigger, setIncrementTrigger] = useState(0);

  const resetCurrScore = () => {
    setResetTrigger(1);
  };

  const incrementCurrScore = () => {
    setIncrementTrigger(1);
  };

  const resetResetTrigger = () => {
    setResetTrigger(0);
  }

  const resetIncrementTrigger = () => {
    setIncrementTrigger(0);
  }

  return (
    <div className="App">
      <div className='header'>AoT Memory Game</div>
      <Scoreboard
        resetTrigger={resetTrigger}
        resetResetTrigger={resetResetTrigger}
        incrementTrigger={incrementTrigger}
        resetIncrementTrigger={resetIncrementTrigger}
      ></Scoreboard>
      <Cards
        resetCurrScore={resetCurrScore}
        incrementCurrScore={incrementCurrScore}
      ></Cards>
    </div>
  );
};

export default App;
