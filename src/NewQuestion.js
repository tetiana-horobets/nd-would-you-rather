import React from 'react';
import {createNewQuestion} from './store/ActionCreators.js';
import { connect } from 'react-redux';

class NewQuestion extends React.Component {

  render() {
    return <div>
    <h1>Create new question</h1>
      <h2>Would you rather ...</h2>
        <input type="text" name="optionOne"/>
          <h4>OR</h4>
        <input type="text" name="optionTwo"/>
      <button onClick={() => this.props.createNewQuestion("optionOne", "optionTwo", this.props.selectedUser)}>Submit</button>
    </div>
  }
}
const mapStateToProps = state => {
  return {
    selectedUser: state.selectedUser,
  }
}

const mapDispatchToProps = {createNewQuestion}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewQuestion);
