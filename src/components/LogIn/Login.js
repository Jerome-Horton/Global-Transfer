import React from 'react';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

function Login () {

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
                <Button className='log-btn'  variant="contained">
                Log In
                </Button>

            </Container>
        </div>

    )

}