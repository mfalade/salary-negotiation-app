import Vue from 'vue';
import { BootstrapVue } from 'bootstrap-vue';

import '@/registerServiceWorker';
import '@/styles/index.scss';

import App from '@/App.vue';
import { registerFilters } from '@/filters';

Vue.config.productionTip = false;
Vue.use(BootstrapVue);

registerFilters();

new Vue({
  render: (h) => h(App),
}).$mount('#app');
