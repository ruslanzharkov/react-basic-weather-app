import React, { Component } from 'react';

export class WeatherDisplay extends Component {
    render() {
      return (
        <h1>Displaying weather for city {this.props.zip}!</h1>
      );
    }
}
