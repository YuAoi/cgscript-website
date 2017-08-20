import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'
// import Hello from '@/components/business/Hello'

// import AdminLogin from '@/components/business/admin/Login'

Vue.use(Router)

const Hello = resolve => {
  require.ensure(['@/components/business/Hello'], () => {
    resolve(require('@/components/business/Hello'))
  })
}

const AdminLogin = resolve => {
  require.ensure(['@/components/business/admin/Login'], () => {
    resolve(require('@/components/business/admin/Login'))
  })
}

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/admin',
      name: 'Admin',
      component: AdminLogin
    }
  ]
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
