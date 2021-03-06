import Vue from 'vue'
import App from './App.vue'
import './styles/common.scss'
import Tab from 'vue-swipe-tab';
import Antd from 'ant-design-vue';

import VueAwesomeSwiper from 'vue-awesome-swiper';
// import './styles/swiper.css';
import '@fortawesome/fontawesome-free/css/fontawesome.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import { Slide } from 'vue-burger-menu'
import VueScrollTo from 'vue-scrollto'

Vue.use(VueScrollTo);
Vue.use(VueAwesomeSwiper);
Vue.use(Tab);
Vue.use(Antd);
Vue.config.productionTip = false
Vue.use(Slide);

Vue.directive('scroll', {
  inserted: function(el, binding) {
    let f = function(evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener('scroll', f);
      }
    };
    window.addEventListener('scroll', f);
  },
});

new Vue({
  render: h => h(App),
}).$mount('#app')
