import React from "react";
import CenterBox from "./components/CenterBox";
import Header from "./components/Header";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "./sass/main.scss";
import { TodosProvider } from "./context/TodosContext";
function App() {
  return (
    <div className="site" theme="light">
      <TodosProvider>
        <CenterBox>
          <Header />
          <TodoInput />
          <TodoList />
        </CenterBox>
      </TodosProvider>
    </div>
  );
}

export default App;
