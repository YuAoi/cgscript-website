// import { deepEach } from '@/utils/deepMethods'

// const ensure = function (path) {
//   console.log(path)
//   return resolve => {
//     require.ensure([path], () => {
//       resolve(require(path))
//     })
//   }
// }

const routes = [{
  path: '/',
  component: resolve => {
    require.ensure(['@/components/business/Hello'], () => {
      resolve(require('@/components/business/Hello'))
    })
  }
}, {
  path: '/admin',
  component: resolve => {
    require.ensure(['@/components/business/admin/Login'], () => {
      resolve(require('@/components/business/admin/Login'))
    })
  }
}]

// deepEach(routes, route => (route.component = ensure(route.component)))

export default routes
