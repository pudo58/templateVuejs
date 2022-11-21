import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path : '/login',
    name : 'LoginAndRegister',
    component : () => import('@/views/LoginPage.vue')
  },
  {
    path : '/acount/create',
    name : 'CreateAccount',
    component : () => import('@/views/CreateAccountPage.vue')
  },
  {
    path: '/:catchAll(.*)',
    name: 'CatchAll',
    component: () => import('@/components/status-http-server/404NotFound.vue')
  },{
    path : '/admin/dashboard',
    name : 'AdminDashboard',
    component : () => import('@/views/admin/AdminDashboard.vue')

  },{
    path : '/',
    name : 'Home',
    component : () => import('@/views/LoginPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes : routes
})
router.beforeEach((to, from, next) => {
  const publicPages = ['/login', '/acount/create','/admin/dashboard'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');
  if (authRequired && !loggedIn) {
    return next('/login');
  }
  next();
});

export default router;
