import 'bootstrap';
import Vue from 'vue';
import App from './App.vue';
import VueAxios from 'vue-axios';
import VueRouter from 'vue-router';
import axios from 'axios';
import router from './router';
import store from './store';

Vue.config.productionTip = true;
Vue.use(VueRouter);
Vue.use(VueAxios, axios);

axios.interceptors.response.use(undefined, function (error) {
    if (error) {
      const originalRequest = error.config;
      if (error.response.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;
          const rep = store.dispatch('signOut')
          rep.then((rep) => {
          console.log(rep);
          });
          return router.push({ path:'/sign-in' })
      }
    }
  })
  
const app = new Vue({
    el: '#app',
    store,
    router,
    template: '<App/>',
    components: { App }
});