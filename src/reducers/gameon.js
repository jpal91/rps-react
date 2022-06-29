export default (state=true, action) => {
    if (action.type === 'GAME_ON') {
        return action.payload
    } else {
        return state
    }
}