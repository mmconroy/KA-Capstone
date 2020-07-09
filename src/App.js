import React from "react";
import "./App.css";
import Landing from "./Landing/Landing";
import TopMenu from "./Menu/TopMenu";
import BottomMenu from "./Menu/BottomMenu";
import Splash from "./Landing/Splash";
import BudgetSetup from "./Budget/BudgetSetup";
import BudgetOverview from "./Budget/BudgetOverview";
import GoalModal from "./Goals/modals/GoalModal";
import Login from "./Login/Login";
import GoalsDetail from "./Goals/GoalsDetail";
import NewGoalModal from './Goals/modals/NewGoalModal'

function App() {
  return (
    <div className="App">
      <TopMenu />
      {/* <Login /> */}
      {/* <Splash /> */}
      {/* <Landing /> */}
      {/* <BudgetSetup /> */}
      {/* <GoalModal /> */}
      {/* <BudgetOverview /> */}
      {/* <GoalsDetail /> */}
      <NewGoalModal />
      <BottomMenu />
    </div>
  );
}

export default App;
