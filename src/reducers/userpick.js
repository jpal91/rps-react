export default (state='', action) => {
    if (action.type === 'USER_PICK') {
        return action.payload
    } else {
        return state
    }
}