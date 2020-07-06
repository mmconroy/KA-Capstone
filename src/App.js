import React from "react";
import "./App.css";
import Landing from "./Landing/Landing";
import TopMenu from "./Menu/TopMenu";
import BottomMenu from "./Menu/BottomMenu";

function App() {
  return (
    <div className="App">
      <TopMenu />
      <BottomMenu />
    </div>
  );
}

export default App;
