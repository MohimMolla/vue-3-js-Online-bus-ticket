import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import TicketView from '../views/TicketView.vue'
import ContactView from '../views/ContactView.vue'
import BusComponent from '../views/BusComponent.vue'
import Bus2Component from '../views/Bus2Component.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/ticket',
      name: 'ticket',
      component: TicketView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/bus',
      name: 'bus',
      component: BusComponent
    },
    {
      path: '/bus2',
      name: 'bus2',
      component: Bus2Component
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
