import React, { Component } from 'react';

export default class ContactMeApp extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    return(
      <div className='ContactMeApp'>
        <div className='ContactImageDiv ContactHalf'>
        <img src={require('./images/mario.png')} className='ContactImage'/>
        </div>
        <div className='ContactInfoContainer ContactHalf'>
          <div className='ContactEmail ContactInfo'>
            <img src={require('./images/email.png')} className='ContactIcon'/>
            datrueonejay@gmail.com<br/>
            Email
          </div>
          <div className='ContactNumber ContactInfo'>
            <img src={require('./images/phone.png')} className='ContactIcon'/>
            (647) 268-0248<br/>
            Mobile
          </div>
        </div>

      </div>
    );
  }
}
