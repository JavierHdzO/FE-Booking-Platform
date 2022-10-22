import useStore from '../../../store/index'

const isAuthenticateGuard = async (to, from, next) => {

    const store = useStore()

    const { ok } = await store.dispatch('auth/checkAuthentication')


    store.commit('auth/reload')

    if (ok) next()
    else next({ name: 'signin' })
}

export default isAuthenticateGuard