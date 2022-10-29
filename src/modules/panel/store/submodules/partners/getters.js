export function someGetter(/* state */) {
}


export function users(state) {
    return state.partners || []
}


export function loading(state) {
    return state.loading
}
