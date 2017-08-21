import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'
import routes from './routes'

Vue.use(Router)

const router = new Router({
  routes
})

// 注册全局钩子拦截导航
router.beforeEach((to, from, next) => {
  let token = store.state.token
  if (to.meta.requiresAuth) {
    if (token) {
      next()
    } else {
      next({
        path: '/',
        query: { redirect: to.fullPath }
      })
    }
  } else {
    next()
  }
})

export default router
