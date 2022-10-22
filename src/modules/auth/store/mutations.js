
export const someMutation = ( /* */) => {

}

export const sigInUser = (state, { token, user }) => {


    if (token) {
        localStorage.setItem('tokenID', token)
        state.tokenID = token
    }

    if (user) {
        localStorage.setItem('user', JSON.stringify(user))
    }


    state.user = user
    state.status = 'authenticated'

}

export const logOut = (state) => {
    state.user = null
    state.tokenID = null
    state.status = 'not-authenticated'

    localStorage.removeItem('tokenID')

}

export const reload = (state) => {
    state.user = JSON.parse(localStorage.getItem('user'))
    state.status = 'authenticated'
}

export const createUser = (state) => {
    state.user = null
    state.tokenID = null
    state.status = null

}


