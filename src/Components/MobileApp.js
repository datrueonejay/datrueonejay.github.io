import React, { Component } from 'react';

export default class MobileApp extends Component {
  render() {
    return (
      <a href={this.props.link} target='_blank' className='AppIconAnchor' onClick={this.props.onClick}>
        <img className='AppIcon' src={this.props.icon}/>
        <div className='AppName'>{this.props.name}</div>
      </a>
    );
  }
}
