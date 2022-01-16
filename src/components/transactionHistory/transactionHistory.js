import React, { useEffect,useState } from 'react';
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
    const receiver = useSelector(store => store.userInfo);
    const dispatch = useDispatch();



    // make function to dispatch fetch transaction history
    // const getHistory = () =>  {
    //     dispatch({ type: 'FETCH_USER' });

    // }

console.log("transaction",transaction);
    // call that function in useEffect with empty 
    
    useEffect(()=>{
           
              dispatch({ type: 'GET_TRANSACTIONS' });
            
    },[])

    // "legal_first_name",
    // "legal_middle_name",
    // "legal_last_name",
    // "sent_amount",
    // "receiving_amount",
    // "payment_method" ,
    // "receiving_method" ,
    // "reference_number",
    // "date" DATE   NOW(),
    // "sender_id"  ,
    // "currency_id" ,


    return (

        <div>

            <Container className='white-container-transfer' maxWidth="xl">

                <p className='transfer-status'>Transactions</p>
                
                {transaction.length ? transaction?.map((v,index)=>{
                    console.log('v',v)
                    return(
                    <Container key={index}>

                    <Grid justifyContent="around" className='transfer-status-grid' container spacing={2}>
                                <Grid item xs={12} sm={6} >
                    <p>Receiver Name: {v.legal_first_name + " " +
                                        v.legal_last_name} </p>
                        </Grid>
                    </Grid>    
                                </Container>
                   
                    )    
                }) :""}


                </Container>
    
    </div>


);
}

export default transactionHistory;