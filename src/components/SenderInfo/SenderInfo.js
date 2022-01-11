import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import './SenderInfo.css'



function SenderInfo() {

    let navigate = useHistory();
    const dispatch = useDispatch()

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [firstName, setFirstName] = useState("")
    const [middleName, setMiddleName] = useState("")
    const [lastName, setLastName] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")

    // function handleClick() {
    //     navigate.push('/login')


        function paymentInfo() {
            const data = { username, password, firstName, middleName, lastName, phone, address }
            dispatch({
                type: 'SET_USER_INFO',
                payload: data
            })
            navigate.push('/card-info')
        }




        return (

            <div >

                <Header />

                <Container className='white-container-sender' maxWidth="xl">
                    <p className='sender-info-text'>Sender Information</p>
                    <Grid className='grid-sender' container spacing={2}>
                        <Grid item xs={12} md={6} >
                            <input className='sender-input-info'
                                value={username}
                                onChange={(e) => { setUsername(e.target.value) }}

                                placeholder='Set a Username' type="text" />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <input className='sender-input-info'
                                value={password}
                                onChange={(e) => { setPassword(e.target.value) }}

                                placeholder='Set a Password' type="password" />
                        </Grid>

                    </Grid>
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
                    <div className='center-text'>Additional Sender Information</div>
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
                        <Grid className='grid-sender' container spacing={2}></Grid>

                        <Grid item xs={12} md={6}>
                            <div className='sender-btn-container'>
                                <Button className='sender-info-btn' onClick={() => paymentInfo()} variant="contained">Next</Button>
                            </div>
                        </Grid>

                    </Grid>

                </Container>
            </div>
        );
    }

    export default SenderInfo;