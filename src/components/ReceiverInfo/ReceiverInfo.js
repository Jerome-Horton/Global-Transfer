import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import './ReceiverInfo.css';

import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';


function ReceiverPage() {

    let navigate = useHistory();
    const dispatch = useDispatch();

    const receiverInfo = useSelector(state => state.userInfo.receiverInfo)

    const [firstName, setFirstName] = useState(receiverInfo.firstName || "")
    const [middleName, setMiddleName] = useState(receiverInfo.middleName || "")
    const [lastName, setLastName] = useState(receiverInfo.lastName || "")
    const [phone, setPhone] = useState(receiverInfo.phone || "")
    const [address, setAddress] = useState(receiverInfo.address || "")



    return (

        <div >

            <Container className='white-container-sender' maxWidth="xl">
                <p className='sender-info-text'>Receiver Information</p>
                <Grid className='grid-sender' container spacing={2}>
                    <Grid item xs={12} md={6} >
                        <input className='sender-input-info'
                            value={firstName}
                            onChange={(e) => { setFirstName(e.target.value) }}

                            placeholder='Legal First Name' type="text" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <input className='sender-input-info'
                            value={middleName}
                            onChange={(e) => { setMiddleName(e.target.value) }}


                            placeholder='Legal Middle Name' type="text" />
                    </Grid>

                </Grid>
                <Grid className='grid-sender' container spacing={2}>
                    <Grid item xs={12} md={6} >
                        <input className='sender-input-info'
                            value={lastName}
                            onChange={(e) => { setLastName(e.target.value) }}


                            placeholder='Legal Last Name' type="text" />
                    </Grid>

                </Grid>
                <div className='center-text'>Additional Receiver Information</div>
                <Grid className='grid-sender' container spacing={2}>
                    <Grid item xs={12} md={6} >
                        <input className='sender-input-info'

                            value={address}
                            onChange={(e) => { setAddress(e.target.value) }}


                            placeholder='Address' type="text" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <input className='sender-input-info'

                            value={phone}
                            onChange={(e) => { setPhone(e.target.value) }}


                            placeholder='Phone Number' type="text" />
                    </Grid>

                </Grid>
                <Grid className='grid-sender' container spacing={2}>


                    <Grid item xs={12} md={6}>
                        <div className='receiver-btn-container'>
                            <Button className='sender-info-btn' onClick={() => PaymentInfo()} variant="contained">Next</Button>
                        </div>
                    </Grid>

                </Grid>

            </Container>
        </div>



    )
}

export default ReceiverPage;