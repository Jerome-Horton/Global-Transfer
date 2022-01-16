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

import './transactionHistory.css';

function transactionHistory(props) {

    // make function to dispatch fetch transaction history



    // call that function in useEffect with empty 
    
    useEffect(()=>{

    },[])


    return (

        <div>

            <Container className='white-container-transfer' maxWidth="xl">

                <p className='transfer-status'>Payment Information</p>
                // map the result

                </Container>
    
    </div>


);
}

export default transactionHistory;