import { computed } from "vue"
import { useStore } from "vuex"


const useAuth = () => {

    const store = useStore()

    const createUser = async (user) => {

        const resp = await store.dispatch('auth/createUser', user)

        return resp

    }

    const logIn = async (user) => {

        const resp = await store.dispatch('auth/sigInUser', user);

        return resp
    }

    const checkStatus = async () => {

        store.commit('auth/reload')

    }

    const logOut = () => {
        store.commit('auth/logOut')

        return { ok: true, msg: 'Hasta luego' }
    }

    return {
        createUser,
        logIn,
        checkStatus,
        logOut,
        username: store.getters['auth/username']
    }


}

export default useAuth