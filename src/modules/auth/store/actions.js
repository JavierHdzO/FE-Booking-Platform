
import { api } from 'boot/axios'

export const someAction = async (/* { commit } */) => {

}

export const createUser = async ({ dispatch }, user) => {

    const { name, last_name, email, password, confirm_pass, access_code, } = user

    if (password !== confirm_pass)
        return { ok: false, msg: 'password does not match with confirm password' }

    try {

        const { data } = await api.post('users/', {
            name,
            last_name,
            email,
            password,
            access_code
        })

        console.log(data)



    } catch (error) {
        return { ok: false, msg: error.response.data.msg }
    }

}

export const sigInUser = async ({ commit }, user) => {

    const { email, password } = user

    try {

        const { data } = await api.post('auth/signin', {
            email,
            password
        })

        const { token, user, ok } = data

        commit('sigInUser', { token, user })

        return { ok }



    } catch (error) {
        return { ok: false, msg: error.response.data.msg }
    }
}

export const checkAuthentication = async (/* { commit } */) => {

}