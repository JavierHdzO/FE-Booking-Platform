
const routes = [
  {
    path: '/',
    component: () => import('../modules/panel/layouts/PanelLayout'),

  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound')
  }
]

export default routes
