import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import { CardContent } from '@material-ui/core';
import CourseCard from './CourseCard';

class CoursesApp extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (    
            <div>
                <CourseCard title="CSCC01" points={['yeet', 'on', 'em']}/>
                <CourseCard title="CSCC43"/>
            </div>
            
        );
    }
}

export default connect()(CoursesApp);