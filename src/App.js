import React, { Component } from "react";
import "./App.css";
import { Switch, Route, withRouter } from "react-router-dom";
import shortid from "shortid";
import Landing from "./Landing/Landing";
import TopMenu from "./Menu/TopMenu";
import BottomMenu from "./Menu/BottomMenu";
import Splash from "./Landing/Splash";
import BudgetSetup from "./Budget/BudgetSetup";
import Login from "./Login/Login";
import MyGoals from "./Goals/GoalsDetail";
import NewGoalModal from "./Goals/modals/NewGoalModal";
import GoalDepositModal from "./Goals/modals/GoalDepoitModal";
import GoalsDetail from "./Goals/GoalsDetail";

const GOALS_KEY = "myapp_goals";

class App extends Component {
  state = {
    goalList: [],
    newGoal: "",
  };
  handleInputChange = (event) => {
    this.setState({ newGoal: event.target.value });
  };
  componentDidMount() {
    const goalString = localStorage.getItem(GOALS_KEY);
    if (goalString) {
      this.setState({ todoList: JSON.parse(goalString) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.todoList !== this.state.goalList) {
      localStorage.setItem(GOALS_KEY, JSON.stringify(this.state.goalList));
    }
  }
  handleAddNewGoal = () => {
    let newGoal = {
      id: shortid.generate(),
      title: this.state.newGoal,
      description: "",
    };
    this.setState({
      goalList: [...this.state.goalList, newGoal],
      newGoal: "",
    });
  };
  handleSubmit = (form) => {
    this.setState((state) => {
      let updatedList = state.goalList.map((item) => {
        if (form.id === item.id) {
          return { ...form };
        } else {
          return item;
        }
      });
      return {
        goalList: updatedList,
      };
    });
  };

  render() {
    return (
      <div className="App">
        <TopMenu />
        <Switch>
          <Route exact path="/Login">
            <Login history={this.props.history} />
          </Route>
          <Route exact path="/Landing">
            <Landing />
          </Route>
        </Switch>
        <Route exact path="/Setup">
          <BudgetSetup
            goalList={this.state.goalList}
            onSubmit={this.handleSubmit}
          />
        </Route>
        <Switch>
          <Route exact path="/Goals">
            <MyGoals />
            <NewGoalModal />
            <GoalDepositModal />
          </Route>
        </Switch>
        <Route exact path="/">
          <Splash />
        </Route>
        {/* <BottomMenu /> */}
      </div>
    );
  }
}

export default withRouter(App);
