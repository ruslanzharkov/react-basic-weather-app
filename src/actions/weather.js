import axios from 'axios';
import * as actionTypes from '../constants/actions';
import {api} from '../configs/api';
import {token} from '../configs/token';

export const getWeather = (cityName) => {
    return dispatch => {
        return axios.get(`${api}?q=${cityName}&APPID=${token}`)
            .then((response) => {
                filterWeather(response.data)
            })
    }
}

const filterWeather = (weather) => {
    console.log('worked', weather.list);
    let newWeatherArray = [];
    // for (let i = 0; i < weather.lengt)

    return dispatch => {
        dispatch({
            type: actionTypes.GET_WEATHER,
            payload: weather
        })
    }
};