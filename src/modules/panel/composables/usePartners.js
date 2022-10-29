import { useStore } from 'vuex'

const usePartners = () => {

    const store = useStore()

    const getUsers = async () => {
        store.commit('partners/isLoading')
        const { ok, msg } = await store.dispatch('partners/getUsers')

        store.commit('partners/isLoading')

        return { ok, msg }

    }


    const deleteUser = async (path, id) => {

        const { ok, msg, type } = await store.dispatch('partners/deleteUser', { path, id });

        return { ok, msg, type }

    }

    const updateUser = async () => {

    }

    return {
        getUsers,
        deleteUser,
        updateUser,
        deleteUser
    }


}


export default usePartners