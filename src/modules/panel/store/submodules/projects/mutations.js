export function someMutation (/* state */) {
}

export function setProjects ( state, projects ) {
    state.projects = projects
}

export function isLoading ( state ) {
    state.isLoading = !state.isLoading
}


