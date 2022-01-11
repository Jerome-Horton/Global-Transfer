const successReducer = (state = "", action) => {
    switch (action.type) {
        case 'SET_REFERENCE_NUMBER':
            return action.payload;
        case 'CLEAR_REFERENCE_NUMBER':
            return ""
        default:
            return state;
    }
};


export default successReducer;