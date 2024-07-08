export function increment() {
    return {
        type: 'inc'
    }
}
export function decrement() {
    return {
        type: 'dec'
    }
}
export function reset() {
    return {
        type: 'reset'
    }
}

export function counterReducer(state = 0, action) {
    switch (action.type) {
        case "inc":
            return state + 1;
        case "dec":
            return state - 1;
        case "reset":
            return 0;
        default:
            return state;
    }
}