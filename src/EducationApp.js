import React, { Component } from 'react';

export default class EducationApp extends Component {

  constructor(props) {
    super(props);
    this.messageRef = React.createRef();
    this.sendMessage = this.sendMessage.bind(this);
    this.state = { messages : ["e", "e"]};
  }

  render() {

    var copy = this.state.messages.splice();
    var i = -1;
    var listItems = copy.map(function(message, index) {
      i += 1;
      return i % index == 0 ?  <div className='Text RightText'>even</div> : <div className='Text RightText'>odd</div>;
    }
    );
    console.log("rendering");

    return(


      <div className="Education">
        <div className='Text RightText'>What school do you go to?</div>
        <div className='Text LeftText'>University of Toronto, Scarborough</div>
        <span className='Text RightText'>Oooo cool, what program you taking?</span>
        <div className='Text LeftText'>I'm taking Computer Science, specializing in Software Engineering</div>
        <div className='Text RightText'>What's your CGPA?</div>
        <div className='Text LeftText'>3.77/4.00 atm</div>
        {copy}

        <div className='Text RightText'>Ay nice, when you graduating again?</div>
        <div className='Text LeftText'>Expecting to graduate in 2020</div>
        <form onSubmit={this.sendMessage}>
        <input type='text' placeholder='Message Jayden' ref={e => this.messageRef = e}/>
        </form>
      </div>
    );
  }

  sendMessage(e) {
    alert("hu");
    e.preventDefault();
    console.log(this.messageRef.value);
    this.messageRef.value = '';

  }
}
