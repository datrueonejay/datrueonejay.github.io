import React, { Component } from 'react';

export default class EducationApp extends Component {

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
          <img class="SendBtn" src={require('./images/send.png')} onClick={this.sendMessage}/>
        </div>
        <div className='Text InvisText'>Expecting to graduate in 2020</div>
        {listItems}
        <div className='Text LeftText'>Expecting to graduate in 2020</div>
        <div className='Text RightText'>Ay nice, when you graduating again?</div>
        <div className='Text LeftText'>3.77/4.00 atm</div>
        <div className='Text RightText'>What's your CGPA?</div>
        <div className='Text LeftText'>I'm taking Computer Science, specializing in Software Engineering</div>
        <div className='Text RightText'>Which program are ya in?</div>
        <div className='Text LeftText'>University of Toronto, Scarborough</div>
        <div className='Text RightText'>What school do you go to?</div>
      </div>
    );
  }

  sendMessage(e) {
    e.preventDefault();
    var newMessages = this.state.messages.slice();
    if (this.messageRef.value) {
      newMessages.unshift(this.messageRef.value);
      newMessages.unshift("one sec, lemme get back to you");
      this.messageRef.value = '';
      this.setState(state => (
        {messages: newMessages}
      ));
    }
  }
}
