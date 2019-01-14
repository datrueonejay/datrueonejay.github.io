import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import { CardContent, Button, CardHeader, Typography, CardActions, IconButton, Collapse, List, ListItem, ListItemText } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
class ProjectCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            expanded: false,
        }
    }

    expandCard = () => {
        this.setState(state => ({
            expanded: !state.expanded,
        }));
    }

    render() {
        var listItems = this.props.points ? this.props.points.map(function(info, index) {
            return <li className='ExperiencePoint'>{info}</li>
        }) : null;
        var icon = listItems === null ? null :
            <IconButton
                onClick={this.expandCard}
                className='ExapndBtn'
            >
            <ExpandMoreIcon/>
        </IconButton>
        return (    
            <Card className="ExperienceCard">
                <CardHeader
                    title={this.props.title}
                    subheader={this.props.date}
                />
                <CardContent>
                    {this.props.intro}
                    {icon}
                </CardContent>
                <Collapse in={this.state.expanded}>
                    <ul className='ExperiencePoints'>
                        {listItems}
                    </ul>
                </Collapse>
            </Card>    
        );
    }
}

export default connect()(ProjectCard);