


let MirrrorConstants = () => {
    let mirror = {}
    let constants = [
            'INITIALIZE',
            'GET_ALL_AUTHORS',
            'DELETE_AUTHOR',
            'CREATE_AUTHOR',
            'UPDATE_AUTHOR',
            'GET_AUTHOR_BY_ID'
    ]

    constants.forEach(k => {
        mirror[k] = k
    })

    return mirror
}


let actionTypes = MirrrorConstants()

export default actionTypes