import React, { Component } from 'react';
import Clock from 'react-live-clock';

export default class Navbar extends Component {
  render() {
    return(
      <div className='StatusBar'>
        <div className='Name'>Jayden Arquelada</div>
        <div className='Icons'>
          <img className='StatusBarIcon' alt="wifi icon" src={require('../images/wifi.png')}/>
          <img className='StatusBarIcon' alt="cellular icon" src={require('../images/cellular.png')}/>
          <img className='StatusBarIcon' alt="battery icon" src={require('../images/battery.png')}/>
          <Clock className='StatusBarIcon TimeIcon' format={'h:mm'} ticking={true} timezone={'Canada/Eastern'} />
        </div>
      </div>
    );
  }
}
