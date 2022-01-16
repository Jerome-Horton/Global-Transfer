import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* fetchTransaction(action) {
  try {
    console.log(action.payload)
    const response = yield axios.post('/api/transaction/tracking',action.payload)

    yield put({ type: 'SHOW_TRANSACTION_INFO', payload : response.data[0] })

  } catch (error) {
    console.log('Error with fetch transaction status saga:', error)
  }
}

function* getTransactionHistory(action) {
  try {
    console.log(action.payload)
    const response = yield axios.post('/api/transaction',action.payload)

    yield put({ 
      type: 'DISPLAY_TRANSACTION', 
      payload : response.data[0] })

  } catch (error) {
    console.log('Error with GET Transaction History saga:', error)
  }
}

function* transactionSaga() {
  yield takeLatest('GET_TRANSFER_STATUS', fetchTransaction);
  yield takeLatest('GET_TRANSACTIONS', getTransactionHistory);
}

export default transactionSaga;