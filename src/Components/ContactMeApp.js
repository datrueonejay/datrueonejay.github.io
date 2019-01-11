import React, { Component } from 'react';

export default class ContactMeApp extends Component {
  render() {

    return(
      <div className='ContactMeApp'>
        <div className='ContactImageDiv ContactHalf'>
        <img alt='mario' src={require('../images/mario.png')} className='ContactImage'/>
        </div>
        <div className='ContactInfoContainer ContactHalf'>
          <div className='ContactEmail ContactInfo'>
            <img alt='email' src={require('../images/email.png')} className='ContactIcon'/>
            jayden.arquelada@mail.utoronto.ca<br/>
            Email
          </div>
        </div>
      </div>
    );
  }
}
