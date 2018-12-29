import Vue from 'vue';
import './plugins/vuetify'
import App from './App.vue';
import * as firebase from 'firebase'
import router from './router';
import store from './store';
import './registerServiceWorker';
import AlertCmp from './views/Shared/Alert.vue';

Vue.config.productionTip = false;
Vue.component('app-alert', AlertCmp);

new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    firebase.initializeApp({
      apiKey: "AIzaSyC18Ud1X0-X9zXexTVgi4Bi5UYTlFkQn6c",
      authDomain: "worldplaces-d1b9d.firebaseapp.com",
      databaseURL: "https://worldplaces-d1b9d.firebaseio.com",
      projectId: "worldplaces-d1b9d",
      storageBucket: "worldplaces-d1b9d.appspot.com",
    })
  }
}).$mount('#app');
