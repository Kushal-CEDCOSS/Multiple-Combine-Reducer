export const addition = (val1, val2) => {
    return {
        type: 'Addition',
        payload: {val1, val2}
    }
}
export const subtraction = (val1, val2) => {
    return {
        type: 'Subtraction',
        payload: {val1, val2}
    }
}
export const multiplication = (val1, val2) => {
    return {
        type: 'Multiplication',
        payload: {val1, val2}
    }
}
export const division = (val1, val2) => {
    return {
        type: 'Division',
        payload: {val1, val2}
    }
}
export const clear = () => {
    return {
        type: 'Clear',
    }
}


