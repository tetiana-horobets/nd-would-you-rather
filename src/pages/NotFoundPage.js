import React from 'react';
import Navbar from '../components/Navbar.js';

export default class NotFoundPage extends React.Component {

  render() {
    return <div>
      <Navbar/>
      <h1>Page not found</h1>
    </div>;
  }
}
