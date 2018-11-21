import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {WeatherDisplay} from './WeatherDisplay';

import "bootswatch/lumen/bootstrap.css";
import { Navbar, NavItem, Nav, Grid, Row, Col } from "react-bootstrap";

// http://api.openweathermap.org/data/2.5/forecast?q=Bishkek&APPID=6d773b4d4da5704e915dc80ebeba3856
// url sample for request to api for weather

class App extends Component {
  constructor(props) {
    super();

    this.state = {
      activePlace: 0,
    };
  }

  render() {
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              React Simple Weather App
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
        <Grid>
          <Row>
            <Col md={4} sm={4}>
              <h3>Select a city</h3>
              <Nav
                bsStyle="pills"
                stacked
                activeKey={this.state.activePlace}
                onSelect={index => {
                  this.setState({ activePlace: index });
                }}
              >
                {PLACES.map((place, index) => (
                  <NavItem key={index} eventKey={index}>{place.name}</NavItem>
                ))}
              </Nav>
            </Col>
            <Col md={8} sm={8}>
              <WeatherDisplay key={this.state.activePlace} zip={PLACES[this.state.activePlace].zip} />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
