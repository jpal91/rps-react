//item of state controlling whether GameBoard or Winner shows
export const gameOn = (bool) => {
    return { type: 'GAME_ON', payload: bool }
}

//item of state tracking user score
//is fired once on refresh/open to match the localStorage state
export const userScore = (num) => {
    return { type: 'UPDATE_SCORE', payload: num }
}

//item of state tracking the result message (ie 'You Win', 'You Lose', 'Tie')
export const updateMessage = (str) => {
    return { type: 'UPDATE_MESSAGE', payload: str }
}

//item of state tracking the user's pick
export const youPick = (str) => {
    return { type: 'USER_PICK', payload: str }
}

//item of state tracking the comp/house's pick
export const housePick = (str) => {
    return { type: 'COMP_PICK', payload: str }
}

//item of state tracking the most recent winner
export const setWinner = (str) => {
    return { type: 'WINNER', payload: str }
}

