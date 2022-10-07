import panelRouter from '../modules/panel/router/index'


const routes = [
  {
    path: '/panel',
    ...panelRouter

  },
  {
    path: '/auth',
    component: () => import('../modules/auth/layouts/AuthLayout'),

  },
  {
    path: '/',
    component: () => import('../modules/booking/layouts/BookingLayout'),

  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound')
  }
]

export default routes
