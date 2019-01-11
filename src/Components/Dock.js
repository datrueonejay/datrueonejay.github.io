import React, { Component } from 'react';
import DockApp from './DockApp';
import Resume from '../assets/resume.pdf';



export default class Dock extends Component {
  render() {
    return(
      <div className='Dock' >
        <DockApp icon={require('../images/github.png')} link='https://github.com/datrueonejay'/>
        <DockApp icon={require('../images/linkedIn.png')} link='https://www.linkedin.com/in/jayden-arquelada-b70186111/'/>
        <DockApp icon={require('../images/appDrawer.png')}/>
        <DockApp icon={require('../images/resume.png')} link={Resume}/>
        <DockApp icon={require('../images/contact.png')}  link="mailto:jayden.arquelada@mail.utoronto.ca" target='_top'/>
      </div>
    );
  }
}
