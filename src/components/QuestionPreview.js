import React from 'react';
import {Link} from 'react-router-dom';

export default class QuestionPreview extends React.Component {

  render() {
    return <Link to={'/question/' + this.props.question.id}><div>
      Question from {this.props.question.author}:<br/>
      Would you rather {this.props.question.optionOne.text}?
    </div></Link>
  }
}
