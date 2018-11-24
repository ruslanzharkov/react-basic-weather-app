import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {actionCreators} from '../actions'
import SingleWeatherPage from '../components/SingleWeather/SingleWeatherPage';

class SingleWeatherContainer extends Component {
    render() {
        return(
            <SingleWeatherPage getWeather={this.props.getWeather}/>
        )
    }
}

function mapStateToProps (state) {
    return {
       
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getWeather: actionCreators.getWeather
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleWeatherContainer)

