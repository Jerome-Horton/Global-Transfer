import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getTransactionHistory(action) {
 
    try {
        
        const response = yield axios.get('api/transaction', action.payload)
        console.log('response',response.data[0]);
        yield put({
            type: 'DISPLAY_TRANSACTION',
            payload: response.data,
        })

    } catch (error) {
        console.log('Error with GET Transaction History saga:', error)
    }
}

function* transactionHistorySaga() {
    yield takeLatest('GET_TRANSACTIONS', getTransactionHistory);
}

export default transactionHistorySaga;