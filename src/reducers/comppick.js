export default (state='', action) => {
    if (action.type === 'COMP_PICK') {
        return action.payload
    } else {
        return state
    }
}