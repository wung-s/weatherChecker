import React, { PropTypes } from 'react';
import sunshingImage from '../assets/images/01d.svg';
import rainImage from '../assets/images/10d.svg';

function Detail({weather}) {
  return(
    <div className='col-md-4 col-md-offset-4'>
      <img src={rainImage} alt="Bright Day" />
      <div> {weather.weather[0].description} </div>
      <div> Min temp {weather.main.temp_min} </div>
      <div> Max temp {weather.main.temp_max}</div>
      <div> Humidity {weather.main.temp_max}</div>
    </div>
  )
}

Detail.propTypes = {
    weather: PropTypes.object.isRequired
}

export default Detail;

