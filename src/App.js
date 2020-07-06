import React from "react";
import "./App.css";
import Landing from "./Landing/Landing";
import TopMenu from "./Menu/TopMenu";
import BottomMenu from "./Menu/BottomMenu";
import Splash from "./Landing/Splash";
import BudgetSetup from "./Budget/BudgetSetup";
import BudgetOverview from "./Budget/BudgetOverview";

function App() {
  return (
    <div className="App">
      <TopMenu />
      {/* <Splash /> */}
      {/* <Landing /> */}
      {/* <BudgetSetup /> */}
      <BudgetOverview />
      <BottomMenu />
    </div>
  );
}

export default App;
