import React from 'react';
import Image from 'react-bootstrap/Image';

export default class ProfilePicture extends React.Component {

  render() {
    return <div>
      {this.props.user.avatarURL && <Image src={this.props.user.avatarURL} rounded style={{width: '100px', height: '100px', margin: '1em'}} />}
    </div>
  }
}
