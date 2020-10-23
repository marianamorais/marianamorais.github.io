import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    name: 'about',
    path: '/about',
    component: About
  }
];

export default createRouter({
  history: createWebHashHistory(),
  routes
});