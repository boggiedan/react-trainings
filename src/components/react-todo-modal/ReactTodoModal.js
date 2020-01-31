import React, { useState } from "react";
import useModal from "./modal/useModal";
import "./ReactTodoModal.styles.css";
import Input from "./input/Input";
import TodoList from "./todolist/TodoList";
import Modal from "./modal/Modal";
import Todo from "./todo/Todo";
import { generateUuidv4 } from "../../utils/uuidUtils";

const ReactTodoModal = () => {
  const [todos, setTodos] = useState([]);
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [isShowing, toggle] = useModal();

  const addTodoHandler = value => {
    setTodos([
      ...todos,
      {
        id: generateUuidv4(),
        value
      }
    ]);
  };

  const todoClickHandler = todo => {
    if (selectedTodo !== todo) {
      setSelectedTodo(todo);
      toggle();
    }
  };

  return (
    <div className="container">
      <div className="content-container">
        <Input onSubmit={addTodoHandler} />
        <TodoList list={todos} onTodoClick={todoClickHandler} />
        <Modal isShowing={isShowing} onHide={toggle}>
          {selectedTodo && (
            <Todo id={selectedTodo.id} value={selectedTodo.value} />
          )}
        </Modal>
      </div>
    </div>
  );
};

export default ReactTodoModal;
