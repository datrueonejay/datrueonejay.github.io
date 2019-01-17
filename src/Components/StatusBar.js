import React, { Component } from 'react';
import Clock from 'react-live-clock';
import { connect } from 'react-redux';
import { OS } from '../Redux/Actions/actionConstants';

class Navbar extends Component {

  constructor(props) {
    super(props);
    this.droidBar = 
    <div className='StatusBar'>
      <div className='Name'>Jayden Arquelada</div>
      <div className='Icons'>
        <img className='StatusBarIcon' alt="wifi icon" src={require('../images/wifi.png')}/>
        <img className='StatusBarIcon' alt="cellular icon" src={require('../images/cellular.png')}/>
        <img className='StatusBarIcon' alt="battery icon" src={require('../images/battery.png')}/>
        <Clock className='StatusBarIcon TimeIcon' format={'h:mm'} ticking={true} timezone={'Canada/Eastern'} />
      </div>
    </div>;

    this.iOSBar = 
    <div className='IosStatusBar'>
        <img className='StatusBarIcon' alt="cellular icon" src={require('../images/cellular.png')}/>
        <div className='Name'>Jayden Arquelada</div>
        <img className='StatusBarIcon' alt="wifi icon" src={require('../images/wifi.png')}/>
        <Clock className='StatusBarIcon IosTimeIcon' format={'h:mm'} ticking={true} timezone={'Canada/Eastern'} />
        <img className='StatusBarIcon IosBattery' alt="battery icon" src={require('../images/battery.png')}/>
    </div>;
  }

  render() {
    return(
      this.props.os === OS.DROID ? this.droidBar : this.iOSBar
    );
  }
}

function mapStateToProps(state) {
  return {
    os: state.os,
  };
}

export default connect(mapStateToProps)(Navbar);