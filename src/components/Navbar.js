import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

class AppNavbar extends React.Component {

  render() {
    return <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Would You Rather</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/new-question" className="nav-link">New Question</Link>
          <Link to="/leaderboard" className="nav-link">Leader Board</Link>
        </Nav>
      </Navbar.Collapse>
      {this.props.users && this.props.selectedUser && <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          Signed in as: {this.props.users[this.props.selectedUser].name}
          &nbsp;<Link to={'/logout'}>Logout</Link>
        </Navbar.Text>
      </Navbar.Collapse>}
    </Navbar>
  }
}

const mapStateToProps = state => {
  return {
    users: state.users,
    selectedUser: state.selectedUser
  }
}

const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppNavbar);
