import * as actionTypes from '../constants/actions';

export const weather = (initialState = [], action) => {
    switch (action.type) {
        case actionTypes.GET_WEATHER:
            return action.payload;
        default:
            return initialState;
    }
};