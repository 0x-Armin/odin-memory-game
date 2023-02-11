import React, { useEffect, useState } from "react";

const Scoreboard = (props) => {
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

  useEffect(() => {
    if (props.resetTrigger) {
      resetCurrScore();
      props.resetResetTrigger();
    }
  }, [props.resetTrigger]);

  useEffect(() => {
    if (props.incrementTrigger) {
      incrementCurrScore();
      props.resetIncrementTrigger();
    }
  }, [props.incrementTrigger]);

  useEffect(() => {
    if (currScore) updateTopScore();
  }, [currScore]);

  return (
    <div>
      <div>Current score: {currScore}</div>
      <div>Top score: {topScore}</div>
    </div>
  );
};

export default Scoreboard;
