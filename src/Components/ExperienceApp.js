import React, { Component } from 'react';
import { connect } from 'react-redux';
import ExperienceCard from './ExperienceCard';

const curr = {
    title: 'Currently Searching for an Internship',
    date: 'Summer 2019',
    intro: 'Looking to work as a developer this Summer'
}

const TA = {
    title: 'Teaching Assistant',
    date: 'September 2018 - December 2018', 
    intro: 'Worked as a Teaching Assistant at the University of Toronto for Introduction to Computer Science',
    points: [
        'Helped a class of over 75 students understand concepts and work through worksheets related to course concepts weekly',
        'Answered questions on an online discussion forum',
        'Held office hours to provide additional assistance for coursework understanding course materials, and preparation for tests'
    ]
}

const auto = {
    title: 'Automation Developer',
    date: 'September 2017 - April 2018', 
    intro: 'Worked as an Automation Developer at Fleet Complete',
    points: [
        'Automated and executed front end Android, iOS, web and unit tests, using automation frameworks such as Xamarin UI test, and Selenium to ensure applications ran as expected',
        'Developed integration tests for API end points, ensuring new deployments did not break existing API’s, and broken end points could be easily found',
        'Demonstrated ability to collaborate well with my team, practicing scrum methodology, ensuring quality work was delivered after each sprint',
    ]
}

class ExperienceApp extends Component {
    render() {
        return(
            <div className='ExperienceApp MobileApp' onClick={this.props.onClick}>
             <ExperienceCard 
                title={curr.title}
                date={curr.date}
                intro={curr.intro}
            />
            <ExperienceCard 
                title={TA.title}
                date={TA.date}
                intro={TA.intro}
                points={TA.points}
                />
            <ExperienceCard 
                title={auto.title}
                date={auto.date}
                intro={auto.intro}
                points={auto.points}
                />
        </div>
        );
    }
}

export default connect()(ExperienceApp);