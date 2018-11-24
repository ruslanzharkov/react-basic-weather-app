import React, {Component} from 'react';
import {Input} from '../common/input';
import './WeatherPage.css'

class SingleWeatherPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cityName: ''
        };
    }

    getWeatherByCity = () => {
        this.props.getWeather(this.state.cityName)
    };

    cityChange = (event) => {
        this.setState({cityName: event.target.value})
    };

    render() {
        return (
          <div className={'weather-container'}>
            <Input value={this.state.value} onChange={this.cityChange} className={'weather-input'}/>
            <button onClick={this.getWeatherByCity}>Get Weather</button> 
          </div>
        )
    }
}

export default SingleWeatherPage;