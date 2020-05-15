import React from 'react';
import { connect } from 'react-redux';
import {loadUsers, loadQuestions} from './store/ActionCreators.js';
import HomePage from './pages/HomePage.js';
import LeaderboardPage from './pages/LeaderboardPage.js';
import SigninPage from './pages/SigninPage.js';
import LogoutPage from './pages/LogoutPage.js';
import QuestionPage from './pages/QuestionPage.js';
import NewQuestionPage from './pages/NewQuestionPage.js';
import NotFoundPage from './pages/NotFoundPage.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import queryString from 'query-string';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

class App extends React.Component {

  componentDidMount() {
    this.props.loadUsers();
    this.props.loadQuestions();
  }

  render() {
    return <Router>
      <Switch>
        <Route path="/" exact component={() => <HomePage/>}/>
        <Route path="/leaderboard" exact component={() => <LeaderboardPage/>}/>
        <Route path="/signin" exact component={data => {
          const values = queryString.parse(data.location.search)
          return <SigninPage to={values.to}/>}}/>
        <Route path="/logout" exact component={() => <LogoutPage/>}/>
        <Route path="/new-question" exact component={() => <NewQuestionPage/>}/>
        <Route
          path="/question/:id"
          component={(data) => <QuestionPage questionId={data.match.params.id}
        />}/>
        <Route path="*" component={() => <NotFoundPage/>}/>
      </Switch>
    </Router>
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {loadUsers, loadQuestions}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
