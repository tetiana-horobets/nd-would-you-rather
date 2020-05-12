import React from 'react';
import { connect } from 'react-redux';
import {loadUsers, loadQuestions} from './store/ActionCreators.js';
import HomePage from './HomePage.js';
import LeaderboardPage from './LeaderboardPage.js';
import SigninPage from './SigninPage.js';
import LogoutPage from './LogoutPage.js';
import QuestionPage from './QuestionPage.js';
import NewQuestion from './NewQuestionPage.js';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

class App extends React.Component {

  componentDidMount() {
    this.props.loadUsers();
    this.props.loadQuestions();
  }

  render() {
    return <Router>
      <Route path="/" exact component={() => <HomePage/>}/>
      <Route path="/leaderboard" component={() => <LeaderboardPage/>}/>
      <Route path="/signin" component={() => <SigninPage/>}/>
      <Route path="/logout" component={() => <LogoutPage/>}/>
      <Route path="/new-question" component={() => <NewQuestion/>}/>
      <Route
        path="/question/:id"
        component={(data) => <QuestionPage questionId={data.match.params.id}
      />}/>
    </Router>
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {loadUsers, loadQuestions}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
