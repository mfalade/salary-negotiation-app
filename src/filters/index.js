import Vue from 'vue';

import capitalizeFilter from './capitalize';
import currencyFilter from './currency';

export default () => {
  Vue.filter('capitalize', capitalizeFilter);
  Vue.filter('currency', currencyFilter);
};
