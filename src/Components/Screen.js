import React, { Component } from 'react';
import MobileApp from './MobileApp';
import Dock from './Dock';
import Navbar from './Navbar';
import TextingApp from './TextingApp';
import ContactMeApp from './ContactMeApp';
import AboutMeApp from './AboutMeApp';
import { connect } from 'react-redux';
import { SET_DISPLAY, DISPLAY_TYPE } from '../Redux/Actions/actionConstants';

class Screen extends Component {

  constructor(props) {
    super(props);
    this.showAboutMe = this.showAboutMe.bind(this);
    this.showHome = this.showHome.bind(this);
    this.showContactMe = this.showContactMe.bind(this);

    this.home =
      <div className='AppRow'>
        <MobileApp icon={require('../images/aboutMe.png')} name='About Me' onClick={this.showAboutMe}/>
        {/* <MobileApp icon={require('../images/experience.png')} name='Experience'/>
        <MobileApp icon={require('../images/projects.png')} name='Projects'/>
        <MobileApp icon={require('../images/github.png')} name='Hobbies'/> */}
      </div>;

    this.education = <TextingApp/>;
    this.contactMe = <ContactMeApp/>;
    this.aboutMe = <AboutMeApp/>;
  }

  showContactMe() {
    this.props.dispatch({type: SET_DISPLAY, displayType: DISPLAY_TYPE.CONTACT_ME})
  }

  showHome() {
    this.props.dispatch({type: SET_DISPLAY, displayType: DISPLAY_TYPE.HOME});
  }

  showAboutMe() {
    this.props.dispatch({type: SET_DISPLAY, displayType: DISPLAY_TYPE.ABOUT_ME});
  }

  render() {
    var ret;
      switch (this.props.display) {
        case DISPLAY_TYPE.HOME:
          ret = this.home;
          break;
        case DISPLAY_TYPE.TEXT_APP:
          ret = this.education;
          break;
        case DISPLAY_TYPE.CONTACT_ME:
          ret = this.contactMe;
          break;
        case DISPLAY_TYPE.ABOUT_ME:
          ret = this.aboutMe;
          break;
        default:
          ret = this.home;
          break;
      }
      return(
        <div className='Screen'>
          {ret}
          {this.props.display == DISPLAY_TYPE.HOME &&<Dock contactMe={this.showContactMe}/>}
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
