import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* fetchTransaction(action) {
  try {

    const response = yield axios.post('/api/transaction/tracking',action.payload)

    yield put({ type: 'SHOW_TRANSACTION_INFO', payload : response.data[0] })

  } catch (error) {
    console.log('Error with fetch transaction status saga:', error)
  }
}

function* transactionSaga() {
  yield takeLatest('GET_TRANSFER_STATUS', fetchTransaction);
}

export default transactionSaga;