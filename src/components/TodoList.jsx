import React, { useContext } from "react";
import ActionBar from "./ActionBar";

import { TodosContext } from "../context/TodosContext";
import { StatusContext } from "../context/StatusContext";

function TodoList() {
  const [todos, setTodos] = useContext(TodosContext);
  const [status] = useContext(StatusContext);

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleCompletion = (id) => {
    const todosToUpdate = [...todos];
    const index = todosToUpdate.findIndex((todo) => todo.id === id);
    if (index !== -1) {
      todosToUpdate[index].completed = !todosToUpdate[index].completed;
    }
    setTodos(todosToUpdate);
  };

  let filteredTodos = [];

  if (status === "all") {
    filteredTodos = todos;
  } else if (status === "active") {
    filteredTodos = todos.filter((todo) => !todo.completed);
  } else if (status === "completed") {
    filteredTodos = todos.filter((todo) => todo.completed);
  }

  return (
    <ul className="todolist">
      {filteredTodos.map((todo) => {
        return (
          <li
            onClick={() => {
              toggleCompletion(todo.id);
            }}
            className={`todolist__item ${todo.completed ? "striked" : ""}`}
            key={todo.id}
          >
            <input
              checked={todo.completed}
              id={todo.id}
              className="checkbox"
              type="checkbox"
              onChange={() => {
                toggleCompletion(todo.id);
              }}
            />
            <label className="checkbox-icon" htmlFor={todo.id}></label>
            <p className="todolist__item-description">{todo.description}</p>
            <button
              onClick={(e) => {
                e.stopPropagation();
                deleteTodo(todo.id);
              }}
              className="todolist__item-delete"
            ></button>
          </li>
        );
      })}
      <ActionBar />
    </ul>
  );
}

export default TodoList;
