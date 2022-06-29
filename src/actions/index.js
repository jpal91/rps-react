export const gameOn = (bool) => {
    return { type: 'GAME_ON', payload: bool }
}

export const userScore = (num) => {
    return { type: 'UPDATE_SCORE', payload: num }
}

export const updateMessage = (str) => {
    return { type: 'UPDATE_MESSAGE', payload: str }
}

export const youPick = (str) => {
    return { type: 'USER_PICK', payload: str }
}

export const housePick = (str) => {
    return { type: 'COMP_PICK', payload: str }
}

