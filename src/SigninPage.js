import React from 'react';
import {selectUser} from './store/ActionCreators.js';
import {Redirect} from "react-router-dom";
import { connect } from 'react-redux';

class SigninPage extends React.Component {

  selectUser(id) {
    this.props.selectUser(id);
  }

  render() {
    if (this.props.selectedUser) {
      return <Redirect to={'/'}/>
    }
    const users = Object.entries(this.props.users).map(entry => <li key={entry[1].id} onClick={() => this.selectUser(entry[1].id)}>{entry[1].name}</li>);
    return <div>{users}</div>
  }
}

const mapStateToProps = state => {
  return {
    users: state.users,
    selectedUser: state.selectedUser,
  }
}

const mapDispatchToProps = {selectUser}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SigninPage);
