import React, {Component} from 'react';
import './SingleWeatherPage.css'

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
            <input value={this.state.cityName} onChange={this.cityChange}/> 
            <button onClick={this.getWeatherByCity}>Get Weather</button> 
          </div>
        )
    }
}

export default SingleWeatherPage;