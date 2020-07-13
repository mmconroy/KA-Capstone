import React, { Component } from "react";
import "./App.css";
import { Route, Switch, withRouter } from "react-router-dom";
import shortid from "shortid";
import Landing from "./Landing/Landing";
import TopMenu from "./Menu/TopMenu";
import BottomMenu from "./Menu/BottomMenu";
import Splash from "./Landing/Splash";
import BudgetSetup from "./Budget/BudgetSetup";
import Login from "./Login/Login";
import NewGoalModal from "./Goals/modals/NewGoalModal";
import MyGoals from "./Goals/MyGoals";
import UserGoals from './Goals/UserGoals'

const GOALS_KEY = "myapp_goals";

class App extends Component {
  state = {
    goalList: [{
      id: shortid.generate(),
      goalName: "Rainy Day Fund",
      currentAmount: '900',
      goalAmount: "1000",
      goalNotes: '',
    },
    {
      id: shortid.generate(),
      goalName: "Yoga Classes",
      currentAmount: '200',
      goalAmount: "800",
      goalNotes: '',
    },
    {
      id: shortid.generate(),
      goalName: "New Car",
      currentAmount: '160',
      goalAmount: "5000",
      goalNotes: '',
    }],

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
        {/* <Login /> */}
        {/* <Splash /> */}
        {/* <Landing /> */}
        {/* <BudgetSetup
          goalList={this.state.goalList}
          onSubmit={this.handleSubmit}
        /> */}
        <MyGoals
          goalList={this.state.goalList}
        />
        <NewGoalModal />
        <BottomMenu />
      </div>
    );
  }
}

export default App;
