import React, { Component } from 'react';
import { connect } from 'react-redux';
import { dispatchOpenAboutMe } from '../Redux/Actions/actionConstants';

class AboutMeApp extends Component {

    openApp = () => {
        setTimeout(() => {
            if (!this.props.aboutMeAppOpen) {
                this.props.dispatch(dispatchOpenAboutMe())
            }
        }, 18000);
    }

    render() {
        return (
            <div className={'AboutMeApp MobileApp'} onClick={this.props.onClick}>
                <div>Hey, I'm Jayden Arquelada.{' '}<img className='AboutMePic' alt='Jayden' src={require('../images/me.png')}/>
                I am a fourth year computer science student, specializing in software engineering at UofT.{' '}
                I love learning new things, and have a keen interest in back-end, and mobile development, as well as cloud computing.{' '}
                I also love listening to and playing music, hanging out with friends, going to the gym, and gaming.{' '}
                I am passionate individual, ready to learn and work within a fast-paced environment.{' '}
                </div>
            </div>

        );

    }
}

function mapStateToProps(state) {
    return {
        aboutMeAppOpen: state.aboutMeAppOpen,
    }
} 
  
export default connect(mapStateToProps)(AboutMeApp);