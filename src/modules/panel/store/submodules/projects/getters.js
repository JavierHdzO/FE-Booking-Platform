export function someGetter (/* state */) {
}

export function getProjects ( state ) {
    return state.projects || []
}

export const isLoading =  ( state ) =>  {

    return state.isLoading
}
