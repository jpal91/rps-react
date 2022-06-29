export default (state=0, action) => {
    if (action.type === 'UPDATE_SCORE') {
        let newScore
        state + action.payload < 0 ? newScore = 0 : newScore = state + action.payload

        return newScore
    } else {
        return state
    }
}