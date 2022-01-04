import React from 'react';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

import Header from '../Header/Header';
import'./success.css'

// import { useNavigate } from 'react-router';


function SuccessPage (props) {

    // let navigate = useNavigate();

    // function returnHome() {
    //     navigate('/')
    //   }

    return (

        <div>
        
            <Header />

            <Container className='white-container' maxWidth="xl">
                <h1 className='success'>Success!</h1>
                <h1 className='complete'>Your Money Transfer Is <br /> Complete </h1>
                <h1 className='reference'>Reference Number: 3570941192 </h1>

                <Button className='return-btn' onClick={()=>returnHome()} variant="contained">Return Home</Button>

            </Container>
        </div>
    )
}

export default SuccessPage;