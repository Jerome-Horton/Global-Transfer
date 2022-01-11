const transactionReducer = (state = {}, action) => {
  switch (action.type) {
    case 'MAKE_ESTIMATE':
      return action.payload;
    case 'CHANGE_TRANSACTION_AMOUNT':
      return {
        ...state, amount: action.payload.totalAmount,
        convertedValue: action.payload.convertedValue
      }
    case 'CLEAR_TRANSACTION':
      return {}
    default:
      return state;
  }
};


export default transactionReducer;