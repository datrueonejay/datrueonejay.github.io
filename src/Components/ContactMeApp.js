import React, { Component } from 'react';

export default class ContactMeApp extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    return(
      <div className='ContactMeApp'>
        <div className='ContactImageDiv ContactHalf'>
        <img src={require('../images/mario.png')} className='ContactImage'/>
        </div>
        <div className='ContactInfoContainer ContactHalf'>
          <div className='ContactEmail ContactInfo'>
            <img src={require('../images/email.png')} className='ContactIcon'/>
            jayden.arquelada@mail.utoronto.ca<br/>
            Email
          </div>
        </div>
      </div>
    );
  }
}
