import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import './transactionHistory.css';

function transactionHistory(props) {

    const transaction = useSelector(store => store?.transactionHistory);
    // const receiver = useSelector(store => store.userInfo);
    const dispatch = useDispatch();


    // call that function in useEffect with empty 

    useEffect(() => {

        dispatch({ type: 'GET_TRANSACTIONS' });



    }, [])

    const deleteBtn = () => {

        dispatch({ type: 'GET_TRANSACTIONS' });
        dispatch({ type: 'DELETE_TRANSACTION' });


    }

    return (

        <div>

            <Container className='white-container-transfer' maxWidth="xl">

                <p className='transfer-status'>Transfer History</p>

                {transaction.length ? transaction.map((v, index) => {

                    return (
                        <Container key={index}>


                            <Grid justifyContent="around" className='transfer-status-grid' container spacing={2}>
                                {/* <Grid item xs={12} sm={6} >
                                    <h4 className='transfer-header'>Receiver Name:</h4>
                                    <p className='transfer-text'>{v.legal_first_name + " " + v.legal_last_name}</p>
                                </Grid> */}

                                <Grid justifyContent="around" className='transfer-status-grid' container spacing={2}>
                                    <Grid item xs={12} sm={6} >
                                        <h4 className='transfer-header'>Receiver Name:</h4>
                                        <p className='transfer-text'>{v.legal_first_name + " " + v.legal_last_name}</p>
                                    </Grid>

                                    <Grid item xs={12} sm={6} >
                                        <h4 className='transfer-header'>Receive Method:</h4>
                                        <p className='transfer-text'>{v.receiving_method}</p>
                                    </Grid>

                                    <Grid item xs={12} sm={6} >
                                        <h4 className='transfer-header'>Sent Amount:</h4>
                                        <p className='transfer-text'>{v.sent_amount} USD</p>
                                    </Grid>
                                    <Grid item xs={12} sm={6} >
                                        <h4 className='transfer-header'>Receiving Amount:</h4>
                                        <p className='transfer-text'>{v.receiving_amount} {v.currency_name}</p>
                                    </Grid>


                                </Grid>
                                
                                <button className='delete-btn' onClick={deleteBtn} >Delete</button>
                                
                            </Grid>
                        </Container>
                    )
                }) : ""}


            </Container>

        </div>


    );
}

export default transactionHistory;