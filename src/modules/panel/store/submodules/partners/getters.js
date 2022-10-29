

export function someGetter(/* state */) {
}

export const users = (state) => {
    return state.partners || []
}


export const idUser = (state) => (id) => {
    return state.partners.findIndex(partner => partner.uid == id)
}


export const user = (state) => (id) => {
    return state.partners[id] || undefined
}


export function loading(state) {
    return state.loading
}
