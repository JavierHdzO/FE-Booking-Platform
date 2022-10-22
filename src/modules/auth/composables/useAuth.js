import { computed } from "vue"
import { useStore } from "vuex"


const useAuth = () => {

    const store = useStore()

    const createUser = async (user) => {

        const resp = await store.dispatch('auth/createUser', user)

        return resp

    }

    const logIn = async (user) => {
        console.log(user.password, user.email);
        const resp = await store.dispatch('auth/sigInUser', user);

        return resp
    }

    const checkStatus = async () => {

    }

    const logOut = () => {

    }

    return {
        createUser,
        logIn,
        checkStatus,
        logOut
    }


}

export default useAuth