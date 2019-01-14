import React, { Component } from 'react';
import { connect } from 'react-redux';
import MobileApp from './MobileApp';
import { SET_DISPLAY, DISPLAY_TYPE, dispatchAboutMe, dispatchProjects, dispatchInterests, dispatchTexting } from '../Redux/Actions/actionConstants';
import Dock from './Dock';

class HomeScreen extends Component {

    showAboutMe = () => {
        this.props.dispatch(dispatchAboutMe());
    }
    
    showProjects = () => {
        this.props.dispatch(dispatchProjects());
    }
    
    showExperience = () => {
        this.props.dispatch(dispatchInterests());
    }

    showTexting = () => {
        this.props.dispatch(dispatchTexting());
    }

    render() {
        return(
            <div className='FillHeight FillWidth'>
                <div className='AppRow'>
                    <MobileApp icon={require('../images/aboutMe.png')} name='About Me' onClick={this.showAboutMe}/>
                    <MobileApp icon={require('../images/projects.png')} name='Projects' onClick={this.showProjects}/>
                    <MobileApp icon={require('../images/experience.png')} name='Experience' onClick={this.showExperience}/>
                </div>
                <Dock contactMe={this.showContactMe}/>
            </div>
            
        );
    }
}

export default connect()(HomeScreen);