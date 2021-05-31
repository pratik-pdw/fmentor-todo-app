import React from "react";
import CenterBox from "./components/CenterBox";
import Header from "./components/Header";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "./sass/main.scss";
import { TodosProvider } from "./context/TodosContext";
import { StatusProvider } from "./context/StatusContext";
function App() {
  return (
    <div className="site" theme="light">
      <StatusProvider>
        <TodosProvider>
          <CenterBox>
            <Header />
            <TodoInput />
            <TodoList />
          </CenterBox>
        </TodosProvider>
      </StatusProvider>
    </div>
  );
}

export default App;
