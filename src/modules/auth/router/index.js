export default {
    name: 'auth',
    component: () => import('../layouts/AuthLayout'),
    children: [
        {
            path: '',
            name: 'signin',
            component: () => import('../views/LogIn.vue')
        },
        {
            path: 'sign-up',
            name: 'sign-up',
            component: () => import('../views/SignUp.vue')
        },
    ]
}