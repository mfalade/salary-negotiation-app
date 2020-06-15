import Vue from 'vue';

import focusDirective from './focus';

export const registerDirectives = () => {
  Vue.directive('focus', focusDirective);
};
