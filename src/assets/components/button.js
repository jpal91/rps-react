import colors from '../base/colors'
const { text } = colors

const button = {
    styleOverrides: {
        contained: {
            '&:hover': {
                backgroundColor: 'hsla(360, 100%, 100%, 0)',
                color: 'white',
                borderColor: 'white'
            },
            border: '1px solid white'
        },
        outlined: {
            '&:hover': {
                backgroundColor: 'white',
                color: text.score
            },
            borderColor: 'white',
            color: 'white'
        }
    },
    '::hover': {
        backgroundColor: 'red'
    }
}

export default button