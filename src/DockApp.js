import React, { Component } from 'react';

export default class DockApp extends Component {
  render() {
    return (
      <a href={this.props.link} target='_blank' className='DockIconAnchor'>
          <img className='DockIcon' src={this.props.icon}/>
      </a>
    );
  }
}
