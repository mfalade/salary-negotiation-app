import Vue from 'vue';

import focusDirective from './focus';

export default () => {
  Vue.directive('focus', focusDirective);
};
