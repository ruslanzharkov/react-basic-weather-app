import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {store} from './store';
import './App.css';
import SingleWeatherScreen from './containers/SingleWeatherScreen';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <SingleWeatherScreen/>
        </div>
      </Provider>
    );
  }
}

export default App;
