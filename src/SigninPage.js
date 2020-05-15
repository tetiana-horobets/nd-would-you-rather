import React from 'react';
import {selectUser} from './store/ActionCreators.js';
import {Redirect} from "react-router-dom";
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';

class SigninPage extends React.Component {

  selectUser(id) {
    this.props.selectUser(id);
  }

  render() {
    if (this.props.selectedUser) {
      const to = this.props.to || '/';
      return <Redirect to={to}/>
    }
    const users = Object.entries(this.props.users)
      .map(entry => <Dropdown.Item key={entry[1].id} onClick={() => this.selectUser(entry[1].id)}>{entry[1].name}</Dropdown.Item>);
    return <Container>
      <Card style={{ width: '22rem', margin: '1em auto'}}>
        <Card.Body>
          <Card.Title>Welcome to Would You Rather!</Card.Title>
          <div>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Select user
              </Dropdown.Toggle>
              <Dropdown.Menu>{users}</Dropdown.Menu>
            </Dropdown>
          </div>
        </Card.Body>
      </Card>
    </Container>
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
