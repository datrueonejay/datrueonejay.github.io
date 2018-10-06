import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
import './App';
import Screen from './Screen';
import StatusBar from './StatusBar';
import Dock from './Dock';
import Navbar from './Navbar';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { Container, Row, Col } from 'reactstrap';

const initialState = {
  display: 'home'
}

function reducer(state = initialState, action) {
  switch(action.type) {
    case 'HOME':
      return {
        ...state,
        display: 'home'
      }
    case 'ABOUTME':
      return {
        ...state,
        display: 'aboutMe'
      }
    case 'CONTACTME':
      return {
        ...state,
        display: 'contactMe'
      }
  }

  return state;
}

const store = createStore(reducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className='FillWidth FillHeight'>
        <StatusBar/>
        <Screen/>

      </div>
      </Provider>
    );
  }
}

export default App;
