import React from 'react';
import logo from './logo.svg';
import './App.css';
import {_getUsers} from './_DATA.js';

export default class App extends React.Component {

  componentDidMount(){
    _getUsers().then(data => console.log(data))
  }

  render() {
    return <h1>Hello</h1>;
  }
}
