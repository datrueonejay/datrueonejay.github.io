import React, { Component } from 'react';
import MobileApp from './MobileApp';
import Dock from './Dock';
import Navbar from './Navbar';
import EducationApp from './EducationApp';
import ContactMeApp from './ContactMeApp';

export default class Screen extends Component {

  constructor(props) {
    super(props);
    this.state = {display: 'home'};
    this.showEducation = this.showEducation.bind(this);
    this.showHome = this.showHome.bind(this);
    this.showContactMe = this.showContactMe.bind(this);

    this.home =
      <div className='AppRow'>
        <MobileApp icon={require('./images/aboutMe.png')} name='About Me' onClick={this.showEducation}/>
        <MobileApp icon={require('./images/experience.png')} name='Experience'/>
        <MobileApp icon={require('./images/projects.png')} name='Projects'/>
        <MobileApp icon={require('./images/github.png')} name='Hobbies'/>
      </div>;


    this.education = <EducationApp/>;
    this.contactMe = <ContactMeApp/>;

  }

  showContactMe() {
    this.setState(state => (
      {display: 'contactMe'}
    ));
  }

  showHome() {
    this.setState(state => (
      {display: 'home'}
    ));
  }

  showEducation() {
    this.setState(state => (
      {display: 'education'}
    ));
  }

  render() {
    console.log(this.state.display);
    var ret;
      switch (this.state.display) {
        case 'home':
          ret = this.home;
          break;
        case 'education':
          ret = this.education;
          break;
        case 'contactMe':
          ret = this.contactMe;
          break;
        default:
          ret = this.home;
          break;
      }
      return(
        <div className='Screen'>
          {ret}
          {this.state.display == 'home' &&<Dock contactMe={this.showContactMe}/>}
          <Navbar onBack={this.showHome} onHome={this.showHome}/>
        </div>
      );
  }


}
