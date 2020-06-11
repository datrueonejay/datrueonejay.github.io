import React, { Component } from "react";
import { connect } from "react-redux";
import Card from "@material-ui/core/Card";
import { CardContent, Button } from "@material-ui/core";

class ProjectCard extends Component {
  render() {
    var listItems = this.props.buttons
      ? this.props.buttons.map(function (info, index) {
          return (
            <div key={info.link}>
              <Button href={info.link} target="_blank" className="ProjectBtn">
                {info.text}
              </Button>
            </div>
          );
        })
      : null;
    return (
      <Card className="ProjectCard">
        <CardContent>
          <div className="ProjectTitle">{this.props.title}</div>
          <div className="ProjectCardContent">
            <div className="ProjectCardBody">
              <div>{this.props.description}</div>
              <div>
                {this.props.tech === undefined
                  ? undefined
                  : `Built using ${this.props.tech}.`}
              </div>
              {listItems}
            </div>
            {this.props.icon ? (
              <img
                alt="projectIcon"
                className="ProjectIcon"
                src={this.props.icon}
              />
            ) : null}
          </div>
        </CardContent>
      </Card>
    );
  }
}

export default connect()(ProjectCard);
