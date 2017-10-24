import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {WeatherDisplay} from './WeatherDisplay';

const PLACES = [
  { name: "Palo Alto", zip: "94303" },
  { name: "San Jose", zip: "94088" },
  { name: "Santa Cruz", zip: "95062" },
  { name: "Honolulu", zip: "96803" }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <WeatherDisplay  zip={"12345"} />
      </div>
    );
  }
}

export default App;
