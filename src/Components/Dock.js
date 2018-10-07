import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import DockApp from './DockApp';


export default class Dock extends Component {
  render() {
    return(
      <div className='Dock' >
        <DockApp icon={require('../images/github.png')} link='https://github.com/datrueonejay'/>
        <DockApp icon={require('../images/linkedIn.png')} link='https://www.linkedin.com/in/jayden-arquelada-b70186111/'/>
        <DockApp icon={require('../images/appDrawer.png')}/>
        <DockApp icon={require('../images/playstore.png')} link='https://play.google.com/store/apps/developer?id=datrueonejay'/>
        <DockApp icon={require('../images/contact.png')} onClick={this.props.contactMe}/>
      </div>
    );
  }
}
