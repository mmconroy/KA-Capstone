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

    newDeposit: [{
      depositAmount: '',
      note: '',
    }],

  };
  handleInputChange = (event) => {
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

  handleSubmit = (event) => {
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

  newSavingsCount = () => {};

  handleDepositSubmit = (id) =>
  // function to add recent deposit to currentAmount of goal
  {
    let goalId = id;
    let targetGoal = this.state.goalList.find(goal => goal.id === goalId);
    this.setState({})
  }

  handleDeposit = (event) => {
    // sets value of input to newDeposit state
    this.setState({
      newDeposit: [{
        depositAmount: event.target.value,
        note: this.state.newDeposit.note
      }]
    })
  }

  handleChange = (event) => {
    // Generic handle change function
    event.preventDefault();

    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value })
  }

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
            // goalList={this.state.goalList}
            handleInputChange={this.handleInputChange}
            onSubmit={this.handleSubmit}
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
            />
            <NewGoalModal />
            {/* <GoalDepositModal /> */}
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
