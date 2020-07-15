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
import NewGoalModal from "./Goals/modals/NewGoalModal";
import MyGoals from "./Goals/MyGoals";
import UserGoals from "./Goals/UserGoals";

const GOALS_KEY = "myapp_goals";

class App extends Component {
  state = {
    goalList: [
      {
        id: shortid.generate(),
        goalName: "Rainy Day Fund",
        currentAmount: "900",
        goalAmount: "1000",
        goalNotes: "",
      },
      {
        id: shortid.generate(),
        goalName: "Yoga Classes",
        currentAmount: "200",
        goalAmount: "800",
        goalNotes: "",
      },
      {
        id: shortid.generate(),
        goalName: "New Car",
        currentAmount: "160",
        goalAmount: "5000",
        goalNotes: "",
      },
    ],

    newGoal: "",

    savingsAmount: 0,

    calculatedSavingsAmount: 0,

    newDeposit: [
      {
        depositAmount: "",
        note: "",
      },
    ],

    addGoal: [
      { goalName: "yes" },
      { goalAmount: "500" },
      { goalNotes: "" }],
  };

  handleGoalInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
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

  handleSubmitNewSavingsGoal = (event) => {
    this.setState(
      (state) => {
        return { calculatedSavingsAmount: state.savingsAmount * 0.2 };
      },
      () => {
        event.preventDefault();
        if (this.state.calculatedSavingsAmount !== "") {
          this.props.history.push("/Goals");
        } else {
          this.setState({ error: "Please enter a valid amount" });
        }
      }
    );
  };

  handleChange = (event) => {
    // Generic handle change function
    event.preventDefault();

    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  };

  handleModalDeposit = (id) =>
  // function to add recent deposit to currentAmount of goal
  {
    let goalId = id;
    let goalObject = this.state.goalList.filter((goal) => goal.id === goalId);
    goalObject[0].currentAmount =
      parseInt(goalObject[0].currentAmount) +
      parseInt(this.state.newDeposit[0].depositAmount);
    this.setState(() => {
      this.state.goalList.map((goal) => {
        if (goal.id === id) {
          return { ...goalObject };
        } else {
          return goal;
        }
      });
    });
  };
  handleAddNewDeposit = (event) => {
    // sets value of input to newDeposit state
    event.preventDefault();
    this.setState({
      newDeposit: [
        {
          depositAmount: event.target.value,
        },
      ],
    });
  };
  handleNewGoalObj = (event) => {
    // Function that creates a new goal object and adds to goalList
    event.preventDefault();
    let newName = this.state.addGoal[0].goalName;
    let newAmount = this.state.addGoal[1].goalAmount;
    console.log(this.state.addGoal[0])
    if (this.state.addGoal.goalName !== 0) {
      let newGoalObject = {
        id: shortid.generate(),
        goalName: newName,
        currentAmount: "0",
        goalAmount: newAmount,
        goalNotes: "",
      };
      this.setState({
        goalList: [...this.state.goalList, newGoalObject],
      });
    }
  };
  handleNewGoalChange = (event) => {
    // sets info from amount to state of addGoal (struggling here)
    event.preventDefault();
  };

  render() {
    return (
      <div className="App">
        <TopMenu />
        <Switch>
          <Route exact path="/">
            <Splash />
          </Route>
          <Route exact path="/Setup">
            <BudgetSetup
              // goalList={this.state.goalList}
              handleGoalInputChange={this.handleGoalInputChange}
              onSubmit={this.handleSubmitNewSavingsGoal}
              history={this.props.history}
              savingsAmount={this.state.savingsAmount}
            />
          </Route>
          <Switch>
            <Route exact path="/Goals">
              <MyGoals
                goalList={this.state.goalList}
                savingsAmount={this.state.SavingsAmount}
                calculatedSavingsAmount={this.state.calculatedSavingsAmount}
                newDeposit={this.state.newDeposit}
                addGoal={this.state.addGoal}
                handleAddNewDeposit={this.handleAddNewDeposit}
                handleModalDeposit={this.handleModalDeposit}
              />

              <NewGoalModal
                handleNewGoalObj={this.handleNewGoalObj}
                handleChange={this.handleNewGoalChange}
              />
            </Route>
          </Switch>
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
