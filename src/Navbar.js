import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

const style = {
  position: 'absolute',
  bottom: 0
};

export default class Navbar extends Component {
  render() {
    return(
      <Container style={style}>
        <Row>
        <Col xs='4'>Back</Col>
        <Col xs='4'>Home</Col>
        <Col xs='4'>Recents</Col>

        </Row>
      </Container>
    );
  }
}
