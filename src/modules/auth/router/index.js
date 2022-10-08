export default {
    name: 'auth',
    component: () => import('../layouts/AuthLayout'),
    children: [
        {
            path: '',
            name: 'signin',
            component: () => import('../views/LogiIn.vue')
        },
        {
            path: 'sign-in',
            name: 'sign-in',
            component: () => import('../views/SignUp.vue')
        },
    ]
}