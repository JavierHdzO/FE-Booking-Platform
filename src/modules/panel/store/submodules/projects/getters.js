export function someGetter (/* state */) {
}

export function getProjects ( state ) {
    return state.projects || []
}

export const isLoading =  ( state ) =>  {

    return state.isLoading
}

export const projectID = ( state ) => ( id ) => {
    return state.projects.findIndex(project => project.id === id)
}


export const project = ( state ) => ( id ) => {

    return state.projects[id] || undefined
}
