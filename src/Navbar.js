import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';



export default class Navbar extends Component {
  render() {
    return(
      <Container fluid className='Navbar'>
        <Row className='Navbar'>
        <Col xs='4' className='NavBarItem' onClick={this.props.onBack}>
          <img className='NavBarButton' id='Back' src={require('./images/back.png')}/>
        </Col>
        <Col xs='4' className='NavBarItem' onClick={this.props.onHome}>
          <img className='NavBarButton' id='Home' src={require('./images/home.png')}/>
        </Col>
        <Col xs='4' className='NavBarItem' onClick={this.props.onRecents}>
          <img className='NavBarButton' id='Recents' src={require('./images/recent.png')}/>
        </Col>
        </Row>
      </Container>
    );
  }
}
