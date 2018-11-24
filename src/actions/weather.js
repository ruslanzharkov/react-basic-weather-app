import axios from 'axios';
import * as actionTypes from '../constants/actions';
import {api} from '../configs/api';
import {token} from '../configs/token';

export const getWeather = (cityName) => {
    return dispatch => {
        return axios.get(`${api}?q=${cityName}&APPID=${token}`)
            .then((response) => {
                console.log(response.data, 'weather')
                dispatch({
                    type: actionTypes.GET_WEATHER,
                    payload: response.data
                })
            })
    }
}