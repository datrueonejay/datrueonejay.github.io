import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DISPLAY_TYPE, dispatchAboutMe, dispatchProjects, dispatchInterests, dispatchCloseAboutMe, dispatchCloseProjects, dispatchCloseInterests } from '../Redux/Actions/actionConstants';
import ProjectsApp from './ProjectsApp';
import InterestsApp from './InterestsApp';
import HomeScreen from './HomeScreen';
import AboutMeApp from './AboutMeApp';
import { Zoom } from 'react-reveal';
import RecentAppHeader from './RecentAppHeader';

class RecentsScreen extends Component {

    showAboutMe = () => {
        this.props.dispatch(dispatchAboutMe());
    }
    
    showProjects = () => {
        this.props.dispatch(dispatchProjects());
    }
    
    showInterests = () => {
        this.props.dispatch(dispatchInterests());
    }

    closeAboutMe = () => {
        this.props.dispatch(dispatchCloseAboutMe());
        this.forceUpdate();

    }
    
    closeProjects = () => {
        this.props.dispatch(dispatchCloseProjects());
        this.forceUpdate();

    }
    
    closeInterests = () => {
        this.props.dispatch(dispatchCloseInterests());
        this.forceUpdate();

    }

    render() {
        var me = this.showAboutMe;
        var proj = this.showProjects;
        var int = this.showInterests;
        var meClose = this.closeAboutMe;
        var projClose = this.closeProjects;
        var intClose = this.closeInterests;

        var listItems = this.props.openApps.map(function(app, index) {
        var ret;
        switch (app) {
            case DISPLAY_TYPE.ABOUT_ME:
                ret = <div className='FillHeight'>
                    <RecentAppHeader icon={require('../images/aboutMe.png')} name='About Me' onClose={meClose}/>
                    <AboutMeApp className='' onClick={me}/>
                    </div>;
                break;
            case DISPLAY_TYPE.PROJECTS_APP:
                ret = <div className='FillHeight'>
                    <RecentAppHeader icon={require('../images/projects.png')} name='Projects' onClose={projClose}/>
                    <ProjectsApp className='' onClick={proj}/></div>;
                break;
            case DISPLAY_TYPE.INTERESTS_APP:
                ret = <div className='FillHeight'>
                    <RecentAppHeader icon={require('../images/experience.png')} name='Interests' onClose={intClose}/>
                    <InterestsApp className='' onClick={int}/>
                </div>;
                break;
            default:
                ret = <HomeScreen className='RecentsApp'/>;
                break;
            }
        return <div className='RecentsApp'>{ret}</div>;
        });
        console.log(listItems)
        if (listItems.length === 0) {
            listItems = [<div className='NoRecents'>NO RECENT APPS!</div>]
        }
        console.log(listItems);
        return(
            <Zoom duration={500} className='FillHeight'>
            <div className='RecentsScreen'>
                {listItems}
            </div>
           
            </Zoom>
            
        );
    }
}

function mapStateToProps(state) {
    return {
      openApps: state.openApps,
    };
}

export default connect(mapStateToProps)(RecentsScreen);