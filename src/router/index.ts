import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Tabs from '../views/Tabs.vue';
import Home from '../views/Home.vue';
import Cards from '../views/Cards.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: '/home'
      },
      {
        path: 'home',
        name: 'Home',
        component: Home
      },
      {
        path: '/message/:id',
        component: () => import('../views/ViewMessage.vue')
      },
      {
        path: 'cards',
        name: 'Cards',
        component: Cards
      },
      {
        path: '/card/:id',
        component: () => import('../views/ViewPokinfo.vue')
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
