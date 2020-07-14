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

    newDeposit: [{
      depositAmount: '',
      note: '',
    }],

    addGoal: [{
      goalName: "Yes",
      goalAmount: "500",
      goalNotes: '',
    }],
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



  handleDepositSubmit = (id) =>
  // function to add recent deposit to currentAmount of goal
  {
    let goalId = id;
    let goalObject = this.state.goalList.filter(goal => goal.id === goalId)
    goalObject[0].currentAmount = parseInt(goalObject[0].currentAmount) + parseInt(this.state.newDeposit[0].depositAmount);

    this.setState(() => {
      this.state.goalList.map((goal) => {
        if (goal.id === id) {
          return { ...goalObject }
        } else {
          return goal
        }
      });
    });
  }

  handleDeposit = (event) => {
    // sets value of input to newDeposit state
    event.preventDefault();

    this.setState({
      newDeposit: [{
        depositAmount: event.target.value,
        note: this.state.newDeposit.note
      }]
    })
  }

  handleAddNewGoal = (event) => {
    // Function that creates a new goal object and adds to goalList
    event.preventDefault();
    let newName = this.state.addGoal[0].goalName;
    let newAmount = this.state.addGoal[0].goalAmount;
    if (this.state.addGoal.goalName !== 0) {
      let newGoalObject = {
        id: shortid.generate(),
        goalName: newName,
        currentAmount: '0',
        goalAmount: newAmount,
        goalNotes: '',
      };
      this.setState({
        goalList: [...this.state.goalList, newGoalObject]
      });
    }
  };

  handleNewGoalChange = (event) => {
    // sets info from amount to state of addGoal
    event.preventDefault();
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
            goalList={this.state.goalList}
            onSubmit={this.handleSubmit}
          />
        </Route>
        <Switch>
          <Route exact path="/Goals">
            <MyGoals
              master
              newGoal={this.state.newGoal}
              handleDeposit={this.handleDeposit}
              goalList={this.state.goalList}
              newDeposit={this.state.newDeposit}
              addGoal={this.state.addGoal}
              handleSubmit={this.handleDepositSubmit}
            />
            <NewGoalModal
              handleSubmit={this.handleAddNewGoal}
              handleChange={this.handleNewGoalChange}
            />
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
