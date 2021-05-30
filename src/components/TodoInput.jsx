import React, { useState, useContext } from "react";
import { TodosContext } from "../context/TodosContext";
import { nanoid } from "nanoid";
function TodoInput() {
  const [todo, setTodo] = useState({ completed: false, description: "" });
  const [todos, setTodos] = useContext(TodosContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.description) {
      setTodos([...todos, { ...todo, id: nanoid() }]);
      resetForm();
    }
  };

  const resetForm = () => {
    setTodo({ completed: false, description: "" });
  };

  return (
    <div className="todoinput">
      <form className="todoinput__form" onSubmit={handleSubmit}>
        <input
          checked={todo.completed}
          onChange={(e) => {
            setTodo({ ...todo, completed: e.target.checked });
          }}
          id="todoinput__form-checkbox"
          className="checkbox"
          type="checkbox"
        />
        <label
          className="checkbox-icon"
          htmlFor="todoinput__form-checkbox"
        ></label>
        <input
          value={todo.description}
          onChange={(e) => {
            setTodo({ ...todo, description: e.target.value });
          }}
          placeholder="Create a new todo..."
          className="todoinput__textbox"
          type="text"
        />
      </form>
    </div>
  );
}

export default TodoInput;
