import React, { Component } from 'react';
import MobileApp from './MobileApp';

export default class Screen extends Component {

  constructor(props) {
    super(props);
    this.state = {app: true};
  }

  render() {
    return(
      <div className='Screen'>
        <div className='AppRow'>
          <MobileApp icon={require('./images/education.png')} name='Education'/>
          <MobileApp icon={require('./images/experience.png')} name='Experience'/>
          <MobileApp icon={require('./images/projects.png')} name='Projects'/>
          <MobileApp icon={require('./images/github.png')} name='Hobbies'/>
        </div>
      </div>
    );
  }
}
