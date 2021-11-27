import { createApp } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import vueRouter from "./router";
import App from './App.vue';

library.add(fas);
library.add(fab);

createApp(App).use(vueRouter).component("fa", FontAwesomeIcon).mount('#app')
