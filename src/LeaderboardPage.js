import React from 'react';
import { connect } from 'react-redux';

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

  render() {
    const users = Object.values(this.props.users)
      .map(user => Object.assign({}, user, {stats: this.getStats(user)}))
      .sort((user1, user2) => user2.stats.score - user1.stats.score)
      .map(user => <div key={user.id}>{user.name}
          questions: {user.stats.questions}
          answers: {user.stats.answers}
          score: {user.stats.score}
        </div>);

    return <div>{users}</div>
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
