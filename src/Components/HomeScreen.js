import React, { Component } from 'react';
import { connect } from 'react-redux';
import MobileApp from './MobileApp';
import { dispatchAboutMe, dispatchProjects, dispatchInterests, dispatchTexting, OS, dispatchSetDroid, dispatchSetiOS, dispatchCredits } from '../Redux/Actions/actionConstants';
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

    showCredits = () => {
        this.props.dispatch(dispatchCredits());
    }

    switchOs = () => {
        this.props.dispatch(this.props.os === OS.DROID ?  dispatchSetiOS() : dispatchSetDroid());
    }

    render() {
        return(
            <div className='FillHeight FillWidth'>
                <div className='AppRow'>
                    <MobileApp icon={ this.props.os === OS.DROID ? 
                    require('../images/aboutMe.png') :
                    require('../images/aboutMeIOS.png')} name='Who?' onClick={this.showAboutMe}/>
                    <MobileApp icon={ this.props.os === OS.DROID ? 
                        require('../images/projects.png') :
                        require('../images/projectsIOS.png')} name='Projects' onClick={this.showProjects}/>
                    <MobileApp icon={this.props.os === OS.DROID ? 
                        require('../images/experience.png') :
                        require('../images/experienceIOS.png')} name='Experience' onClick={this.showExperience}/>
                    <MobileApp icon={this.props.os === OS.DROID ? require('../images/iOS.png') : require('../images/droid.png')} 
                        name={this.props.os === OS.DROID ? 'iOS' : 'Android'} onClick={this.switchOs}/>
                    <MobileApp icon={this.props.os === OS.DROID ? require('../images/copyright.png') : require('../images/copyrightIOS.png')} 
                        name='Credits' onClick={this.showCredits}/>
                </div>
                <Dock contactMe={this.showContactMe}/>
            </div>
            
        );
    }
}

function mapStateToProps(state) {
    return {
        os: state.os,
    }
}

export default connect(mapStateToProps)(HomeScreen);