import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('./views/love.vue')
  },
  {
    path: '/wish',
    component: () => import('./views/wish.vue')
  },
  {
    path: '/egg',
    component: () => import('./views/egg.vue')
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

// router.beforeEach((to, from, next) => {
//   const {
//     meta: { title }
//   } = to
//   document.title = (title as string) ? (title as string) : 'sfcloud-web-mobile'
//   next()
// })

export default router
