import { useStore } from 'vuex'

const usePartners = () => {

    const store = useStore()
    
    const getUsers = async () => {
        store.commit('partners/isLoading')
        const resp = await store.dispatch('partners/getUsers')

        store.commit('partners/isLoading')
        
    }

    return {
        getUsers,
        users: store.getters['partners/users']
    }


}


export default usePartners