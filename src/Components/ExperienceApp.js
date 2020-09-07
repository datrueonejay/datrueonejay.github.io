import React, { Component } from "react";
import { connect } from "react-redux";
import ExperienceCard from "./ExperienceCard";

const curr = {
  title: "Currently Seeking Software Development Positions",
  intro: "Looking to work as a back-end/cloud developer",
};

const cbear = {
  title: "Software Engineer at CommerceBear ⚡",
  date: "September 2020 - Present",
  intro: "Effortless ecommerce built for the furniture industry, powering you to sell on Wayfair, Overstock, Amazon, and more ✨"
}

const TA = {
  title: "Teaching Assistant",
  date: "September 2018 - August 2020",
  intro:
    "Worked as a Teaching Assistant at the University of Toronto for Introduction to Computer Science and Operating Systems",
  points: [
    "Help students understand OS concepts such as synchronization, user programs, and virtual memory, through the operating system framework Pintos",
    "Guided students through Computer Science fundamentals such as data types, control flow, sorting, and time complexity",
    "Helped a class of over 75 students understand core concepts and work through worksheets related to course concepts weekly",
    "Held office hours to provide additional assistance for coursework, understanding course materials, and preparation for tests",
  ],
};

const auto = {
  title: "Automation Developer",
  date: "September 2017 - April 2018",
  intro: "Worked as an Automation Developer at Fleet Complete",
  points: [
    "Automated and executed front end Android, iOS, web and unit tests, using automation frameworks such as Xamarin UI test and Selenium, reducing the amount of manual testing required before releases",
    "Developed integration tests for API end points, ensuring new deployments did not break existing API’s, and broken end points could be easily found",
    "Demonstrated ability to collaborate well with my team, practicing scrum methodology, ensuring quality work was delivered after each sprint",
  ],
};

const architech = {
  title: "Co-op Software Engineer",
  date: "May 2019 - August 2019",
  intro: "Researched technology and developed applications at Architech",
  points: [
    "Worked on a conversational project using Google Dialogflow, Google Actions, Firebase (Cloud Firestore & Cloud Functions), and Node.js",
    "Researched platforms and tools, including cross platform mobile development (Flutter, React Native, & Ionic), as well as Docker and Kubernetes, preparing applications and technical papers for the company",
    "Worked on a web application for the company’s 15-year event to capture user responses in an application built with Node.js, React, and MongoDB",
    "Built and deployed a proof of concept, using machine learning (scikit-learn and SciPy) to predict the most efficient configuration of a production line",
  ],
};

class ExperienceApp extends Component {
  render() {
    return (
      <div className="ExperienceApp MobileApp" onClick={this.props.onClick}>
        <ExperienceCard
          title={cbear.title}
          date={cbear.date}
          intro={cbear.intro}
        />
        <ExperienceCard
          title={TA.title}
          date={TA.date}
          intro={TA.intro}
          points={TA.points}
        />
        <ExperienceCard
          title={architech.title}
          date={architech.date}
          intro={architech.intro}
          points={architech.points}
        />
        <ExperienceCard
          title={auto.title}
          date={auto.date}
          intro={auto.intro}
          points={auto.points}
        />
      </div>
    );
  }
}

export default connect()(ExperienceApp);
