const transactionReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SHOW_TRANSACTION_INFO':
            return action.payload;
        case 'CLEAR_TRACKING_INFO':
            return {}
        default:
            return state;
    }
};


export default transactionReducer;