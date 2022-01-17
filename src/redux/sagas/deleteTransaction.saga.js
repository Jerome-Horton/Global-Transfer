import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* deleteTransactions(action) {
        try {
            console.log('DELETE-Payment action.payload', action.payload)
            yield axios({
                method: 'DELETE',
                url: `api/transaction/${action.id}`,
                payload: action.payload,
            })
            yield put({
                type: 'DELETE_TRANSFER'
            })
        } catch (err) {
            console.log(err)
        }
    }


function* deleteSaga() {
        yield takeLatest('DELETE_TRANSACTION', deleteTransactions);
    }
    
export default deleteSaga;