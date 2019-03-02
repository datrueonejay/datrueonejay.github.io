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
    text: 'See Back End on Github'
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

const bankDesc = 'An android application developed for a school project, simulating an offline banking application.'
const bank = {
    link: 'https://github.com/datrueonejay/BigBoiBank',
    text: 'See on Github'
}

const foodForThoughtDesc = 'A web application developed during a hackathon, where users can upload photos of ingredients and find recipes based on them.'
const foodForThoughtGithub = {
    link: 'https://github.com/HTV-FoodForThought/HTV-FoodForThought.github.io',
    text: 'See on Github'
}
const foodForThought = { 
    link: 'https://pbj-foodforthought.com/',
    text: 'See project'
}

class ProjectsApp extends Component {
    render() {
        return (    
            <div className='ProjectsApp MobileApp' onClick={this.props.onClick}>
                <ProjectCard title="Dinder Mobile Application" icon={require('../images/dinder.png')}
                    description={dinderDescription} 
                    buttons={[dinderFront, dinderBack]}/>
                <ProjectCard title="Reports WorkBench" icon={require('../images/workbench.png')}
                    description={workbenchDescription} 
                    buttons={[workbench, workbenchvid]}/>  
                <ProjectCard title="Food for Thought" icon={require('../images/foodForThought.png')}
                    description={foodForThoughtDesc}
                    buttons={[foodForThought, foodForThoughtGithub]}/>
                <ProjectCard title="Littler Fingers Android Application" icon={require('../images/littleFingers.png')}
                    description={littleFingersDescription}
                    buttons={[littleFingers]}/>    
                <ProjectCard title="Personal Website" icon={require('../images/icon.png')}
                    description={websiteDescription} 
                    buttons={[website]}/>  
                <ProjectCard title="BigBoiBank Android Application" icon={require('../images/bankIcon.png')}
                    description={bankDesc} 
                    buttons={[bank]}/>
                <ProjectCard title="Sequence Android Application" icon={require('../images/sequence.png')}
                    description={sequenceDescription} 
                    buttons={[sequence, sequencePlayStore]}/>  
            </div>
            
        );
    }
}

export default connect()(ProjectsApp);