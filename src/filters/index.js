import Vue from 'vue';

import capitalize from './capitalize';

export const registerFilters = () => {
  Vue.filter('capitalize', capitalize);
};
