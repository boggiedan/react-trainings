import React from "react";
import PropTypes from "prop-types";

const NextPlayer = ({ player, isGameFinished }) => {
  return (
    <div>
      {isGameFinished && <p>Player {player} has WON!</p>}
      {!isGameFinished && <p>Next player: {player}</p>}
    </div>
  );
};

NextPlayer.propTypes = {
  player: PropTypes.string.isRequired,

  isGameFinished: PropTypes.bool.isRequired
};

export default NextPlayer;
