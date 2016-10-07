import axios from 'axios';

const openWeather = { key: 'e21fd34086c0fbf97105732cdb61a9fe',
                      baseURL: 'http://api.openweathermap.org/data/2.5'
                    };
axios.defaults.baseURL = openWeather.baseURL;

function forecast() {
  return axios.get('/forecast', {
    params: {
      q: 'pune',
      APPID: openWeather.key
    }
  })
}

function extractForecast(info) {
  let startDateDay = new Date().getDate();
  let forecastList = [];
  for(let val of info) {
    if(startDateDay === new Date(val.dt_txt).getDate()) {
      startDateDay++;
      forecastList.push(val);
    }
  }
  return forecastList
}

export async function getForecast() {
  try {
    let info = await forecast();
    return extractForecast(info.data.list);
  } catch(error) {
    console.log('error in getForecast', error);
  }

}
