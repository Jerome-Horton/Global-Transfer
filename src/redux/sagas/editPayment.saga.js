import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchOneUser(action) {
    try {
        const response = yield axios({
            method: 'GET',
            url: `/user/${action.payload}`
        })
        const userToEdit = response.data;
        yield put({
            type: 'SET_USER_TO_EDIT',
            payload: userToEdit
        })
    } catch (err) {
        console.log(err);
    }
}


function* editPayment(action) {
    try {
        console.log('editPayment action.payload', action.payload)
        yield axios({
            method: 'PUT',
            url: `/user/${action.payload.id}`,
            data: action.payload
        })
        yield put({
            type: 'FETCH_PAYMENTS'
        })
    } catch (err) {
        console.log(err)
    }
}


function* updateSaga() {
    yield takeLatest('FETCH_ONE_USER', fetchOneUser);
    yield takeLatest('EDIT_PAYMENT', editPayment);
}

export default updateSaga;