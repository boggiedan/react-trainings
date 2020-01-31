import React from "react";
import PropTypes from "prop-types";

const Todo = ({ id, value, onClick }) => {
  const clickHandler = () => onClick && onClick({ id, value });

  return (
    <div className="todo-container" onClick={clickHandler}>
      <p className="todo-title">{value}</p>
    </div>
  );
};

Todo.propTypes = {
  id: PropTypes.string.isRequired,

  value: PropTypes.string.isRequired,

  onClick: PropTypes.func
};

export default Todo;
