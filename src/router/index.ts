import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '@/layouts/Default.vue'

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '/dashboard/summary',
        name: 'summary',
        component: () => import('@/views/dashboard/Summary.vue')
      },
      {
        path: '/dashboard/arbitration',
        name: 'arbitration',
        component: () => import('@/views/dashboard/Arbitration.vue')
      },
      {
        path: '/dashboard/finance',
        name: 'finance',
        component: () => import('@/views/dashboard/Finance.vue')
      },
      {
        path: '/dashboard/communications',
        name: 'communications',
        component: () => import('@/views/dashboard/Communications.vue')
      },
      {
        path: '/dashboard/trademarks',
        name: 'trademarks',
        component: () => import('@/views/dashboard/Trademarks.vue')
      },
      {
        path: '/dashboard/founders',
        name: 'founders',
        component: () => import('@/views/dashboard/Founders.vue')
      },
      {
        path: '/dashboard/reliability',
        name: 'reliability',
        component: () => import('@/views/dashboard/Reliability.vue')
      },
      {
        path: '/dashboard/debts',
        name: 'debts',
        component: () => import('@/views/dashboard/Debts.vue')
      },
      {
        path: '/dashboard/sanctions',
        name: 'sanctions',
        component: () => import('@/views/dashboard/Sanctions.vue')
      },
      {
        path: '/dashboard/leasing',
        name: 'leasing',
        component: () => import('@/views/dashboard/Leasing.vue')
      },
    ]
  },
  {
    path: '',
    name: 'home',
    component: () => import('@/views/HomeView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
