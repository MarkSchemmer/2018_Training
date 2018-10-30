let obj =  [
    'ALL_TODOS',
    'CREATE_TODO',
    'DELETE_TODO_BY_ID',
    'EDIT_TODO_BY_ID',
    'TOGGLE_TODO_COMPLETION_BY_ID',
    'TOGGLE_ALL',
    'REMOVE_COMPLETED'
].reduce((acc,cur) => {
    acc[cur] = cur
    return acc 
}, {})

//window.obj = obj 
export default obj