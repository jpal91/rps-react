const compPick = () => {
    const picks = ['rock', 'paper', 'scissors']
    let pickNum = Math.floor(Math.random() * 3)

    return picks[pickNum]
}

export const playAGame = (user) => {
    let comp = compPick()
    let obj = {
        message: '',
        score: 0,
        hPick: comp,
        winner: null
    }

    if (user === comp) {
        obj.message = "IT'S A TIE!"
        return obj
    }

    if (user === 'rock') {
        if (comp === 'paper') {
            obj.message = 'YOU LOSE'
            obj.score = -1
            obj.winner = 'comp'
        } else {
            obj.message = 'YOU WIN!'
            obj.score = 1
            obj.winner = 'user'
        }
    } else if (user === 'paper') {
        if (comp === 'scissors') {
            obj.message = 'YOU LOSE'
            obj.score = -1
            obj.winner = 'comp'
        } else {
            obj.message = 'YOU WIN!'
            obj.score = 1
            obj.winner = 'user'
        }
    } else if (user === 'scissors') {
        if (comp === 'rock') {
            obj.message = 'YOU LOSE'
            obj.score = -1
            obj.winner = 'comp'
        } else {
            obj.message = 'YOU WIN!'
            obj.score = 1
            obj.winner = 'user'
        }
    }

    return obj
}

export const imageHelper = (str) => {
    let imgStr = ''

    switch (str) {
        case 'rock':
            imgStr = './images/icon-rock2.svg'
            break
        case 'paper':
            imgStr = './images/icon-paper2.svg'
            break
        case 'scissors':
            imgStr = './images/icon-scissors2.svg'
            break
    }

    return imgStr
}