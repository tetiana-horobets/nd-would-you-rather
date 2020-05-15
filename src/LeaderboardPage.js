import React from 'react';
import { connect } from 'react-redux';
import Navbar from './components/Navbar.js';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import ProfilePicture from './components/ProfilePicture.js';

class LeaderboardPage extends React.Component {

  getStats(user) {
    const questions = user.questions.length;
    const answers = Object.values(user.answers).length;

    return {
      questions: questions,
      answers: answers,
      score: questions + answers
    }
  }

  renderCard(user) {
    return <Card key={user.id} style={{ width: '22rem', margin: '1em auto'}}>
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <div>
          <ProfilePicture user={user} />
          <p>Answered questions: {user.stats.questions}</p>
          <p>Created questions: {user.stats.answers}</p>
          <p>Score: {user.stats.score}</p>
        </div>
      </Card.Body>
    </Card>
  }

  render() {
    const users = Object.values(this.props.users)
      .map(user => Object.assign({}, user, {stats: this.getStats(user)}))
      .sort((user1, user2) => user2.stats.score - user1.stats.score)
      .map(user => this.renderCard(user));

    return <div>
       <Navbar/>
       <Container>{users}</Container>
     </div>
  }
}

const mapStateToProps = state => {
  return {
    users: state.users,
  }
}

const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LeaderboardPage);
