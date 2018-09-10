import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/App.css';
import './App';
import Navbar from './Navbar';
import StatusBar from './StatusBar';
import MobileApp from './MobileApp';
import { Container, Row, Col } from 'reactstrap';


class App extends Component {
  render() {
    return (
      <div id='Screen' className='FillWidth FillHeight'>
        <StatusBar/>
        <div id='HomeScreen'>
          <Container fluid>
            <Row>
              <Col>
                <MobileApp icon={require('./images/github.png')} name="GitHub" link='https://github.com/datrueonejay'/>
              </Col>
              <Col>
                <MobileApp icon="#" name="LinkedIn"/>
              </Col>
              <Col>
                <MobileApp icon="#" name="Resume"/>
              </Col>
              <Col>
                <MobileApp icon="#" name="Contact Me"/>
              </Col>
            </Row>
          </Container>
        </div>
        <Navbar/>
      </div>
    );
  }
}

export default App;
