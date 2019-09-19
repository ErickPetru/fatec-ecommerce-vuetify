import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/sobre',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path: '/painel',
      name: 'painel-index',
      component: () => import('./views/painel/Index.vue')
    },
    {
      path: '/painel/login',
      name: 'painel-login',
      component: () => import('./views/painel/Login.vue')
    },
    {
      path: '/painel/usuarios',
      name: 'painel-usuarios',
      component: () => import('./views/painel/Usuarios.vue')
    },
    {
      path: '/painel/produtos',
      name: 'painel-produtos',
      component: () => import('./views/painel/Produtos.vue')
    }
  ]
})
