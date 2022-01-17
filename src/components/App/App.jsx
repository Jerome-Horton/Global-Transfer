import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';


import AboutPage from '../AboutPage/AboutPage';
import HomePage from '../HomePage/HomePage';
import TransferPage from '../TransferPage/TransferPage';
import LogIn from '../LogIn/Login';
import SenderInfo from '../SenderInfo/SenderInfo';
import PaymentInfo from '../PaymentInfo/PaymentInfo';
import ReceiverInfo from '../ReceiverInfo/ReceiverInfo';
import FraudPage from '../FraudPage/FraudPage';
import Summary from '../Summary/Summary';
import Success from '../SuccessPage/SuccessPage';
import Status from '../StatusPage/StatusPage';
import MyAccount from '../MyAccount/MyAccount';
import TransactionHistory from '../transactionHistory/transactionHistory';

import './App.css';



function App() {
  const dispatch = useDispatch();

  const user = useSelector(store => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  return (
    <Router>
      <div>
        <Header />
        <Switch>
          {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
          {/* <Redirect exact from="/" to="/home" /> */}
          {/* Visiting localhost:3000/about will show the about page. */}

          <Route
            // shows AboutPage at all times (logged in or not)
            exact
            path="/aboutPage"
          >
            <AboutPage />
          </Route>

          <Route
            // shows AboutPage at all times (logged in or not)
            exact
            path="/"
          >
              <HomePage />
          </Route>

          
          <Route
            // shows AboutPage at all times (logged in or not)
            exact
            path="/transfer-status"
          >
              <Status />
          </Route>



          <Route
            exact
            path="/login"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect to the /user page
              <Redirect to="/" />
              :
              // Otherwise, show the login page
              <LogIn />
            }
          </Route>

          <ProtectedRoute
            exact
            path="/receiver-info"
          >
            <ReceiverInfo/>
          </ProtectedRoute>

          <ProtectedRoute
            exact
            path="/success"
          >
            <Success/>
          </ProtectedRoute>

          <ProtectedRoute
            exact
            path="/fraud-protection"
          >
            <FraudPage/>
          </ProtectedRoute>

          <ProtectedRoute
            exact
            path="/summary"
          >
            <Summary/>
          </ProtectedRoute>

          <ProtectedRoute
            exact
            path="/myAccount"
          >
            <MyAccount/>
          </ProtectedRoute>
          
          <ProtectedRoute
            exact
            path="/transactionHistory"
          >
            <TransactionHistory/>
          </ProtectedRoute>

          <Route
            
            exact
            path="/getStarted"
          >
            <TransferPage />
          </Route>

         




          {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
          {/* <ProtectedRoute
            // logged in shows UserPage else shows LoginPage
            exact
            path="/user"
          >
            <UserPage />
          </ProtectedRoute> */}

          {/* <Route
            exact
            path="/registration"
          > */}
            {/* {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the registration page
              <RegisterPage />
            }
          </Route> */}


          
          <Route
            exact
            path="/sender-info"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/" />
              :
              // Otherwise, show the registration page
              <SenderInfo />
            }
          </Route>

          <Route
            exact
            path="/card-info"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/" />
              :
              // Otherwise, show the registration page
              <PaymentInfo />
            }
          </Route>

          {/* If none of the other routes matched, we will show a 404. */}
          <Route>
            <h1>404 : PAGE NOT FOUND</h1>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
