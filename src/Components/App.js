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

import mainReducer from '../Redux/Reducers/mainReducer';

const store = createStore(mainReducer);

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
