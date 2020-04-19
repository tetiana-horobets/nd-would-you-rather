import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import {loadUsers} from './store/ActionCreators.js'


class App extends React.Component {

  componentDidMount(){
    this.props.loadUsers();
  }

  render() {
    console.log(this.props);
    return <h1>Hello</h1>;
  }
}

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    users: state.users
  }
}

const mapDispatchToProps = {loadUsers}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
