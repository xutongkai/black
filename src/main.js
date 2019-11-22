import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'mint-ui/lib/style.css'
import { Header,Tabbar, TabItem,Swipe, SwipeItem } from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);


import axios from 'axios'
Vue.prototype.$axios = axios; 

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
