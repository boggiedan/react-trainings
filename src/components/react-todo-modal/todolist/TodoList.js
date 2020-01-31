import React from "react";
import PropTypes from "prop-types";
import Todo from "../todo/Todo";

const TodoList = ({ list, onTodoClick }) => {
  const todoClickedHandler = todo => onTodoClick(todo);

  const renderTodo = item => (
    <Todo
      key={item.id}
      id={item.id}
      value={item.value}
      onClick={todoClickedHandler}
    />
  );

  return <div>{list.map(renderTodo)}</div>;
};

TodoList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      value: PropTypes.string.isRequired
    })
  ).isRequired,

  onTodoClick: PropTypes.func.isRequired
};

TodoList.defaultProps = {
  list: []
};

export default TodoList;
