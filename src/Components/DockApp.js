import React, { Component } from 'react';

export default class DockApp extends Component {
  render() {
    return (
      <a href={this.props.link} target={this.props.target ? this.props.target : '_blank'} className='DockIconAnchor' onClick={this.props.onClick}>
          <img className='DockIcon' src={this.props.icon}/>
      </a>
    );
  }
}
