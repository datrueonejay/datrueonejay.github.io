import React, { Component } from 'react';
import MobileApp from './MobileApp';
import Dock from './Dock';
import Navbar from './Navbar';
import EducationApp from './EducationApp';
import ContactMeApp from './ContactMeApp';
import { connect } from 'react-redux';

class Screen extends Component {

  constructor(props) {
    super(props);
    this.showAboutMe = this.showAboutMe.bind(this);
    this.showHome = this.showHome.bind(this);
    this.showContactMe = this.showContactMe.bind(this);

    this.home =
      <div className='AppRow'>
        <MobileApp icon={require('../images/aboutMe.png')} name='About Me' onClick={this.showAboutMe}/>
        <MobileApp icon={require('../images/experience.png')} name='Experience'/>
        <MobileApp icon={require('../images/projects.png')} name='Projects'/>
        <MobileApp icon={require('../images/github.png')} name='Hobbies'/>
      </div>;

    this.education = <EducationApp/>;
    this.contactMe = <ContactMeApp/>;
  }

  showContactMe() {
    this.props.dispatch({type: 'CONTACTME'})
  }

  showHome() {
    this.props.dispatch({type: 'HOME'});
  }

  showAboutMe() {
    this.props.dispatch({type: 'ABOUTME'});
  }

  render() {
    var ret;
      switch (this.props.display) {
        case 'home':
          ret = this.home;
          break;
        case 'aboutMe':
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
          {this.props.display == 'home' &&<Dock contactMe={this.showContactMe}/>}
          <Navbar onBack={this.showHome} onHome={this.showHome}/>
        </div>
      );
  }
}

function mapStateToProps(state) {
  return {
    display: state.display
  };
}

export default connect(mapStateToProps)(Screen);
