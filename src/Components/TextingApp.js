import React, { Component } from 'react';
import EducationData from '../Data/EducationData.json';

export default class TextingApp extends Component {

  constructor(props) {
    super(props);
    this.messageRef = React.createRef();
    this.sendMessage = this.sendMessage.bind(this);
    this.state = { messages : []};
  }

  render() {

    var listItems = this.state.messages.map(function(message, index) {
      return index % 2 == 1 ?  <div className='Text RightText'>{message}</div> : <div className='Text LeftText'>{message}</div>;
    }
    );

    return(
      <div className="Education">
        <div class="TextInput">
          <form onSubmit={this.sendMessage} class="TextMessage">
            <input type='text' placeholder='Message Jayden' ref={e => this.messageRef = e} class='TextMessage'/>
          </form>
          <img class="SendBtn" src={require('../images/send.png')} onClick={this.sendMessage}/>
        </div>
        <div className='Text InvisText'>Inivisible</div>
        {listItems}
        <div className='Text LeftText'>Expecting to graduate in {EducationData.GraduatingYear}</div>
        <div className='Text RightText'>Ay nice, when you graduating again?</div>
        <div className='Text LeftText'>{EducationData.GPA} atm</div>
        <div className='Text RightText'>What's your CGPA?</div>
        <div className='Text LeftText'>{EducationData.Program}</div>
        <div className='Text RightText'>Which program are ya in?</div>
        <div className='Text LeftText'>{EducationData.School}</div>
        <div className='Text RightText'>What school do you go to?</div>
        <div className='Text InvisText'>Inivisible</div>
      </div>
    );
  }

  sendMessage(e) {
    e.preventDefault();
    var newMessages = this.state.messages.slice();
    if (this.messageRef.value) {
      newMessages.unshift(this.messageRef.value);
      if (this.messageRef.value.toLowerCase().includes("proj")) {
        newMessages.unshift("Oh yeah I've made a few apps and this website!");
      } else {
        newMessages.unshift("one sec, lemme get back to you");
      }
      this.messageRef.value = '';
      this.setState(state => (
        {messages: newMessages}
      ));
    }
  }
}
