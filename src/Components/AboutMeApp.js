import React, { Component } from "react";
import { connect } from "react-redux";
import { dispatchOpenAboutMe } from "../Redux/Actions/actionConstants";

class AboutMeApp extends Component {
  openApp = () => {
    setTimeout(() => {
      if (!this.props.aboutMeAppOpen) {
        this.props.dispatch(dispatchOpenAboutMe());
      }
    }, 18000);
  };

  render() {
    return (
      <div className={"AboutMeApp MobileApp"} onClick={this.props.onClick}>
        <div>
          Hey, I'm Jayden Arquelada.{" "}
          <img
            className="AboutMePic"
            alt="Jayden"
            src={require("../images/me.png")}
          />
          I'm a software engineer, who has worked at different companies including startups and cloud providers.
          I've worked on multiple aspects of the tech stack, including front-end, back-end, and infrastructure, with my primary
          focus currently being back-end.
          I love learning new things, tackling interesting problems, and working towards impactful solutions.
          Outside of software engineering, good music and good food are things I enjoy and am always looking out for new ones to try!{" "}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    aboutMeAppOpen: state.aboutMeAppOpen,
  };
}

export default connect(mapStateToProps)(AboutMeApp);
