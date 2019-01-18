import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Button, ButtonBase } from '@material-ui/core';

export default class Navbar extends Component {
  render() {
    return(
      <Container fluid className='Navbar'>
        <Row className='Navbar'>
        <Col xs='4' className='NavBarItem' onClick={this.props.onBack}>
          <ButtonBase className='whiteRipple'>
            <img className='NavBarButton' alt='back button' id='Back' src={require('../images/back.png')}/>
          </ButtonBase>
        </Col>
        <Col xs='4' className='NavBarItem' onClick={this.props.onHome}>
          <ButtonBase className='whiteRipple'>
            <img className='NavBarButton' alt='home button' id='Home' src={require('../images/home.png')}/>
          </ButtonBase>
        </Col>
        <Col xs='4' className='NavBarItem' onClick={this.props.onRecents}>
          <ButtonBase className='whiteRipple'>
            <img className='NavBarButton' alt='recents button' id='Recents' src={require('../images/recent.png')}/>
          </ButtonBase>
        </Col>
        </Row>
      </Container>
    );
  }
}
