import React, { Component } from 'react';
import MobileApp from './MobileApp';
import Dock from './Dock';
import Navbar from './Navbar';
import EducationApp from './EducationApp';

export default class Screen extends Component {

  constructor(props) {
    super(props);
    this.state = {display: 'home'};
    this.showEducation = this.showEducation.bind(this);
    this.showHome = this.showHome.bind(this);

    this.home =
      <div className='AppRow'>
        <MobileApp icon={require('./images/education.png')} name='Education' onClick={this.showEducation}/>
        <MobileApp icon={require('./images/experience.png')} name='Experience'/>
        <MobileApp icon={require('./images/projects.png')} name='Projects'/>
        <MobileApp icon={require('./images/github.png')} name='Hobbies'/>
      </div>;


    this.education = <EducationApp/>;

  }

  test(e) {
    alert("HIU");
    e.preventDefault();
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
        default:
          ret = this.home;
          break;
      }
      return(
        <div className='Screen'>
          {ret}
          {this.state.display == 'home' &&<Dock/>}
          <Navbar onBack={this.showHome} onHome={this.showHome}/>
        </div>
      );
  }


}
