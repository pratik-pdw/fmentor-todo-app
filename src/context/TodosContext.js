import React, { useState, createContext } from "react";
import { nanoid } from "nanoid";
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

  return (
    <TodosContext.Provider value={[todos, setTodos]}>
      {props.children}
    </TodosContext.Provider>
  );
};
