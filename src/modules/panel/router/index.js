
export default {

    name: 'panel',
    component: () => import('../layouts/PanelLayout'),
    children: [
        {
            path: '',
            name: 'dashboard',
            component: () => import('../views/DashboardPage')
        },
        {
            path: 'partners',
            name: 'partners',
            component: () => import('../views/PartnerPage')
        },
        {
            path: 'development',
            name: 'development',
            component: () => import('../views/DevelopmentPage.vue')
        },
        {
            path: 'property-dev',
            name: 'property-dev',
            component: () => import('../views/PropertyDevPage.vue')
        },
    ]
}