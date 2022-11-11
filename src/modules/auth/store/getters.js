export const someGetter = (/* */) => {

}

export const user = (state) => {

    return state.user || null
}

export const username = (state) => {

    return state.user?.name || 'usuario'
}

export const isAdmin = (state) => {

    return state.user?.role == "ADMIN_AITECH_ROLE" ? true : false
}