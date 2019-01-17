import React, { Component } from 'react';

export default class DockApp extends Component {
  render() {
    return (
      <a href={this.props.link} target={this.props.target ? this.props.target : '_blank'} className='DockIconAnchor' onClick={this.props.onClick} download={this.props.download ? this.props.download : false}>
          <img className='DockIcon' alt='dock app icon' src={this.props.icon}/>
      </a>
    );
  }
}
