import React from 'react';
import { connect } from 'react-redux'
import {loadUsers, selectUser} from './store/ActionCreators.js'


class App extends React.Component {

  componentDidMount() {
    this.props.loadUsers();
  }

  selectUser(id) {
    this.props.selectUser(id);
  }

  render() {
    if (this.props.selectedUser) {
      return <div><h1>Current user: {this.props.selectedUser}</h1></div>
    }
    const users = Object.entries(this.props.users).map(entry => <li key={entry[1].id} onClick={() => this.selectUser(entry[1].id)}>{entry[1].name}</li>);
    return <div>{users}</div>
  }
}

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    users: state.users,
    selectedUser: state.selectedUser
  }
}

const mapDispatchToProps = {loadUsers, selectUser}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
