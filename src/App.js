import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {store} from './store';
import './App.css';
import WeatherScreen from './containers/WeatherScreen';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <WeatherScreen/>
        </div>
      </Provider>
    );
  }
}

export default App;
