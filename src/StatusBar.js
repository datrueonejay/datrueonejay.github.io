import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Clock from 'react-live-clock';

export default class Navbar extends Component {
  render() {
    return(
      <div className='StatusBar'>
        <div className='Name'>Jayden Arquelada</div>
        <div className='Icons'>
          <img className='StatusBarIcon' src={require('./images/wifi.png')}/>
          <img className='StatusBarIcon' src={require('./images/cellular.png')}/>
          <img className='StatusBarIcon' src={require('./images/battery.png')}/>
          <Clock className='StatusBarIcon TimeIcon' format={'h:mm'} ticking={true} timezone={'Canada/Eastern'} />
        </div>
      </div>
    );
  }
}
