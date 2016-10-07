import React, { PropTypes } from 'react';
import Moment from 'moment';

import Loading from './Loading';
import sunshingImage from '../assets/images/01d.svg';
import rainImage from '../assets/images/10d.svg';

function WidgetUI({weather, onWidgetClick}) {
  if(weather.weather[0].main === 'Rain') {
      return(
        <div>
          <div className="col-md-4" onClick={onWidgetClick.bind(this, weather)}>
            <img src={rainImage} alt="Bright Day" />
            <p>
              {Moment(weather.dt_txt).format('ddd, MMM D')}
            </p>
          </div>
        </div>
      )
    }else {
      return(
        <div>
          <div className="col-md-4">
            <img src={sunshingImage} alt="Bright Day" />
            <p>Friday, Sept 30</p>
          </div>
        </div>
      )
    }
}

function WeatherWidget({weather, isLoading, onWidgetClick}) {
  if(isLoading) {
    return(
      <Loading />
    )
  }else {
    return(
      <div>
        <WidgetUI weather={weather[0]} onWidgetClick={onWidgetClick} />
        <WidgetUI weather={weather[1]} onWidgetClick={onWidgetClick}/>
        <WidgetUI weather={weather[2]} onWidgetClick={onWidgetClick}/>
        <WidgetUI weather={weather[3]} onWidgetClick={onWidgetClick}/>
      </div>
    )
  }

}

WeatherWidget.propTypes = {
    weather: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,
    onWidgetClick: PropTypes.func.isRequired
}

export default WeatherWidget;

