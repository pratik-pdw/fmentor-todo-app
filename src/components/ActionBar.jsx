import React, { useContext } from "react";
import { TodosContext } from "../context/TodosContext";
import { StatusContext } from "../context/StatusContext";

function ActionBar() {
  const [todos, setTodos] = useContext(TodosContext);
  const [status, setStatus] = useContext(StatusContext);

  const getIncompleteTodoCount = () => {
    return todos.filter((todo) => !todo.completed).length;
  };

  const handleClearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const statuses = ["all", "active", "completed"];

  return (
    <div className="actionbar">
      <p>{getIncompleteTodoCount()} items left</p>
      <div className="actionbar__statuses">
        {statuses.map((showstatus) => (
          <button
            className={`actionbar__action ${
              status === showstatus ? "active" : ""
            }`}
            key={showstatus}
            onClick={() => {
              setStatus(showstatus);
            }}
          >
            {showstatus}
          </button>
        ))}
      </div>
      <button onClick={handleClearCompleted} className="actionbar__clear">
        Clear Completed
      </button>
    </div>
  );
}

export default ActionBar;
