import React, { Component } from 'react';
import { connect } from 'react-redux';
import Screen from './Screen';
import StatusBar from './StatusBar';
import { OS } from '../Redux/Actions/actionConstants';

class AppWithStore extends Component {
  render() {
    var img = this.props.os === OS.DROID ? require('../images/droidBackground.jpg') : require('../images/iOSBackground.jpg');
    var style =  {
        background: `url(${img}) no-repeat center center fixed`,
        backgroundSize: 'cover'
    };
    return (
      <div className='FillWidth FillHeight'
      style={
        style
        }>
        <StatusBar/>
        <Screen/>
      </div>
    );
  }
}

function mapStateToProps(state) {
    return {
        os: state.os,
    }
}

export default connect(mapStateToProps)(AppWithStore);