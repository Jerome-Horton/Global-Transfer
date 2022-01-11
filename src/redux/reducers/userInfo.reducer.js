import { combineReducers } from 'redux';

const senderInfo = (state = {}, action) => {
  switch (action.type) {
    case 'SET_USER_INFO':
      return action.payload;
    case 'CLEAR_USER_INFO':
      return {}
    default:
      return state;
  }
};


const receiverInfo = (state = {}, action) => {
  switch (action.type) {
    case 'SET_RECEIVER_INFO':
      return action.payload;
    case 'CLEAR_RECEIVER_INFO':
      return {}
    default:
      return state;
  }
};

export default combineReducers({
  senderInfo,
  receiverInfo
});