
import { useStore } from "vuex"

const useProjects = () => {

    const store = useStore()

    const getProjects = async() => {
        const {ok, msg} = await store.dispatch('projects/getProjects'); 

        return {ok, msg}
    }

    const createProject = async(form) => {
        const { ok, msg} = await store.dispatch('projects/createProject', form)
        return {ok, msg}
    }

    return {
        getProjects,
        createProject
    }
}


export default useProjects