import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import LoginView from '../views/LoginView.vue'
import AccessDenied from '../views/AccessDenied.vue'
import FirebaseSignInView from '../views/FirebaseSignInView.vue'
import FirebaseRegisterView from '../views/FirebaseRegisterView.vue'
import FirebaseSignOutView from '../views/FirebaseSignOutView.vue'
import AddBookView from '../views/AddBookView.vue'
import { isAuthenticated } from '../auth.js'

const routes = [
  { path: '/',             name: 'home',         component: HomeView },
  { path: '/about',        name: 'about',        component: AboutView,       meta: { requiresAuth: true } },
  { path: '/login',        name: 'login',        component: LoginView },
  { path: '/access-denied',name: 'access-denied',component: AccessDenied },
  { path: '/FireLogin',    name: 'FireLogin',    component: FirebaseSignInView },
  { path: '/FireRegister', name: 'FireRegister', component: FirebaseRegisterView },
  { path: '/FireLogout',   name: 'FireLogout',   component: FirebaseSignOutView },
  { path: '/addbook',      name: 'AddBook',      component: AddBookView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !isAuthenticated.value) {
    next({ name: 'login' })
  } else {
    next()
  }
})

export default router
