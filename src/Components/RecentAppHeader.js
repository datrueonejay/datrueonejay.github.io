import React, { Component } from 'react';
import { connect } from 'react-redux';

class RecentAppHeader extends Component {
    render() {
        return(
            <div className='RecentsAppHeader'>
                <img src={this.props.icon} alt='icon' className='RecentsIcon'/>
                <span className='RecentsName'>{this.props.name}</span>
                <div className='CloseRecentApp' onClick={this.props.onClose}>
                    X
                </div>
            </div>
        );
    }
}

export default connect()(RecentAppHeader);