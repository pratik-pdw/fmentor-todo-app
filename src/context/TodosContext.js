import React, { useState, createContext, useContext } from "react";
import { nanoid } from "nanoid";

import { StatusContext } from "./StatusContext";

export const TodosContext = createContext();

export const TodosProvider = (props) => {
  const [todos, setTodos] = useState([
    { id: nanoid(), completed: false, description: "Jog around the park" },
    { id: nanoid(), completed: false, description: "10 Minutes Meditation" },
    { id: nanoid(), completed: false, description: "Read for 1 hour" },
    { id: nanoid(), completed: false, description: "Pick up groceries" },
    {
      id: nanoid(),
      completed: false,
      description: "Complete Todo App on Frontend Mentor",
    },
  ]);

  const [status] = useContext(StatusContext);
  let filteredTodos = [];

  if (status === "all") {
    filteredTodos = todos;
  }
  if (status === "active") {
    filteredTodos = todos.filter((todo) => !todo.completed);
  } else if (status === "completed") {
    filteredTodos = todos.filter((todo) => todo.completed);
  }

  return (
    <TodosContext.Provider value={[filteredTodos, setTodos]}>
      {props.children}
    </TodosContext.Provider>
  );
};
