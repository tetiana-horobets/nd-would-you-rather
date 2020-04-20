import React from 'react';
import { connect } from 'react-redux'
import {loadUsers, selectUser, logout, loadQuestions} from './store/ActionCreators.js'
import HomePage from './HomePage.js'
import LeaderboardPage from './LeaderboardPage.js'
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

class App extends React.Component {

  componentDidMount() {
    this.props.loadUsers();
    this.props.loadQuestions();
  }

  selectUser(id) {
    this.props.selectUser(id);
  }

  logout() {
    this.props.logout();
  }

  render() {
    return <Router>
      <Route path="/" exact component={() => <HomePage/>}/>
      <Route path="/leaderboard" component={() => <LeaderboardPage/>}/>
    </Router>
  }

  render2() {
    if (this.props.selectedUser) {
      const questions = Object.entries(this.props.questions).map(entry => <li key={entry[1].id} >{entry[1].id}</li>);

      return <div>
        <h1>Current user: {this.props.selectedUser}</h1>
        <a onClick={() => this.logout()}>Logout</a>
        <div>{questions}</div>
      </div>
    }
    const users = Object.entries(this.props.users).map(entry => <li key={entry[1].id} onClick={() => this.selectUser(entry[1].id)}>{entry[1].name}</li>);
    return <div>{users}</div>
  }
}

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    users: state.users,
    selectedUser: state.selectedUser,
    questions: state.questions
  }
}

const mapDispatchToProps = {loadUsers, selectUser, logout, loadQuestions}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
