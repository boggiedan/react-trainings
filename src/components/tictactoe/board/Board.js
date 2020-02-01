import React, { useState, Fragment } from "react";
import Box from "./box/Box";
import NextPlayer from "./nextplayer/NextPlayer";
import Move from "./move/Move";

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
  const [history, setHistory] = useState({
    values: Array(9).fill(null),
    steps: Array(9).fill(null)
  });
  const [currentStep, setCurrentStep] = useState(0);
  const [isXNext, setIsXNext] = useState(true);
  const [isGameFinished, setIsGameFinished] = useState(false);

  const getUserValue = () => (isXNext ? USER_X : USER_O);

  const constructHistoryFromMoveNumber = move => {
    return {
      values: history.values.map((value, index) =>
        history.steps[index] > move ? null : history.values[index]
      ),
      steps: history.steps.map(step => (step > move ? null : step))
    };
  };

  const userPlayedHandler = position => {
    const newStep = currentStep + 1;

    history.values[position] = getUserValue();
    history.steps[position] = newStep;

    if (calculateWinner(history.values)) {
      setIsGameFinished(true);

      return;
    }

    setHistory(history);
    setCurrentStep(newStep);
    setIsXNext(!isXNext);
  };

  const goToClickHandler = move => {
    setHistory(constructHistoryFromMoveNumber(move));
    setCurrentStep(move);
    setIsXNext(move % 2 === 0);
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
        value={history.values[index]}
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
        {history.values.slice(0, currentStep).map(renderMove)}
      </div>
    </Fragment>
  );
};

export default Board;
