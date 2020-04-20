import React from 'react';
import {Redirect, Link} from "react-router-dom";
import { connect } from 'react-redux';

class HomePage extends React.Component {

  render() {
    if (!this.props.selectedUser) {
      return <Redirect to={'/signin'}/>
    }
    const questions = Object.entries(this.props.questions).map(entry => <li key={entry[1].id} >{entry[1].id}</li>);

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
