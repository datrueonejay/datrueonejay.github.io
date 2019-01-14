import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import { CardContent, Button } from '@material-ui/core';

class ProjectCard extends Component {
    render() {
        var listItems = this.props.buttons ? this.props.buttons.map(function(info, index) {
            return <div><Button href={info.link} target='_blank' className='ProjectBtn'>{info.text}</Button></div>
        }) : null;
        console.log(this.props.buttons)
        return (    
            <Card className="ProjectCard">
                <CardContent>
                    <div className='ProjectTitle'>{this.props.title}</div>
                    <div className='ProjectCardContent'>
                        <div className='ProjectCardBody'>
                            <div>
                                {this.props.description}
                            </div>
                            <div>
                                Built using {this.props.tech}.
                            </div>
                            {listItems}

                        </div>
                        <img alt='projectIcon' className='ProjectIcon' src={this.props.icon}/>
                    </div>

                    
                </CardContent>
            </Card>    
        );
    }
}

export default connect()(ProjectCard);