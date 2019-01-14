import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProjectCard from './ProjectCard';

const dinderDescription = 'A mobile application, used to find food places around you, based on categories you select.';
const dinderFront = {
    link: 'https://github.com/UseLess-Apps/Dinder',
    text: 'See Front End on Github'
}
const dinderBack = {
    link: 'https://github.com/UseLess-Apps/DinderAPI',
    text: 'See Front Back End on Github'
}

const littleFingersDescription = 'An android application, used to disable input to the screen.'
const littleFingers = {
    link: 'https://github.com/datrueonejay/LittleFingers',
    text: 'See on Github'
}

const sequenceDescription = 'An android game, where a user must guess a series of random moves.'
const sequence = {
    link: 'https://github.com/datrueonejay/Sequence',
    text: 'See on Github'
}
const sequencePlayStore = { 
    link: 'https://play.google.com/store/apps/details?id=com.datrueonejay.canyouescape&hl=en',
    text: 'See on Google Play Store'
}

const websiteDescription = 'My personal website, what you are viewing right now!'
const website = {
    link: 'https://github.com/datrueonejay/datrueonejay.github.io',
    text: 'See on Github'
}

const workbenchDescription = 'A desktop application created for school, used to upload excel files and generate reports on them.'
const workbench = {
    link: 'https://github.com/datrueonejay/ReportsWorkbench',
    text: 'See on Github'
}
const workbenchvid = {
    link: 'https://www.youtube.com/watch?v=dvqSTOlMGhU',
    text: 'See demo on Youtube'
}

class ProjectsApp extends Component {
    render() {
        return (    
            <div className='ProjectsApp MobileApp' onClick={this.props.onClick}>
                {/* <h1>Projects</h1> */}
                <ProjectCard title="Dinder Mobile Application" icon={require('../images/dinder.png')}
                    description={dinderDescription} tech='React Native, Node.js, Redux, Zomato API'
                    buttons={[dinderFront, dinderBack]}/>
                <ProjectCard title="Reports WorkBench" icon={require('../images/dinder.png')}
                    description={workbenchDescription} tech='Java, Node.js, MongoDB'
                    buttons={[workbench, workbenchvid]}/>  
                <ProjectCard title="Littler Fingers Android Application" icon={require('../images/littleFingers.png')}
                    description={littleFingersDescription} tech='Java'
                    buttons={[littleFingers]}/>    
                <ProjectCard title="Personal Website" icon={require('../images/dinder.png')}
                    description={websiteDescription} tech='React, Redux'
                    buttons={[website]}/>  
                <ProjectCard title="Sequence Android Application" icon={require('../images/sequence.png')}
                    description={sequenceDescription} tech='Java'
                    buttons={[sequence, sequencePlayStore]}/>  
            </div>
            
        );
    }
}

export default connect()(ProjectsApp);