import React, { Component } from 'react';
import Typing from 'react-typing-animation';
import { connect } from 'react-redux';


class AboutMeApp extends Component {
    render() {
        if (this.props.aboutMeAppOpen) {
            return (
                <div className='AboutMeApp'>
                    <div>Hey, I'm Jayden Arquelada.{' '}<img className='AboutMePic' alt='Jayden' src={require('../images/aboutMe.png')}/>
                    I am a third year computer science student, specializing in software engineering at UofT.{' '}
                    I love learning new things, and have a keen interest in mobile development.{' '}
                    I also love listening to and playing music, hanging out with friends, and gaming.{' '}
                    I am passionate individual, ready to learn and work within a fast-paced environment.{' '}
                    </div>
                </div>
    
            );
        }
        else {
            return (
                <div className='AboutMeApp'>
    
                    <Typing speed={10}>
                    <div>Hey, I'm Jayden Arquelada.{' '}
                    <img className='AboutMePic' alt='Jayden' src={require('../images/aboutMe.png')}/>
                    <Typing.Delay ms={1000} />
                    I am a third year computer science student, specializing in software engineering at UofT.{' '}
                    <Typing.Delay ms={1000} />
                    I love learning new things, and have a keen interest in mobile development.{' '}
                    <Typing.Delay ms={1000} />
                    I also love listening to and playing music, hanging out with friends, and gaming.{' '}
                    <Typing.Delay ms={1000} />
                    I am passionate individual, ready to learn and work within a fast-paced environment.{' '}
                    </div>
    
                    </Typing>
    
                </div>
    
            );
        }
    }
}

function mapStateToProps(state) {
    return {
      aboutMeAppOpen: state.aboutMeAppOpen
    };
  }
  
  export default connect(mapStateToProps)(AboutMeApp);