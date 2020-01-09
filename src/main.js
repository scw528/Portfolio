import Vue from 'vue'
import App from './App.vue'
import router from '@/router';
import vuetify from './plugins/vuetify';
import * as firebase from 'firebase';


Vue.config.productionTip = false

Vue.use(vuetify);

firebase.initializeApp({
  apiKey: "AIzaSyA3BcGD1v86mJItuxkwcbyRfNjxkLtzM_Q",
  authDomain: "portfolio-fff2c.firebaseapp.com",
  databaseURL: "https://portfolio-fff2c.firebaseio.com",
  projectId: "portfolio-fff2c",
  storageBucket: "portfolio-fff2c.appspot.com",
  messagingSenderId: "74029500044",
  appId: "1:74029500044:web:d743925ed5b2dbebc6dda9",
  measurementId: "G-E85W8DXQVW"
})

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
