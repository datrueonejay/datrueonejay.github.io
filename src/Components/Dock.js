import React, { Component } from 'react';
import DockApp from './DockApp';
import { OS } from '../Redux/Actions/actionConstants';
import { connect } from 'react-redux';

// var isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);

class Dock extends Component {
  render() {
    return(
      <div className='Dock' >
        <DockApp icon={this.props.os === OS.DROID ? 
          require('../images/github.png') :
          require('../images/githubIOS.png')} link='https://github.com/datrueonejay'/>
        <DockApp icon={this.props.os === OS.DROID ? 
          require('../images/linkedIn.png') :
          require('../images/linkedInIOS.png')} link='https://www.linkedin.com/in/jayden-arquelada-b70186111/'/>
        <DockApp icon={this.props.os === OS.DROID ? 
          require('../images/resume.png') :
          require('../images/resumeIOS.png')} link={require('../assets/JaydenArqueladaResume.pdf')} />
        <DockApp icon={this.props.os === OS.DROID ? 
          require('../images/contact.png') :
          require('../images/contactIOS.png')}  link="mailto:jayden.arquelada@mail.utoronto.ca" target='_top'/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    os: state.os,
  }
}

export default connect(mapStateToProps)(Dock);
