import React, { Component } from 'react';

export default class ContactMeApp extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    return(
      <div className='ContactMeApp'>
        <img src='#' className='ContactImage'/>
        <div className='ContactEmail'>
          <img src='#' className='ContactIcon ContactInfo'/>
          datrueonejay@gmail.com
        </div>
        <div className='ContactNumber ContactInfo'>
          <img src='#' className='ContactIcon'/>
          (647) 268-0248
        </div>

      </div>
    );
  }
}
