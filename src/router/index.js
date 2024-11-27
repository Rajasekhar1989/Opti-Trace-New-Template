import { createRouter, createWebHistory } from '@ionic/vue-router';
import Login from '../components/LoginScreen.vue';
import amplifierRouter from './amplifierRouter';
import { genDateTimeID } from '../assets/script/common';

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', name: 'Login', component: Login },
  ...amplifierRouter
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  const isLoggedIn = localStorage.getItem("isLogin");

  // Redirect to login page if the user is not logged in and trying to access protected routes
  if (!isLoggedIn && to.name !== 'Login') {
    next('/login');  // Redirect to login page
  } else {      
      to.params.randomNumber = genDateTimeID();
      from.params.randomNumber = genDateTimeID();
      next();  // Proceed to the requested route
  }
});

export default router;
