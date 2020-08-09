import Vue from 'vue';
import ElementUI from 'element-ui';
import './assets/base.css';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import router from './router';
import store from './store';
import {
  get,
  post
} from './axios';
import md5 from 'js-md5';

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.prototype.$get = get;
Vue.prototype.$post = post;
Vue.prototype.$md5 = md5;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')