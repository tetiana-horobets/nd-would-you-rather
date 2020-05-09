import React from 'react';
import {Redirect, Link} from 'react-router-dom';
import { connect } from 'react-redux';
import QuestionPreview from './components/QuestionPreview.js';
import {showAnsweredQuestions, showUnansweredQuestions} from './store/ActionCreators.js';

class HomePage extends React.Component {

  hasVoted(question) {
    return question.optionOne.votes.includes(this.props.selectedUser)
      || question.optionTwo.votes.includes(this.props.selectedUser)
  }

  renderUnansweredQuestions() {
    const questions = Object.values(this.props.questions)
      .filter(question => !this.hasVoted(question))
      .map(question => <QuestionPreview
        key={question.id}
        question={question}
      />);
      return <div>
        <button onClick={() => this.props.showAnsweredQuestions()}>Show answered</button>
        <div>{questions}</div>
       </div>
  }

  renderAnsweredQuestions() {
    const questions = Object.values(this.props.questions)
      .filter(question => this.hasVoted(question))
      .map(question => <QuestionPreview
        key={question.id}
        question={question}
      />);
      return <div>
        <button onClick={() => this.props.showUnansweredQuestions()}>Show unanswered</button>
        <div>{questions}</div>
       </div>
  }

  render() {
    if (!this.props.selectedUser) {
      return <Redirect to={'/signin'}/>
    }

    return <div>
       <h1>Current user: {this.props.selectedUser}</h1>
       <Link to={'/logout'}>Logout</Link><br/>
       <Link to={'/new-question'}>Create new question</Link>
       <div>
        {this.props.questionsDisplayPreference === 'ANSWERED' && this.renderAnsweredQuestions()}
        {this.props.questionsDisplayPreference === 'UNANSWERED' && this.renderUnansweredQuestions()}
       </div>
     </div>
   }
}

const mapStateToProps = state => {
  return {
    users: state.users,
    selectedUser: state.selectedUser,
    questions: state.questions,
    questionsDisplayPreference: state.questionsDisplayPreference
  }
}

const mapDispatchToProps = {showAnsweredQuestions, showUnansweredQuestions}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
