import React, { useState } from 'react';
import Header from '../Header/Header';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
// import DatePicker from '@mui/lab/DatePicker';
// import AdapterDateFns from '@mui/lab/AdapterDateFns';
// import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Button from '@mui/material/Button';

// import { useNavigate } from 'react-router';




function payment() {

    //     const [expDate, setExpDate] = useState(null);

    //     <Grid item lg={6} xs={12}>
    //     <LocalizationProvider dateAdapter={AdapterDateFns}>
    //         <DatePicker

    //             value={expDate}
    //             onChange={(e) => { setExpDate(e) }}
    //             renderInput={(params) => <TextField {...params} required variant="standard" id="exp-date" label="Enter Expiry Date" />}
    //         />
    //     </LocalizationProvider>
    // </Grid>

    //navigation to fraudPage
    // function fraudPage() {
    //     navigate('/fraudPage')
    //   }

    return (

        <div>

            <Header />

            <Container className='white-container-card' maxWidth="xl">
                <p className='sender-info-text'>Payment Information</p>
                <div className='center-text-card'>Add Your Card Information</div>

                <Grid className='grid-card' container spacing={2}>
                    <Grid item xs={12} md={6} >
                        <input className='card-input-info' placeholder='Card Number' type="text" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <input className='card-input-info' placeholder='EXPIRATION MM/YY' type="text" />
                    </Grid>

                </Grid>
                <Grid className='grid-card' container spacing={2}>
                    <Grid item xs={12} md={6} >
                        <input className='card-input-info' placeholder='Billing Address' type="text" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <input className='card-input-info' placeholder='CVV' type="text" />
                    </Grid>

                </Grid>
                <Grid className='grid-card' container spacing={2}>
                    <Grid item xs={12} md={6} >
                        <input className='card-input-info' placeholder='Billing Address' type="text" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <input className='card-input-info' placeholder='Phone Number' type="text" />
                    </Grid>

                </Grid>
                <Grid className='grid-card' container spacing={2}>
                    <Grid item xs={12} md={12}>
                        <div className='sender-btn-container'>

                            <Button className='card-info-btn' onClick={() => fraudPage()} variant="contained">Save Card</Button>
                        </div>
                    </Grid>

                </Grid>

            </Container>

        </div>
    )
}

export default payment;