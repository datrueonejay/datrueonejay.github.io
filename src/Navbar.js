import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';



export default class Navbar extends Component {
  render() {
    return(
      <Container fluid className='Navbar'>
        <Row className='Navbar'>
        <Col xs='4' className='NavBarItem'>
          <img className='NavBarButton' src={require('./images/back.png')}/>
        </Col>
        <Col xs='4' className='NavBarItem'>
          <img className='NavBarButton' src={require('./images/home.png')}/>
        </Col>
        <Col xs='4' className='NavBarItem'>
          <img className='NavBarButton' src={require('./images/recent.png')}/>
        </Col>
        </Row>
      </Container>
    );
  }
}
