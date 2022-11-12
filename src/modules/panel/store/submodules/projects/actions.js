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
        console.log(error);
        return {
            ok:false,
            msg: error.responses.data.msg || error.responses.data.errors[0].msg
        }
    }

}

export const  createProject = async( { commit }, formData ) => {

    const token = localStorage.getItem('tokenID');

    if(!token) return {
        ok:false,
        msg:'Token missing or incorrect'
    }

    try {

        api.defaults.headers.common['x-toke'] = token
        const { data } = await api.post('projects/', formData, {
            headers:{
                'Content-Type': 'multipart/form-data'
            }
        } )

        const  {ok, msg} =  data

        return {ok, msg}
        
    } catch (error) {
        return {
            ok: false,
            msg: error.responses.data.msg || error.responses.data.errors[0].msg
        }
    }
}


