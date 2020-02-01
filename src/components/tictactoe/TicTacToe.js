import React from "react";
import "./TicTacToe.styles.css";
import Board from "./board/Board";

const TicTacToe = ({}) => {
  return (
    <div className="tic-tac-toe-container">
      <Board />
    </div>
  );
};

export default TicTacToe;
