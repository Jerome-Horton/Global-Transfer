import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import './Login.css';
import Grid from '@mui/material/Grid';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';




function LogIn(props) {

    // let navigate = useHistory();
    const dispatch = useDispatch();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function LoginBtn() {
        if (username && password) {
            dispatch({
                type: 'LOGIN',
                payload: {
                    username: username,
                    password: password,
                },
            });
        }
    }; // end login

    return (

        <div >

            <Container className='white-container-login' maxWidth="xl">
                <h1 className='complete-login'>Log into Your <br /> GlobalTransfer Profile </h1>
                <input className="input-field-login" placeholder='USERNAME' type="text"
                    value={username} onChange={(e) => { setUsername(e.target.value) }} />
                <input className="input-field-login" placeholder='PASSWORD' type="password"
                    value={password} onChange={(e) => { setPassword(e.target.value) }}
                />
                <div className='forget-container'>
                    <p className="forget-link-text">Don't have an account?</p>
                    <Button className='signUp-btn' component={Link} to="/sender-info" variant="contained">
                        Sign Up
                    </Button>

                </div>
                <Button className='log-btn' onClick={LoginBtn} variant="contained">
                    Log In
                </Button>

            </Container>
        </div>

    )

}

export default LogIn;