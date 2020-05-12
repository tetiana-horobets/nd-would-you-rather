import React from 'react';
import {Link} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

export default class QuestionPreview extends React.Component {

  render() {
    return <Card style={{ width: '22rem', margin: '1em auto'}}>
      <Card.Body>
        <Card.Title>Question from {this.props.author.name}</Card.Title>
        <Card.Text>
          {this.props.author.avatarURL && <Image src={this.props.author.avatarURL} rounded />}
          Would you rather {this.props.question.optionOne.text}?<br/>
          <Link to={'/question/' + this.props.question.id}>View poll</Link>
        </Card.Text>
      </Card.Body>
    </Card>
  }
}
