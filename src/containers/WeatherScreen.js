import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {actionCreators} from '../actions'
import WeatherPage from '../components/Weather/WeatherPage';

class SingleWeatherContainer extends Component {
    render() {
        return(
            <WeatherPage 
                getWeather={this.props.getWeather}
                weatherData={this.props.weatherData}
            />
        )
    }
}

function mapStateToProps (state) {
    return {
        weatherData: state.weatherData
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getWeather: actionCreators.getWeather
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleWeatherContainer)

