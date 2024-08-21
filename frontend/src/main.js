import { createApp } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import store from "./store/index";
import vueRouter from "./router";
import App from './App.vue';

library.add(fas);
library.add(fab);


createApp(App).use(store).use(vueRouter).component("fa", FontAwesomeIcon).mount('#app')
