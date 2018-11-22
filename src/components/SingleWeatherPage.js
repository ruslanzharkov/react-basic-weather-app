import React, {Component} from 'react';

class SingleWeatherPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cityName: ''
        };
    }

    render() {
        return (
          <input value={this.state.cityName}/>  
        )
    }
}

export default SingleWeatherPage;