export const TAB_SETTING = {
  EMPLOYEE: {
    id: 'employee',
    description: 'Please provide your desired salary in Euros',
  },
  EMPLOYER: {
    id: 'employer',
    description: 'Please enter your best offer in Euros',
  },
};

export const DEFAULT_CITY = 'London';
export const WEATHER_SERVICE = {
  API_URL: 'https://api.openweathermap.org/data/2.5/weather',
  API_KEY: process.env.VUE_APP_WEATHER_API_KEY,
};
