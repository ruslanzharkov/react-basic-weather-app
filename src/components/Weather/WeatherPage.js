import React, {Component} from 'react';
import {Input} from '../common/input';
import {Button} from '../common/button';
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
            <Button onClick={this.getWeatherByCity} className={'weather-button'}>Search</Button>
          </div>
        )
    }
}

export default SingleWeatherPage;