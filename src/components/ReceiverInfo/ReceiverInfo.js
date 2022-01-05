import React from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import './ReceiverInfo.css'
import Header from '../Header/Header';

// import { useNavigate } from 'react-router';


function ReceiverPage() {

    function PaymentInfo() {
        // navigate('/paymentInfo')
    }

    return (

        <div >

            <Header />

            <Container className='white-container-receiver' maxWidth="xl">
                <p className='receiver-info-text'>Receiver Information</p>
                <Grid className='grid-receiver' container spacing={2}>
                    <Grid item xs={12} md={6} >
                        <input className='receiver-input-info' placeholder='Legal First Name' type="text" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <input className='receiver-input-info' placeholder='Legal Middle Name' type="text" />
                    </Grid>

                </Grid>
                <Grid className='grid-receiver' container spacing={2}>
                    <Grid item xs={12} md={6} >
                        <input className='receiver-input-info' placeholder='Legal Last Name' type="text" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <input className='receiver-input-info' placeholder='Second Last Name' type="text" />
                    </Grid>

                </Grid>
                <div className='center-text'>Additional Receiver Information</div>
                <Grid className='grid-receiver' container spacing={2}>
                    <Grid item xs={12} md={6} >
                        <input className='receiver-input-info' placeholder='Address' type="text" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <input className='receiver-input-info' placeholder='Address' type="text" />
                    </Grid>

                </Grid>
                <Grid className='grid-receiver' container spacing={2}>
                    <Grid item xs={12} md={6} >
                        <input className='receiver-input-info' placeholder='Phone Number' type="text" />
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <div className='receiver-btn-container'>
                            <Button className='receiver-info-btn' onClick={() => PaymentInfo()} variant="contained">Next</Button>
                        </div>
                    </Grid>

                </Grid>

            </Container>
        </div>



    )
}

export default ReceiverPage;