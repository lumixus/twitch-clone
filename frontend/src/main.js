import { createApp } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import Homepage from "./screens/homepage.vue";

import App from './App.vue';
import VueRouter from 'vue-router';

const router = new VueRouter({
    routes : [
      {path : "/", component : Homepage}
    ]
  });
library.add(fas);
library.add(fab);

createApp(App).use(router).component("fa", FontAwesomeIcon).mount('#app')
