import React from 'react';
import {Redirect, Link} from 'react-router-dom';
import { connect } from 'react-redux';
import QuestionPreview from './components/QuestionPreview.js';
import Navbar from './components/Navbar.js';
import Container from 'react-bootstrap/Container';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

class HomePage extends React.Component {

  hasVoted(question) {
    return question.optionOne.votes.includes(this.props.selectedUser)
      || question.optionTwo.votes.includes(this.props.selectedUser)
  }

  renderUnansweredQuestions() {
    const questions = Object.values(this.props.questions)
      .filter(question => !this.hasVoted(question))
      .sort((question1, question2) => question2.timestamp - question1.timestamp)
      .map(question => <QuestionPreview
        key={question.id}
        question={question}
        author={this.props.users[question.author]}
      />);
      return <div>{questions}</div>
  }

  renderAnsweredQuestions() {
    const questions = Object.values(this.props.questions)
      .filter(question => this.hasVoted(question))
      .sort((question1, question2) => question2.timestamp - question1.timestamp)
      .map(question => <QuestionPreview
        key={question.id}
        question={question}
        author={this.props.users[question.author]}
      />);
      return <div>{questions}</div>
  }

  render() {
    if (!this.props.selectedUser) {
      return <Redirect to={'/signin'}/>
    }

    return <div>
       <Navbar/>
       <Container>
         <Tabs defaultActiveKey="unanswered" style={{marginTop: '1em'}}>
          <Tab eventKey="unanswered" title="Unanswered questions">
            {this.renderUnansweredQuestions()}
          </Tab>
          <Tab eventKey="answered" title="Answered questions">
            {this.renderAnsweredQuestions()}
          </Tab>
        </Tabs>
       </Container>
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
