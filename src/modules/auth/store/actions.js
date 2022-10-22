
import { api } from 'boot/axios'

export const someAction = async (/* { commit } */) => {

}

export const createUser = async ({ commit }, user) => {

    const { name, last_name, email, password, confirm_pass, access_code, } = user

    if (password !== confirm_pass)
        return { ok: false, msg: 'password does not match with confirm password' }

    try {

        let { data } = await api.post('users/', {
            name,
            last_name,
            email,
            password,
            access_code
        })

        const { ok } = data

        console.log(data);
        commit('createUser')

        return { ok }

    } catch (error) {
        console.log(error.response.data);
        return { ok: false, msg: error.response.data.msg || error.response.data.errors[0].msg }
    }

}

export const sigInUser = async ({ commit }, user) => {

    const { email, password } = user

    console.log(email, password);

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