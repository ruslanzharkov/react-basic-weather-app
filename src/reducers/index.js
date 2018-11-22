import {combineReducers} from 'redux';
import * as weather from './weather';

export default combineReducers({
    ...weather
})

