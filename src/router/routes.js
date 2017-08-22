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

const routes = [{
  path: '/',
  component: resolve => require.ensure([], () => resolve(require('@/components/business/Hello')))
}, {
  path: '/admin',
  component: resolve => require.ensure([], () => resolve(require('@/components/business/admin/Login')))
}]

export default routes
