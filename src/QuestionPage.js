import React from 'react';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom';
import {vote} from './store/ActionCreators.js';

class QuestionPage extends React.Component {

  vote(option) {
    this.props.vote(this.props.selectedUser, this.props.questionId, option);
  }

  hasVoted(question) {
    return question.optionOne.votes.includes(this.props.selectedUser)
      || question.optionTwo.votes.includes(this.props.selectedUser)
  }

  renderStats(question) {
    const optionOneVotes = question.optionOne.votes.length;
    const optionTwoVotes = question.optionTwo.votes.length;
    const totalVotes = optionOneVotes + optionTwoVotes;

    return <div>
      Option one: {optionOneVotes} / {totalVotes}<br/>
      Option two: {optionTwoVotes} / {totalVotes}
    </div>
  }

  render() {
    if (!this.props.selectedUser) {
      return <Redirect to={'/signin'}/>
    }

    const question = this.props.questions[this.props.questionId];

    if (this.hasVoted(question)) {
      return this.renderStats(question)
    }

    return <div>
      <h1>Would you rather?</h1>
      <div onClick={() => this.vote(1)}>{question.optionOne.text}</div>
      <div onClick={() => this.vote(2)}>{question.optionTwo.text}</div>
    </div>
  }
}

const mapStateToProps = state => {
  return {
    selectedUser: state.selectedUser,
    questions: state.questions,
  }
}

const mapDispatchToProps = {vote}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionPage);
