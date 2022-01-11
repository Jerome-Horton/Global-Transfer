import React,{useEffect} from 'react';
import { useHistory } from 'react-router';
import {useSelector,useDispatch} from 'react-redux'

import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import './StatusPage.css'

function statusPage () {

const dispatch = useDispatch()
let navigate = useHistory();

const trackingInfo = useSelector(state => state.tracking)

useEffect(() => {
      
    return () => {
      dispatch({type: 'CLEAR_TRACKING_INFO'})
    }
  }, [])



    return (

        <div>



            <Container className='white-container-transfer' maxWidth="xl">
                <p className='transfer-status'>Transfer Status</p>
                <Grid justifyContent="around" className='transfer-status-grid' container spacing={2}>
                    <Grid item xs={12} sm={6} >
                        <h4 className='transfer-header'>Receiver Country:</h4>
                        <p className='transfer-text'>Liberia</p>
                    </Grid>

                    <Grid item xs={12} sm={6} >
                        <h4 className='transfer-header'>Amount:</h4>
                        <p className='transfer-text'>200.00 USD</p>
                    </Grid>

                </Grid>
                <Grid justifyContent="around" className='transfer-status-grid' container spacing={2}>
                    <Grid item xs={12} sm={6} >
                        <h4 className='transfer-header'>Receiver:</h4>
                        <p className='transfer-text'>Jerome Horton</p>
                    </Grid>

                    <Grid item xs={12} sm={6} >
                        <h4 className='transfer-header'>Receive Method:</h4>
                        <p className='transfer-text'>Cash Pickup</p>
                    </Grid>
                </Grid>

                <Grid justifyContent="around" className='transfer-status-grid' container spacing={2}>
                    <Grid item xs={12} sm={6} >
                        <h4 className='transfer-header'>Reference Number:</h4>
                        <p className='transfer-text'>3570941192</p>
                    </Grid>

                    <Grid item xs={12} sm={6} >

                        <Button className='home-btn' onClick={() => homeBtn()} variant="contained">Home</Button>

                    </Grid>

                </Grid>

            </Container>
        </div>

    )

}

export default statusPage;