export default (state=null, action) => {
    if (action.type === 'WINNER') {
        return action.payload
    } else {
        return state
    }
}