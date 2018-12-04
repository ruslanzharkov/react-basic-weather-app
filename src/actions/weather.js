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

const filterWeather = (weather) => {
    let newWeatherArray = [];
    for (let i = 0; i < weather.list.length; i++) {
        newWeatherArray.push(Math.round(weather.list[i].main.temp))
    }

    store.dispatch({
        type: actionTypes.GET_WEATHER,
        payload: newWeatherArray
    })
};