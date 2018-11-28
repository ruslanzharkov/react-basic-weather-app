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
                weather={this.props.weather}
            />
        )
    }
}

function mapStateToProps (state) {
    return {
        weather: state.weather
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getWeather: actionCreators.getWeather
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleWeatherContainer)

