import React, { Component } from 'react';
import Navbar from './Navbar';
import TextingApp from './TextingApp';
import ContactMeApp from './ContactMeApp';
import AboutMeApp from './AboutMeApp';
import { connect } from 'react-redux';
import { dispatchHome, dispatchRecents, DISPLAY_TYPE } from '../Redux/Actions/actionConstants';
import ProjectsApp from './ProjectsApp';
import InterestsApp from './InterestsApp';
import { Zoom } from 'react-reveal';
import HomeScreen from './HomeScreen';
import RecentsScreen from './RecentsScreen';

class Screen extends Component {
  showHome = () => {
    this.props.dispatch(dispatchHome());
  }

  showRecents = () => {
    this.props.dispatch(dispatchRecents());
  }

  render() {
    var ret;
      switch (this.props.display) {
        case DISPLAY_TYPE.HOME:
          ret = <HomeScreen/>;
          break;
        case DISPLAY_TYPE.TEXT_APP:
          ret = <TextingApp/>;
          break;
        case DISPLAY_TYPE.CONTACT_ME:
          ret = <ContactMeApp/>;
          break;
        case DISPLAY_TYPE.ABOUT_ME:
          ret = <AboutMeApp/>;
          break;
        case DISPLAY_TYPE.PROJECTS_APP:
          ret = <ProjectsApp/>;
          break;
        case DISPLAY_TYPE.INTERESTS_APP:
          ret = <InterestsApp/>;
          break;
        case DISPLAY_TYPE.RECENTS:
          ret = <RecentsScreen/>;
          break;
        default:
          ret = <HomeScreen/>;
          break;
      }
    if (this.props.display != DISPLAY_TYPE.HOME && this.props.display != DISPLAY_TYPE.RECENTS) {
      ret = <Zoom duration={250}>
        <div className='FillHeight'>
          {ret}
        </div>
      </Zoom>
    } 
    return(
      <div className='Screen'>
        {ret}
        <Navbar onBack={this.showHome} onHome={this.showHome} onRecents={this.showRecents}/>
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
