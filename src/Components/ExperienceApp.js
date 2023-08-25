import React, { Component } from "react";
import { connect } from "react-redux";
import ExperienceCard from "./ExperienceCard";

const aws = {
  title: "SDE II @ AWS",
  date: "SDE I August 2021 - June 2023, SDE II Present",
  intro: "Developing for the Aurora Control Plane, features include...",
  points: [
    "Support for R7g instance types for Aurora-MySQL and Aurora-PostgreSQL - https://aws.amazon.com/about-aws/whats-new/2023/05/amazon-aurora-mysql-postgresql-graviton3-based-r7g-instance-family/",
    "Giving customers the ability to use the I/O-Optimized configuration for Aurora-PostgreSQL and Aurora-MySQL - https://aws.amazon.com/about-aws/whats-new/2023/05/amazon-aurora-i-o-optimized/",
    "Blue/Green Deployments for Amazon Aurora-MySQL - https://aws.amazon.com/blogs/aws/new-fully-managed-blue-green-deployments-in-amazon-aurora-and-amazon-rds/"
  ]
}

const cbear = {
  title: "Software Engineer @ CommerceBear",
  date: "September 2020 - July 2021",
  intro: "Developed the SAAS platform at CommerceBear",
  points: [
    "Integrated e-commerce platform APIs (including Wayfair, Overstock, and Amazon) into a single platform",
    "Improved system efficiency and stability through initiatives such as decoupling heavyweight processing, and enhancing data processing methods",
    "Coordinated and drove production (application, database, and infrastructure) deployments, every other sprint",
    "Collaborated closely with other teams (such as product and operations), to help prioritize and decide which features to implement",
    "Developed full-stack applications using utilizing technologies including Svelte, Node.js, and various AWS products"
  ]
}

const TA = {
  title: "Teaching Assistant @ the University of Toronto",
  date: "September 2018 - August 2020",
  intro: "Taught as a Teaching Assistant for Introduction to Computer Science as well as Operating Systems",
  points: [
    "Helped students understand OS concepts such as synchronization, user programs, and virtual memory, through the operating system framework Pintos",
    "Guided students through Computer Science fundamentals such as data types, control flow, sorting, and time complexity",
    "Helped a class of over 75 students understand core concepts and work through worksheets related to course concepts weekly",
    "Held office hours to provide additional assistance for coursework, understanding course materials, and preparation for tests",
  ],
};

const auto = {
  title: "Automation Developer @ Fleet Complete",
  date: "September 2017 - April 2018",
  intro: "Worked as an Automation Developer for customer applications",
  points: [
    "Automated and executed front end Android, iOS, web and unit tests, using automation frameworks such as Xamarin UI test and Selenium, reducing the amount of manual testing required before releases",
    "Developed integration tests for API end points, ensuring new deployments did not break existing API’s, and broken end points could be easily found",
    "Demonstrated ability to collaborate well with my team, practicing scrum methodology, ensuring quality work was delivered after each sprint",
  ],
};

const architech = {
  title: "Co-op Software Engineer @ Architech",
  date: "May 2019 - August 2019",
  intro: "Researched technology and developed applications",
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
          title={aws.title}
          date={aws.date}
          intro={aws.intro}
          points={aws.points}
        />
        <ExperienceCard
          title={cbear.title}
          date={cbear.date}
          intro={cbear.intro}
          points={cbear.points}
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
