import React, { Component } from 'react';

export default class AppIcon extends Component {
  render() {
    return (
      <div>
        <img src='#'/>
        <div>App name is {this.props.name}</div>
      </div>
    );
  }
}
