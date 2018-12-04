import React, {Component} from 'react';
import {Input} from '../common/input';
import {Button} from '../common/button';
import './WeatherPage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Line} from 'react-chartjs-2';

class SingleWeatherPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cityName: '',
            weatherChart: {
                labels: [1,2,3,4,5],
                datasets: {
                    label:'Population',
                    data: [],
                    backgroundColor:[
                        'rgba(255, 99, 132, 0.6)',
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(255, 206, 86, 0.6)',
                        'rgba(75, 192, 192, 0.6)',
                        'rgba(153, 102, 255, 0.6)',
                        'rgba(255, 159, 64, 0.6)',
                        'rgba(255, 99, 132, 0.6)'
                    ]
                }
            },
            data: []
        };
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log(nextProps.weather) 
        if (nextProps.weather !== prevState.data) {
            return {
                weatherChart: {
                    label:'Population',
                    datasets: [{
                        data: nextProps.weather,
                        backgroundColor:[
                        'rgba(255, 99, 132, 0.6)',
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(255, 206, 86, 0.6)',
                        'rgba(75, 192, 192, 0.6)',
                        'rgba(153, 102, 255, 0.6)',
                        'rgba(255, 159, 64, 0.6)',
                        'rgba(255, 99, 132, 0.6)'
                    ]
                    }]
                },
                data: nextProps.weather
            }
        }

        return null;
    }

    getWeatherByCity = () => {
        this.props.getWeather(this.state.cityName)
    };

    cityChange = (event) => {
        this.setState({cityName: event.target.value})
    };

    render() {
        console.log(this.state.weatherChart)
        return (
          <div className={'weather-container'}>
            <Input value={this.state.value} onChange={this.cityChange} className={'weather-input'}/>
            <Button onClick={this.getWeatherByCity} className={'weather-button'}>Search</Button>
            <div>
                <Line
                    data={this.state.weatherChart}
                    width="600" height="150"
                />
            </div>
          </div>
        )
    }
}

export default SingleWeatherPage;