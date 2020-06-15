import Vue from 'vue';

import App from '@/App.vue';
import '@/registerServiceWorker';
import { registerFilters } from '@/filters';

Vue.config.productionTip = false;

registerFilters();

new Vue({
  render: (h) => h(App),
}).$mount('#app');
