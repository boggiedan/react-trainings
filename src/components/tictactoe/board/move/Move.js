import React from "react";
import PropTypes from "prop-types";

const Move = ({ move, onClick }) => {
  const clickHandler = () => onClick(move);

  return (
    <button className="tic-tac-toe-move" onClick={clickHandler}>
      Go to # {move + 1}
    </button>
  );
};

Move.propTypes = {
  move: PropTypes.number.isRequired,

  onClick: PropTypes.func.isRequired
};

export default Move;
