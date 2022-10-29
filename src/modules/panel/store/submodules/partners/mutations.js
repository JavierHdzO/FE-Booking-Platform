export function someMutation(/* state */) {
}

export const setUsers = (state, users) => {

    state.partners = users

}


export const isLoading = (state) => {
    state.loading = !state.loading
}



