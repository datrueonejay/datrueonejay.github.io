import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Button } from '@material-ui/core';

export default class Navbar extends Component {
  render() {
    return(
      <Container fluid className='Navbar'>
        <Row className='Navbar'>
        <Col xs='4' className='NavBarItem' onClick={this.props.onBack}>
          <Button className='whiteRipple' fullWidth={true} tabIndex='-1'>
            <img className='NavBarButton' alt='back button' id='Back' src={require('../images/back.png')}/>
          </Button>
        </Col>
        <Col xs='4' className='NavBarItem' onClick={this.props.onHome}>
          <Button className='whiteRipple' fullWidth={true}  tabIndex='-1'>
            <img className='NavBarButton' alt='home button' id='Home' src={require('../images/home.png')}/>
          </Button>
        </Col>
        <Col xs='4' className='NavBarItem' onClick={this.props.onRecents}>
          <Button className='whiteRipple' fullWidth={true}  tabIndex='-1'>
            <img className='NavBarButton' alt='recents button' id='Recents' src={require('../images/recent.png')}/>
          </Button>
        </Col>
        </Row>
      </Container>
    );
  }
}
