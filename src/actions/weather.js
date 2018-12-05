import axios from 'axios';
import * as actionTypes from '../constants/actions';
import {api} from '../configs/api';
import {token} from '../configs/token';
import {store} from '../store';

export const getWeather = (cityName) => {
    return dispatch => {
        return axios.get(`${api}?q=${cityName}&APPID=${token}`)
            .then((response) => {
                filterWeather(response.data)
            })
    }
}

const filterWeather = (weatherArray) => {

    let weather = [];
    let weatherDates = [];
    for (let i = 0; i < weatherArray.list.length; i++) {
        weather.push(Math.round(weatherArray.list[i].main.temp))
        weatherDates.push(weatherArray.list[i].dt_txt);
    }

    store.dispatch({
        type: actionTypes.GET_WEATHER,
        payload: {
            weather,
            weatherDates
        }
    })
};