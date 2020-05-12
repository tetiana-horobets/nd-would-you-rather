import React from 'react';
import {createNewQuestion} from './store/ActionCreators.js';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Card from 'react-bootstrap/Card';

class NewQuestionPage extends React.Component {

  state = {
   optionOne: '',
   optionTwo: ''
  }

  changeHandlerOptionOne = (event) => {
      this.setState({optionOne: event.target.value});
  }

  changeHandlerOptionTwo = (event) => {
      this.setState({optionTwo: event.target.value});
  }

  createNewQuestion() {
    this.props.createNewQuestion(this.state.optionOne, this.state.optionTwo, this.props.selectedUser);
    this.setState({optionOne: '', optionTwo: ''});
  }

  render() {
    if (!this.props.selectedUser) {
      return <Redirect to={'/signin'}/>
    }

    return <div>
      <Navbar/>
      <Card style={{ width: '22rem', margin: '1em auto'}}>
        <Card.Body>
          <Card.Title>Create new question</Card.Title>
          <div>
            Would you rather ...<br/>
            <input type="text" name="optionOne" value={this.state.optionOne} onChange={this.changeHandlerOptionOne}/>
            <div>OR</div>
            <input type="text" name="optionTwo" value={this.state.optionTwo} onChange={this.changeHandlerOptionTwo}/><br/><br/>
            <button onClick={() => this.createNewQuestion()}>Submit</button>
            {this.props.qestionCreated && <p>Quetion has been created</p>}
          </div>
        </Card.Body>
      </Card>
    </div>
  }
}
const mapStateToProps = state => {
  return {
    selectedUser: state.selectedUser,
    qestionCreated: state.qestionCreated
  }
}

const mapDispatchToProps = {createNewQuestion}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewQuestionPage);
