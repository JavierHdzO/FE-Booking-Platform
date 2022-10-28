import { api } from "boot/axios";

export function someAction(/* context */) {
}

export const getUsers = async ({ commit }) => {

    const token = localStorage.getItem('tokenID')

    if (!token) {
        return {
            ok: false,
            msg: 'Token missing or incorrect'
        }
    }

    try {
        
        api.defaults.headers.common['x-token'] = token
        const { data } = await api.get('users/')
        const { ok, users } = data;

        commit('setUsers', users)

        return { ok: true }

    } catch (error) {
        return {
            ok: false,
            msg: error.responses.data.msg || error.responses.data.errors[0].msg
        }
    }
}
