import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* fetchCurrency() {
  try {

    const response = yield axios.get('/api/currency')

    yield put({ type: 'SET_CURRENCY', payload : response.data })

  } catch (error) {
    console.log('Error with fetch currency saga:', error)
  }
}

function* currencySaga() {
  yield takeLatest('FETCH_CURRENCIES', fetchCurrency);
}

export default currencySaga;