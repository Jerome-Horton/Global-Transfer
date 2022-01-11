import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

import './success.css'



function SuccessPage(props) {

    const referenceNumber = useSelector(state => state.success)
    let navigate = useHistory();
    const dispatch = useDispatch()



    function returnHome() {
        dispatch({ type: 'CLEAR_CURRENCY' })
        dispatch({ type: 'CLEAR_RECEIVER_INFO' })
        dispatch({ type: 'CLEAR_USER_INFO' })
        dispatch({ type: 'CLEAR_TRANSACTION' })
        dispatch({ type: 'CLEAR_REFERENCE_NUMBER' })
        navigate.push('/')
    }

    return (

        <div>

            <Container className='white-container' maxWidth="xl">
                <h1 className='success'>Success!</h1>
                <h1 className='complete'>Your Money Transfer Is <br /> Complete </h1>
                <h1 className='reference'>Reference Number: {referenceNumber} </h1>

                <Button className='return-btn' onClick={() => returnHome()} 
                variant="contained">Return Home</Button>

            </Container>
        </div>
    )
}

export default SuccessPage;