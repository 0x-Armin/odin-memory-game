import React, { useState } from "react";

const Scoreboard = () => {
  const [currScore, setCurrScore] = useState(0);
  const [topScore, setTopScore] = useState(0);

  const incrementCurrScore = () => {
    setCurrScore(currScore + 1);
  };

  const resetCurrScore = () => {
    setCurrScore(0);
  };

  const updateTopScore = () => {
    if (currScore > topScore) setTopScore(currScore);
  };

  return (
    <div>
      <div>Current score: {currScore}</div>
      <div>Top score: {topScore}</div>
    </div>
  );
};

export default Scoreboard;
