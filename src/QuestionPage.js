import React from 'react';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom';

class QuestionPage extends React.Component {

  render() {
    if (!this.props.selectedUser) {
      return <Redirect to={'/signin'}/>
    }

    const question = this.props.questions[this.props.questionId];

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
