import React from 'react';
import {createNewQuestion} from './store/ActionCreators.js';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom';

class NewQuestion extends React.Component {
  state = {
   optionOne: {},
   optionTwo: {}
 }

  changeHandlerOptionOne = (event) => {
      this.setState({optionOne: event.target.value});
    }

  changeHandlerOptionTwo = (event) => {
      this.setState({optionTwo: event.target.value});
    }

  render() {
    if (!this.props.selectedUser) {
      return <Redirect to={'/signin'}/>
    }

    return <div>
    <h1>Create new question</h1>
      <h2>Would you rather ...</h2>
        <input type="text" name="optionOne" onChange={this.changeHandlerOptionOne}/>
          <h4>OR</h4>
        <input type="text" name="optionTwo" onChange={this.changeHandlerOptionTwo}/>
      <button onClick={() => this.props.createNewQuestion(this.state.optionOne, this.state.optionTwo, this.props.selectedUser)}>Submit</button>
      {this.props.qestionCreated && <p>Quetion has been created</p>}
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
)(NewQuestion);
