import homepage from "../screens/homepage.vue";
import stream from "../screens/stream.vue";
import {createRouter, createWebHistory} from 'vue-router';

const vueRouter =  createRouter({
  history: createWebHistory(),
    routes : [
      {path : "/", component : homepage},
      {path : "/:broadcaster", component : stream},

    ]
  });


  export default vueRouter;