// 因为webpack静态分析代码机制，暂无法实现运行时加载动态组件

// import { deepEach } from '@/utils/deepMethods'

// const ensure = function (path) {
//   return resolve => require([path], resolve)
// }

// const routes = [{
//   path: '/',
//   component: '@/components/business/Hello'
// }, {
//   path: '/admin',
//   component: '@/components/business/admin/Login'
// }]

// deepEach(routes, route => (route.component = ensure(route.component)))

const AdminLayout = resolve => require.ensure([], () => resolve(require('@/components/business/admin/common/Layout')))

const userRoutes = [{
  path: '/',
  component: resolve => require.ensure([], () => resolve(require('@/components/business/Hello')))
}]

const adminRoutes = [{
  path: '/admin/login',
  component: resolve => require.ensure([], () => resolve(require('@/components/business/admin/Login')))
}, {
  path: '/admin',
  component: AdminLayout,
  children: [{
    path: 'users',
    component: resolve => require.ensure([], () => resolve(require('@/components/business/admin/Users')))
  }, {
    path: 'about',
    component: resolve => require.ensure([], () => resolve(require('@/components/business/admin/About')))
  }]
}]

const routes = [...userRoutes, ...adminRoutes]

export default routes
