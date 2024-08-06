import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '@/layouts/Default.vue'
import Summary from '@/views/dashboard/Summary.vue'
import Arbitration from '@/components/view/contragent/dashboard/Arbitration.vue'
import Finance from '@/components/view/contragent/dashboard/Finance.vue'
import Communications from '@/components/view/contragent/dashboard/Communications.vue'
import Trademarks from '@/components/view/contragent/dashboard/Trademarks.vue'
import Founders from '@/components/view/contragent/dashboard/Founders.vue'
import Debts from '@/components/view/contragent/dashboard/Debts.vue'
import Sanctions from '@/components/view/contragent/dashboard/Sanctions.vue'
import Leasing from '@/components/view/contragent/dashboard/Leasing.vue'

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: 'dashboard/summary',
        name: 'summary',
        component: Summary,
        children: [
          {
            path: 'arbitration',
            name: 'arbitration',
            component: Arbitration
          },
          {
            path: 'finance',
            name: 'finance',
            component: Finance
          },
          {
            path: 'communications',
            name: 'communications',
            component: Communications
          },
          {
            path: 'trademarks',
            name: 'trademarks',
            component: Trademarks
          },
          {
            path: 'founders',
            name: 'founders',
            component: Founders
          },
          {
            path: 'debts',
            name: 'debts',
            component: Debts
          },
          {
            path: 'sanctions',
            name: 'sanctions',
            component: Sanctions
          },
          {
            path: 'leasing',
            name: 'leasing',
            component: Leasing
          }
        ]
      }
    ]
  },
  {
    path: '',
    name: 'home',
    component: () => import('@/views/HomeView.vue')
  },
  {
    path: '/auth',
    name: 'auth',
    component: () => import('@/views/AuthView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
