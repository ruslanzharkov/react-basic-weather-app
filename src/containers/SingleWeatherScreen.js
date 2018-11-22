import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {actionCreators} from '../../actions'
import ScoringModelsReactive from './ScoringModelsReactive';

class SingleWeatherContainer extends Component {
    render() {
        return(
            
        )
    }
}

function mapStateToProps (state) {
    return {
       
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleWeatherContainer)

