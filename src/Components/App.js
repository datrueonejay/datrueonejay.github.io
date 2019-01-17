import React, { Component } from 'react';
import '../styles/App.css';
import './App';
import Screen from './Screen';
import StatusBar from './StatusBar';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import mainReducer from '../Redux/Reducers/mainReducer';


const cachedStorage = () => {
  try {
    const localState = localStorage.getItem('state');
    if (localState === null) {
      return undefined;
    } else {
      return JSON.parse(localState);
    } 
  } catch(err) {
    return undefined;
  }
};

const store = createStore(mainReducer, cachedStorage());

const saveToLocal = (state) => {
  try {
    const localData = {
      'openApps': state.openApps,
      'os': state.os,
    }
    localStorage.setItem('state', JSON.stringify(localData));
  } catch(err) {
  }
}

store.subscribe(() => {
  saveToLocal(store.getState())
})

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
