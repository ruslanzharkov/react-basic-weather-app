import React, {Component} from 'react';

class SingleWeather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cityName: ''
        };
    }

    render() {
        return (
          <input value={this.state.cityName}/>  
        )
    }
}