const initalState = {
count: 0
}

const reducer = (state = initalState,action) => {
    switch(action.type) {
        case 'INC_COUNT':
            return {
                ...state,
                count: state.count + 1
            }
        case 'DEC_COUNT':
            return {
                ...state,
                count: state.count - 1
            }
        default:
            return state;
    }
}

export default reducer;