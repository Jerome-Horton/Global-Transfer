import React from 'react';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import './Login.css';
import Header from '../Header/Header';
import { useNavigate } from 'react-router';




function Login () {

        let navigate = useNavigate();


            function LoginBtn() {
      navigate('/senderInfo')
    }

// need to create a function for signUp button to for a user to sign up.


    return (

        <div >
            <Header />
            <Container className='white-container-login' maxWidth="xl">
                <h1 className='complete-login'>Log into Your <br /> GlobalTranfer Profile </h1>
                <input className="input-field-login" placeholder='EMAIL ADDRESS' type="email" />
                <input className="input-field-login" placeholder='PASSWORD' type="password" />
                <div className='forget-container'>

                    <a href="" className="forget-link">
                        Forgot Password?
                    </a>
                    <p className="forget-link-text">Don't have an account?

                        <a href="" className="forget-link-text">
                            Sign Up
                        </a>
                    </p>
                </div>
                <Button className='log-btn' onClick={()=>LoginBtn()} variant="contained">
                Log In
                </Button>

            </Container>
        </div>

    )

}