import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import currencySaga from './currency.saga';
import transactionSaga from './transaction.saga';
import updateSaga from './editPayment.saga';
import transactionHistorySaga from './transactionHistory.saga';
import deleteTransaction from './deleteTransaction.saga';


// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(), // login saga is now registered
    registrationSaga(),
    userSaga(),
    transactionSaga(),
    currencySaga(),
    updateSaga(),
    transactionHistorySaga(),
    deleteTransaction()
  ])
}
