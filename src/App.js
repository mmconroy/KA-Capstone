import React from "react";
import "./App.css";
import Landing from "./Landing/Landing";
import TopMenu from "./Menu/TopMenu";
import BottomMenu from "./Menu/BottomMenu";
import Splash from "./Landing/Splash";
import BudgetSetup from "./Budget/BudgetSetup";
import BudgetOverview from "./Budget/BudgetOverview";
import Login from "./Login/Login";
import MyGoals from "./Goals/GoalsDetail";
import NewGoalModal from './Goals/modals/NewGoalModal'
import GoalDepositModal from './Goals/modals/GoalDepoitModal'

function App() {
  return (
    <div className="App">
      <TopMenu />
      {/* <Login /> */}
      {/* <Splash /> */}
      {/* <Landing /> */}
      {/* <BudgetSetup /> */}
      {/* <BudgetOverview /> */}
      {/* <MyGoals /> */}
      {/* <NewGoalModal /> */}
      {/* <GoalDepositModal /> */}
      <BottomMenu />
    </div>
  );
}

export default App;
