import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { connect } from 'react-redux';

class AppNavbar extends React.Component {

  render() {
    return <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Would You Rather</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/new-question">New Question</Nav.Link>
          <Nav.Link href="/leaderboard">Leader Board</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      {this.props.users && this.props.selectedUser && <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          Signed in as: {this.props.users[this.props.selectedUser].name}
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
