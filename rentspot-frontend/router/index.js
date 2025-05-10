import { createRouter, createWebHistory } from 'vue-router';
import Home from '../src/views/home.vue';
import Login from '../src/views/Login.vue';
import Signin from '../src/views/Signin.vue';
import Rentlist from '../src/views/Rentlist.vue';


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/rentlist',
    name: 'RentList',
    component: RentList
  },
  
  {
    path: '/rentpage/:id',
    name: 'RentPage',
    // This will be implemented by your teammate
    component: () => import('../src/views/RentPage.vue') 
  },

  {
    path: '/Login',
    name: 'Login',
    component: Login
  },

  {
    path: '/Signin',
    name: 'Signin',
    component: Signin
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;