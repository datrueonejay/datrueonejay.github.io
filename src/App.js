import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/App.css';
import './App';
import Navbar from './Navbar';
import StatusBar from './StatusBar';
import Dock from './Dock';
import { Container, Row, Col } from 'reactstrap';


class App extends Component {
  render() {
    return (
      <div id='Screen' className='FillWidth FillHeight'>
        <StatusBar/>
        <Dock/>
        <Navbar/>
      </div>
    );
  }
}

export default App;
