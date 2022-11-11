
import { useStore } from "vuex"

const useProjects = () => {

    const store = useStore()

    const getProjects = async() => {
        await store.dispatch('projects/getProjects'); 
    }

    return {
        getProjects
    }
}


export default useProjects