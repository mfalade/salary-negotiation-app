import Vue from 'vue';
import { BootstrapVue } from 'bootstrap-vue';

import '@/registerServiceWorker';
import '@/styles/index.scss';

import App from '@/App.vue';
import { registerFilters } from '@/filters';
import { registerDirectives } from '@/directives';

Vue.config.productionTip = false;
Vue.use(BootstrapVue);

registerFilters();
registerDirectives();

new Vue({
  render: (h) => h(App),
}).$mount('#app');
