import Vue from 'vue'
import Router from 'vue-router'
import DashboardLayout from '@/layout/DashboardLayout'
import AuthLayout from '@/layout/AuthLayout'
Vue.use(Router)

export default new Router({
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: 'login',
      component: DashboardLayout,
      children: [
        {
          path: '/dashboard',
          name: 'dashboard',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "demo" */ './views/Dashboard.vue')
        },
        {
          path: '/icons',
          name: 'icons',
          component: () => import(/* webpackChunkName: "demo" */ './views/Icons.vue')
        },
        {
          path: '/profile',
          name: 'profile',
          component: () => import(/* webpackChunkName: "demo" */ './views/UserProfile.vue')
        },
        {
          path: '/maps',
          name: 'maps',
          component: () => import(/* webpackChunkName: "demo" */ './views/Maps.vue')
        },
        {
          path: '/tables',
          name: 'tables',
          component: () => import(/* webpackChunkName: "demo" */ './views/Tables.vue')
        },
        {
          path: '/flotilla',
          name: 'flotilla',
          component: () => import(/* webpackChunkName: "demo" */ './views/Flotilla.vue')
        },
        {
          path: '/perfil-car',
          name: 'perfil-car',
          component: () => import(/* webpackChunkName: "demo" */ './views/CarPerfil.vue')
        },
        {
          path: '/choferes',
          name: 'choferes',
          component: () => import(/* webpackChunkName: "demo" */ './views/Choferes.vue')
        },
        {
          path: '/revision',
          name: 'revision',
          component: () => import(/* webpackChunkName: "demo" */ './views/Revision.vue')
        },
        {
          path: '/reportes',
          name: 'reportes',
          component: () => import(/* webpackChunkName: "demo" */ './views/Reportes.vue')
        },
        {
          path: '/usuarios',
          name: 'usuarios',
          component: () => import(/* webpackChunkName: "demo" */ './views/Usuarios.vue')
        }
      ]
    },
    {
      path: '/',
      redirect: 'login',
      component: AuthLayout,
      children: [
        {
          path: '/login',
          name: 'login',
          component: () => import(/* webpackChunkName: "demo" */ './views/Login.vue')
        },
        {
          path: '/register',
          name: 'register',
          component: () => import(/* webpackChunkName: "demo" */ './views/Register.vue')
        }
      ]
    }
  ]
})
