
export const someMutation = ( /* */) => {

}

export const sigInUser = (state, { token, user }) => {


    if (token) {
        localStorage.setItem('tokenID', token)
        state.tokenID = token
    }

    state.user = user
    state.status = 'authenticated'

}

export const logOut = ( /* state */) => {

}


