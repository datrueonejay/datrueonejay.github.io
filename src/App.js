import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/App.css';
import './App';
import Screen from './Screen';
import StatusBar from './StatusBar';
import Dock from './Dock';
import Navbar from './Navbar';

import { Container, Row, Col } from 'reactstrap';


class App extends Component {
  render() {
    return (
      <div className='FillWidth FillHeight'>
        <StatusBar/>
        <Screen/>

      </div>
    );
  }
}

export default App;
