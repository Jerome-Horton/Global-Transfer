const currencyReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_CURRENCY':
      return action.payload;
    case 'CLEAR_CURRENCY':
      return state;
    default:
      return state;
  }
};


export default currencyReducer;



