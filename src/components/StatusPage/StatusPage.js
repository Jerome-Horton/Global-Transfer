import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import { useSelector, useDispatch } from 'react-redux'

import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import './StatusPage.css'

function statusPage(props) {

    const dispatch = useDispatch()
    let navigate = useHistory();

    const trackingInfo = useSelector(state => state.tracking)

    useEffect(() => {

        return () => {
            dispatch({ type: 'CLEAR_TRACKING_INFO' })
        }
    }, [])

    function homeBtn() {
        dispatch({ type: 'CLEAR_TRACKING_INFO' })
        navigate.push('/')
    }

    return (

        <div>



            <Container className='white-container-transfer' maxWidth="xl">
                <p className='transfer-status'>Transfer Status</p>

                {trackingInfo.legal_first_name ?
                    <>
                        <Grid justifyContent="around" className='transfer-status-grid' container spacing={2}>
                            <Grid item xs={12} sm={6} >
                                <h4 className='transfer-header'>Receiver Country:</h4>
                                <p className='transfer-text'>{trackingInfo.full_name}</p>
                            </Grid>

                            <Grid item xs={12} sm={6} >
                                <h4 className='transfer-header'>Sent Amount:</h4>
                                <p className='transfer-text'>{trackingInfo.sent_amount} USD</p>
                            </Grid>
                            <Grid item xs={12} sm={6} >
                                <h4 className='transfer-header'>Receiving Amount:</h4>
                                <p className='transfer-text'>{trackingInfo.receiving_amount} {trackingInfo.currency_name}</p>
                            </Grid>

                        </Grid>
                        <Grid justifyContent="around" className='transfer-status-grid' container spacing={2}>
                            <Grid item xs={12} sm={6} >
                                <h4 className='transfer-header'>Receiver:</h4>
                                <p className='transfer-text'>{trackingInfo.legal_first_name + " " +
                                    trackingInfo.legal_last_name
                                }</p>
                            </Grid>

                            <Grid item xs={12} sm={6} >
                                <h4 className='transfer-header'>Receive Method:</h4>
                                <p className='transfer-text'>{trackingInfo.receiving_method}</p>
                            </Grid>

                        </Grid>
                        <Grid justifyContent="around" className='transfer-status-grid' container spacing={2}>
                            <Grid item xs={12} sm={6} >
                                <h4 className='transfer-header'>Reference Number:</h4>
                                <p className='transfer-text'>{trackingInfo.reference_number}</p>
                            </Grid>
                        </Grid>
                    </> :
                    <p className='transfer-status'>Not Found</p>
                }

                <Grid item xs={12} sm={6} >

                    <Button className='home-btn' onClick={() => homeBtn()} variant="contained">Home</Button>

                </Grid>

                {/* </Grid> */}

            </Container>
        </div>

    )

}

export default statusPage;