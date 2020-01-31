import React from "react";
import "./App.css";
import { Route, Switch, BrowserRouter, Link } from "react-router-dom";
import ReactTodoModal from "./components/react-todo-modal/ReactTodoModal";
import { HOME_ROUTE_PATH, TODO_MODAL_ROUTE_PATH } from "./config/routes";

function App() {
  return (
    <BrowserRouter>
      <div className="navigation-container">
        <Link to={HOME_ROUTE_PATH}>Home</Link>
        <Link to={TODO_MODAL_ROUTE_PATH}>Modal todo exercice</Link>
      </div>
      <Switch>
        <Route exact path={HOME_ROUTE_PATH}>
          <div className="intro-container">
            <h1>
              This little project is my training project whenever I want to test
              some stuff with react. Feel free to use it as you wish.
            </h1>
          </div>
        </Route>
        <Route path={TODO_MODAL_ROUTE_PATH} component={ReactTodoModal} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
