import React from 'react';
import {Redirect} from "react-router-dom";
import { connect } from 'react-redux';
import {logout} from './store/ActionCreators.js';

class LogoutPage extends React.Component {

  componentDidMount() {
    this.props.logout();
  }

  render() {
    return <Redirect to={'/signin'}/>
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {logout}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LogoutPage);
