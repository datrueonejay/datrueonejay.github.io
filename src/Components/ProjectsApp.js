import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProjectCard from './ProjectCard';

class ProjectsApp extends Component {
    render() {
        return (    
            <div>
                <ProjectCard title="Dinder Mobile Application" points={['yeet', 'on', 'em']}/>
                <ProjectCard title="CSCC43"/>
            </div>
            
        );
    }
}

export default connect()(ProjectsApp);