import React from 'react';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom';
import {vote} from './store/ActionCreators.js';
import Navbar from './components/Navbar.js';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import ProgressBar from 'react-bootstrap/ProgressBar';

class QuestionPage extends React.Component {

  vote(option) {
    this.props.vote(this.props.selectedUser, this.props.questionId, option);
  }

  hasVoted(question) {
    return question.optionOne.votes.includes(this.props.selectedUser)
      || question.optionTwo.votes.includes(this.props.selectedUser)
  }

  renderStats(question, user) {
    const optionOneVotes = question.optionOne.votes.length;
    const optionTwoVotes = question.optionTwo.votes.length;
    const totalVotes = optionOneVotes + optionTwoVotes;

    const yourAnswer1 = user.answers[question.id] === 'optionOne' ? <span>&nbsp;- your answer</span> : <span/>;
    const yourAnswer2 = user.answers[question.id] === 'optionTwo' ? <span>&nbsp;- your answer</span> : <span/>;

    const votes1 = (optionOneVotes / totalVotes) * 100;
    const votes2 = (optionTwoVotes / totalVotes) * 100;

    return <div>
      {question.optionOne.text}{yourAnswer1}<br/>
      <ProgressBar now={votes1} label={`${votes1}% ${optionOneVotes} / ${totalVotes}`} /><br/>
      {question.optionTwo.text}{yourAnswer2}<br/>
      <ProgressBar now={votes2} label={`${votes2}% ${optionTwoVotes} / ${totalVotes}`} />
    </div>
  }

  renderForm(question) {
    return <div>
      <Form.Check type="radio" label={question.optionOne.text} onClick={() => this.vote('optionOne')} />
      <Form.Check type="radio" label={question.optionTwo.text} onClick={() => this.vote('optionTwo')} />
    </div>
  }

  render() {
    if (!this.props.selectedUser) {
      return <Redirect to={'/signin'}/>
    }

    const user = this.props.users[this.props.selectedUser];
    const question = this.props.questions[this.props.questionId];

    return <div>
      <Navbar/>
      <Card style={{ width: '22rem', margin: '1em auto'}}>
        <Card.Body>
          <Card.Title>Asked by {user.name}</Card.Title>
          <div>
            {user.avatarURL && <Image src={user.avatarURL} rounded />}
            <h6>Would you rather?</h6>
            {!this.hasVoted(question) && this.renderForm(question)}
            {this.hasVoted(question) && this.renderStats(question, user)}
          </div>
        </Card.Body>
      </Card>
    </div>
  }
}

const mapStateToProps = state => {
  return {
    selectedUser: state.selectedUser,
    questions: state.questions,
    users: state.users
  }
}

const mapDispatchToProps = {vote}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionPage);
