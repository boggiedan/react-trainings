import React from "react";
import PropTypes from "prop-types";

const Box = ({ id, value, onClick }) => {
  const clickHandler = () => !value && onClick(id);

  return (
    <div className="tic-tac-toe-box" onClick={clickHandler}>
      <p className="tic-tac-toe-value">{value}</p>
    </div>
  );
};

Box.propTypes = {
  id: PropTypes.number.isRequired,

  value: PropTypes.string,

  onClick: PropTypes.func.isRequired
};

export default Box;
