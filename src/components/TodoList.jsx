import React, { useContext } from "react";
import ActionBar from "./ActionBar";

import { TodosContext } from "../context/TodosContext";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function TodoList() {
  const [todos, setTodos] = useContext(TodosContext);

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

  // const [listTodos, setListTodos] = useState(todos);

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(todos);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setTodos(items);
  };

  return (
    <>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="todolist">
          {(provided) => (
            <ul
              className="todolist"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {todos.map((todo, index) => {
                return (
                  <Draggable key={todo.id} draggableId={todo.id} index={index}>
                    {(provided) => (
                      <li
                        {...provided.draggableProps}
                        ref={provided.innerRef}
                        {...provided.dragHandleProps}
                        className={`todolist__item ${
                          todo.completed ? "striked" : ""
                        }`}
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
                        <label
                          className="checkbox-icon"
                          htmlFor={todo.id}
                        ></label>
                        <p
                          onClick={() => {
                            toggleCompletion(todo.id);
                          }}
                          className="todolist__item-description"
                        >
                          {todo.description}
                        </p>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            deleteTodo(todo.id);
                          }}
                          className="todolist__item-delete"
                        ></button>
                      </li>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
              <ActionBar />
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
}

export default TodoList;
