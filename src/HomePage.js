import React from 'react';
import {Redirect, Link} from 'react-router-dom';
import { connect } from 'react-redux';
import QuestionPreview from './components/QuestionPreview.js';

class HomePage extends React.Component {

  hasVoted(question) {
    return question.optionOne.votes.includes(this.props.selectedUser)
      || question.optionTwo.votes.includes(this.props.selectedUser)
  }

  render() {
    if (!this.props.selectedUser) {
      return <Redirect to={'/signin'}/>
    }

    const questions = Object.values(this.props.questions)
      .filter(question => !this.hasVoted(question))
      .map(question => <QuestionPreview
        key={question.id}
        question={question}
      />);

    return <div>
      <h1>Current user: {this.props.selectedUser}</h1>
      <Link to={'/logout'}>Logout</Link>
      <div>{questions}</div>
    </div>
  }
}

const mapStateToProps = state => {
  return {
    users: state.users,
    selectedUser: state.selectedUser,
    questions: state.questions
  }
}

const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
