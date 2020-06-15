import axios from 'axios';

import { WEATHER_SERVICE, DEFAULT_CITY } from '@/constants';

const getWeatherInCity = async (city = DEFAULT_CITY) => {
  try {
    const config = { params: { q: city, appid: WEATHER_SERVICE.API_KEY } };
    const response = await axios.get(WEATHER_SERVICE.API_URL, config);
    return response;
  } catch (err) {
    console.error(err);
  }
};

export { getWeatherInCity };
