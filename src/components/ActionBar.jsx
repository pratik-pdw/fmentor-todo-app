import React, { useContext } from "react";
import { TodosContext } from "../context/TodosContext";
function ActionBar() {
  const [todos, setTodos] = useContext(TodosContext);

  const getIncompleteTodoCount = () => {
    return todos.filter((todo) => !todo.completed).length;
  };

  const handleClearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };
  return (
    <div className="actionbar">
      <p>{getIncompleteTodoCount()} items left</p>
      <div className="actionbar__statuses">
        <button className="actionbar__action">All</button>
        <button className="actionbar__action">Active</button>
        <button className="actionbar__action">Completed</button>
      </div>
      <button onClick={handleClearCompleted} className="actionbar__clear">
        Clear Completed
      </button>
    </div>
  );
}

export default ActionBar;
