
const constants = [
    'INITIAILIZE',
    'ADD_AUTHOR'

].reduce((obj, cur) => {
    obj[cur] = cur
    return obj
}, {})


export default constants