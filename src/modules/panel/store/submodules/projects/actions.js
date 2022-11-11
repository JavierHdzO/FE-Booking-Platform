import { api } from 'boot/axios'

export function someAction (/* context */) {
}


export const getProjects = async( { commit }) => {

    const token = localStorage.getItem('tokenID');

    if(!token){
        return {
            ok: false,
            msg: 'Token is missing or incorrect'
        }
    }

    try {

        commit('isLoading')
        api.defaults.headers.common['x-token'] = token 
        const { data } = await api.get('projects')
        const { ok, projects} = data
        commit('setProjects',projects )
        commit('isLoading')

        return {
            ok
        }
    } catch (error) {
        return {
            ok:false,
            msg: 'Error to load projects'
        }
    }

}