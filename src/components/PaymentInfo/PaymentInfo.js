import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import './paymentInfo.css'

import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';



function cardInfo(props) {

    const dispatch = useDispatch()

    const userInfo = useSelector(state => state.userInfo.senderInfo)

    const [cardType, setCardType] = useState("")
    const [cardNumber, setCardNumber] = useState("")

    const [cardTitle, setCardTitle] = useState("")

    const [cvv, setCvv] = useState("")

    const [billingAddress, setBillingAddress] = useState("")

    const [expiration, setExpiration] = useState("")


    function saveInfo() {
        const data = {
            ...userInfo, cardType, cardNumber, cardTitle, cvv, billingAddress, expiration
        }

        console.log(data)
        dispatch({
            type: 'REGISTER',
            payload: data
        })

        // navigate.push('/summary')
    }

    return (

        <div>



            <Container className='white-container-card' maxWidth="xl">
                <p className='sender-info-text'>Payment Information</p>
                <div className='center-text-card'>Add Your Card Information</div>

                <Grid className='grid-card' container spacing={2}>
                    <Grid item xs={12} md={6} >
                        <input className='card-input-info' placeholder='Card Number'
                            onChange={(e) => { setCardNumber(e.target.value) }}
                            value={cardNumber}
                            type="text" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <input className='card-input-info'
                            onChange={(e) => { setExpiration(e.target.value) }}
                            value={expiration}
                            placeholder='EXPIRATION MM/YY' type="text" />
                    </Grid>

                </Grid>
                <Grid className='grid-card' container spacing={2}>
                    <Grid item xs={12} md={6} >
                        <input className='card-input-info'
                            onChange={(e) => { setBillingAddress(e.target.value) }}
                            value={billingAddress}
                            placeholder='Billing Address' type="text" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <input className='card-input-info'
                            onChange={(e) => { setCvv(e.target.value) }}
                            value={cvv}
                            placeholder='CVV' type="text" />
                    </Grid>

                </Grid>
                <Grid className='grid-card' container spacing={2}>
                    <Grid item xs={12} md={6} >
                        <input className='card-input-info'
                            onChange={(e) => { setCardType(e.target.value) }}
                            value={cardType}
                            placeholder='Card Type' type="text" />
                    </Grid>
                    <Grid item xs={12} md={6} >
                        <input className='card-input-info'
                            onChange={(e) => { setCardTitle(e.target.value) }}
                            value={cardTitle}
                            placeholder='Name on Card' type="text" />
                    </Grid>
                </Grid>
                <Grid className='grid-card' container spacing={2}>
                    <Grid item xs={12} md={12}>
                        <div className='sender-btn-container'>

                            <Button className='card-info-btn' onClick={saveInfo} variant="contained">
                                Save Card and Sign Up</Button>
                        </div>
                    </Grid>

                </Grid>

            </Container>

        </div>
    )
}

export default cardInfo;