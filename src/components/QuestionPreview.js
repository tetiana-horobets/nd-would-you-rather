import React from 'react';

export default class QuestionPreview extends React.Component {

  render() {
    return <div>
      Question from {this.props.question.author}:<br/>
      Would you rather {this.props.question.optionOne.text}?
    </div>
  }
}
