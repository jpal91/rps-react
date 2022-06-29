export default (state='', action) => {
    if (action.type === 'UPDATE_MESSAGE') {
        return action.payload
    } else {
        return state
    }
}