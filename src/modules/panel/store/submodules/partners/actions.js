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

export const deleteUser = async ({ commit }, user) => {

    const token = localStorage.getItem('tokenID');

    if (!token) {
        return { ok: false, msg: 'Token missing or incorrect', type: 'negative' }
    }

    if (!user.id) {
        return { ok: false, msg: 'User id is not found', type: 'negative' }
    }

    try {
        api.defaults.headers.common['x-token'] = token

        const { data } = await api.delete(`${user.path}/${user.id}`)

        const { ok, msg } = data

        return { ok, msg, type: 'positive' }



    } catch (error) {

        return {
            ok: false,
            msg: error.responses.data.msg || error.responses.data.errors[0].msg,
            type: 'negative'
        }
    }
}
