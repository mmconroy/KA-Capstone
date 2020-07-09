import React from "react";
import "./App.css";
import Landing from "./Landing/Landing";
import TopMenu from "./Menu/TopMenu";
import BottomMenu from "./Menu/BottomMenu";
import Splash from "./Landing/Splash";
import BudgetSetup from "./Budget/BudgetSetup";

import GoalModal from "./Goals/GoalModal";
import Login from "./Login/Login";
import GoalsDetail from "./Goals/GoalsDetail";

function App() {
  return (
    <div className="App">
      {/* <TopMenu /> */}
      {/* <Login /> */}
      {/* <Splash /> */}
      {/* <Landing /> */}
      <BudgetSetup />
      {/* <GoalModal /> */}
      {/* <GoalsDetail /> */}
      {/* <BottomMenu /> */}
    </div>
  );
}

export default App;
