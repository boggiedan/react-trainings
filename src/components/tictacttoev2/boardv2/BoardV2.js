import React, { useState, Fragment } from "react";
import Box from "./boxv2/BoxV2";
import NextPlayer from "./nextplayerv2/NextPlayerV2";
import Move from "./movev2/MoveV2";

const USER_X = "X";
const USER_O = "O";

const lines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

const calculateWinner = boxes => {
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];

    if (boxes[a] && boxes[a] === boxes[b] && boxes[a] === boxes[c])
      return boxes[a];
  }

  return null;
};

const Board = () => {
  const [history, setHistory] = useState([{ values: Array(9).fill(null) }]);
  const [currentStep, setCurrentStep] = useState(0);
  const [isXNext, setIsXNext] = useState(true);
  const [isGameFinished, setIsGameFinished] = useState(false);

  const getUserValue = () => (isXNext ? USER_X : USER_O);

  const userPlayedHandler = position => {
    if (isGameFinished) return;

    const newStep = currentStep + 1;
    let newHistory = history.slice();

    if (history[newStep]) {
      newHistory = history.slice(0, newStep + 1);
      newHistory[newStep].values = history[currentStep].values.slice();
      newHistory[newStep].values[position] = getUserValue();
    } else {
      const newValues = [...history[currentStep].values];
      newValues[position] = getUserValue();

      newHistory.push({ values: newValues });
    }

    setHistory(newHistory);
    setCurrentStep(newStep);

    if (calculateWinner(newHistory[newStep].values)) {
      setIsGameFinished(true);

      return;
    }

    setIsXNext(!isXNext);
  };

  const goToClickHandler = move => {
    setCurrentStep(move);
    setIsGameFinished(false);
  };

  const renderMove = (item, move) => (
    <Move move={move} onClick={goToClickHandler} />
  );

  const renderBox = index => {
    return (
      <Box
        key={index}
        id={index}
        value={history[currentStep].values[index]}
        onClick={userPlayedHandler}
      />
    );
  };

  return (
    <Fragment>
      <div className="tic-tac-toe-board">
        <div className="tic-tac-toe-row">
          {renderBox(0)}
          {renderBox(1)}
          {renderBox(2)}
        </div>
        <div className="tic-tac-toe-row">
          {renderBox(3)}
          {renderBox(4)}
          {renderBox(5)}
        </div>
        <div className="tic-tac-toe-row">
          {renderBox(6)}
          {renderBox(7)}
          {renderBox(8)}
        </div>
      </div>
      <div className="tic-tac-toe-moves-container">
        <NextPlayer player={getUserValue()} isGameFinished={isGameFinished} />
        {history.slice(0, currentStep).map(renderMove)}
      </div>
    </Fragment>
  );
};

export default Board;
