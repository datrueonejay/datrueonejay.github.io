import React, { Component } from 'react';
import { connect } from 'react-redux';

class InterestsApp extends Component {
    render() {
        return(
            <div className='MobileApp InterestsApp' onClick={this.props.onClick}>
            sdasdsa
            </div>
        );
    }
}

export default connect()(InterestsApp);