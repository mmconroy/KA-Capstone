import React from "react";
import "./App.css";
import { Switch, Route, withRouter } from "react-router-dom";
import shortid from "shortid";
import TopMenu from "./Menu/TopMenu";
import Splash from "./Landing/Splash";
import BudgetSetup from "./Budget/BudgetSetup";
import NewGoalModal from "./Goals/modals/NewGoalModal";
import MyGoals from "./Goals/MyGoals";

const GOALS_KEY = "HIVE_GOALS";
const SAVINGS_KEY = "HIVE_SAVINGS";

class App extends React.Component {
  state = {
    goalList: [],
    newGoal: "",
    savingsAmount: 0,
    calculatedSavingsAmount: 0,
    currentAmount: 0,

    goalName: "",
    goalAmount: 0,

    newDeposit: [
      {
        depositAmount: 0,
        note: "",
      },
    ],
  };

  calcTotalProgress = () => {
    const currentAmountTotal = this.state.goalList.reduce(
      (totalAmount, goal) => Number(totalAmount) + Number(goal.currentAmount),
      0
    );
    return currentAmountTotal;
  };

  componentDidMount() {
    const goalString = localStorage.getItem(GOALS_KEY);
    const savingsString = localStorage.getItem(SAVINGS_KEY);
    if (goalString) {
      this.setState({
        goalList: JSON.parse(goalString),
        savingsAmount: Number(JSON.parse(savingsString)),
      });
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.goalList !== this.state.goalList) {
      localStorage.setItem(GOALS_KEY, JSON.stringify(this.state.goalList));
    }
    if (prevState.savingsAmount !== this.state.savingsAmount) {
      localStorage.setItem(
        SAVINGS_KEY,
        JSON.stringify(this.state.savingsAmount)
      );
    }
  }
  handleSavingsDeposit = (id) => {
    let goalId = id;
    let goalObject = this.state.goalList.filter((goal) => goal.id === goalId);
    goalObject[0].currentAmount =
      goalObject[0].currentAmount * 1 +
      this.state.newDeposit[0].depositAmount * 1;
    this.setState((state) => {
      state.goalList.map((goal) => {
        if (goal.id === id) {
          return { ...goalObject };
        } else {
          return goal;
        }
      });
    });
  };

  handleGoalInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
  };

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

  handleDepositSubmit = (id) =>
    // function to add recent deposit to currentAmount of goal
    {
      let goalId = id;
      let targetGoal = this.state.goalList.find((goal) => goal.id === goalId);
      this.setState({});
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
      this.setState((state) => {
        return {
          goalList: state.goalList.map((goal) => {
            if (goal.id === id) {
              return {
                ...goal,
                currentAmount:
                  goal.currentAmount + state.newDeposit[0].depositAmount,
              };
            } else {
              return goal;
            }
          }),
        };
      });
    };

  handleAddNewDeposit = (event) => {
    // sets value of input to newDevposit state
    event.preventDefault();
    const value = Number(event.target.value);
    this.setState({
      newDeposit: [
        {
          depositAmount: value,
          note: this.state.newDeposit.note,
        },
      ],
    });
  };

  handleNewGoalObj = (event) => {
    // Function that creates a new goal object and adds to goalList
    event.preventDefault();
    let newName = this.state.goalName;
    let newAmount = this.state.goalAmount;
    if (this.state.goalName !== 0) {
      let newGoalObject = {
        id: shortid.generate(),
        goalName: newName,
        currentAmount: 0,
        goalAmount: newAmount,
        goalNotes: "",
      };
      this.setState({
        goalList: [...this.state.goalList, newGoalObject],
      });
    }
  };

  handleNewGoalChange = (event) => {
    // sets info from modal goal name to state of addGoal (struggling here)
    event.preventDefault();
    let name = event.target.name;
    let value = event.target.value;

    this.setState({ [name]: value });
  };

  // deleteItem = (id) => {
  //   const list = [...this.state.goalList];

  //   const updatedList = list.filter((goal) => goal.id !== goalId);

  //   this.setState({ goalList: updatedList });
  // };

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
              goalList={this.state.goalList}
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
                savingsAmount={this.state.savingsAmount}
                handleAddNewDeposit={this.handleAddNewDeposit}
                newDeposit={this.state.newDeposit}
                handleAddNewGoal={this.handleAddNewGoal}
                handleModalDeposit={this.handleModalDeposit}
                calcTotalProgress={this.calcTotalProgress}
                handleSubmitNewSavingsGoal={this.handleSubmitNewSavingsGoal}
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
