import React from 'react';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom';

class QuestionPage extends React.Component {

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
      <div>{question.optionOne.text}</div>
      <div>{question.optionTwo.text}</div>
    </div>
  }
}

const mapStateToProps = state => {
  return {
    selectedUser: state.selectedUser,
    questions: state.questions,
  }
}

const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionPage);
