import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';

const configureStore = (initialState) => {
    return createStore(
        reducers,
        initialState,
        applyMiddleware(thunk)
    )
};

export const store = configureStore({});