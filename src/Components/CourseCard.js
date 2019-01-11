import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import { CardContent } from '@material-ui/core';

class CourseCard extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        var listItems = this.props.points ? this.props.points.map(function(message, index) {
            return <li>{message}</li>
        }) : null;
        return (    
            <Card className="CourseCard">
                <CardContent>
                    {this.props.title}
                    <ul>
                        {listItems}
                    </ul>
                </CardContent>
            </Card>    
        );
    }
}

export default connect()(CourseCard);