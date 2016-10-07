import React, { Component } from 'react';
import axios from 'axios';
import { getForecast } from '../helpers/OpenWeather';
import WeatherWidget from '../components/WeatherWidget';

const openWeather = { key: 'e21fd34086c0fbf97105732cdb61a9fe',
                      baseURL: 'http://api.openweathermap.org/data/2.5'
                    };
axios.defaults.baseURL = openWeather.baseURL;

class WidgetContainer extends Component {
  constructor() {
    super();
    this.state = {
      weather: [],
      isLoading: true
    };
    this.handleWidgetClick = this.handleWidgetClick.bind(this);
  }

  async componentDidMount() {
    console.log('componentDidMount...');
    try {
      const info = await getForecast();
      this.setState({
        weather: info,
        isLoading: false
      });
    } catch(error) {
      console.log('error in WeatherWidget', error);
    }

  }

  handleWidgetClick(weather) {
    const { location } = this.props.routeParams;
    this.context.router.push({
      pathname: '/detail/' + location,
      state: {
        weather: weather
      }
    })

  }

  render() {
    return (
      <div>
        <div>
          <p>Select a Day</p>
        </div>
        <WeatherWidget weather={this.state.weather} isLoading={this.state.isLoading} onWidgetClick={this.handleWidgetClick}/>
      </div>
    )
  }
}

WidgetContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default WidgetContainer;
