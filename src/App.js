import React from "react";
import "./index.css";
import "./App.css";
import Sidebar from "./Components/SideMenu";
import Todos from "./Components/Todos";
import { AppProvider } from "./AppContext";

function App() {
  return (
    <AppProvider>
      <div className="app">
        <div className="Head">
          <h3>Task To-do</h3>
        </div>
        <div className="wrapper">
          <Sidebar />
          <Todos />
        </div>
      </div>
    </AppProvider>
  );
}

export default App;
