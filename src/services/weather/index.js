import axios from 'axios';
import get from 'lodash/get';

import { WEATHER_SERVICE, DEFAULT_CITY } from '@/constants';

const getWeatherInCity = async (city = DEFAULT_CITY) => {
  const weather = {
    city,
    data: {},
    error: null,
  };
  try {
    const config = { params: { q: city, appid: WEATHER_SERVICE.API_KEY } };
    const response = await axios.get(WEATHER_SERVICE.API_URL, config);
    return { ...weather, data: response.data };
  } catch (err) {
    return {
      ...weather,
      error: get(err, 'response.data.message', 'An error occurred!'),
    };
  }
};

export { getWeatherInCity };
