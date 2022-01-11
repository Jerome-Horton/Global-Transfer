import React from 'react';
import { useHistory } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import './Summary.css';

import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import swal from 'sweetalert2';
import Axios from 'axios';


function Summary() {

    const dispatch = useDispatch()
    let navigate = useHistory();

    const transaction = useSelector(state => state.transaction)
    const receiverInfo = useSelector(state => state.userInfo.receiverInfo)

    const transactionConfirmation = () => {

        const data = {
            firstName: receiverInfo.firstName,
            middleName: receiverInfo.middleName,
            lastName: receiverInfo.lastName,
            address: receiverInfo.address,
            phone: receiverInfo.phone,
            amount: transaction.amount,
            receivingAmount: transaction.convertedValue,
            currencyID: transaction.selectCountry
        }

        axios.post('/api/transaction', data).then(response => {
            dispatch({
                type: "SET_REFERENCE_NUMBER",
                payload: response.data[0].reference_number
            })
            navigate.push("/success")
        }
        ).catch(err => console.log(err))

    }

    const handleDelete = () => {

        swal({
            title: "Are you sure?",
            text: "You will lose all progress",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    dispatch({ type: 'CLEAR_CURRENCY' })
                    dispatch({ type: 'CLEAR_RECEIVER_INFO' })
                    dispatch({ type: 'CLEAR_USER_INFO' })
                    dispatch({ type: 'CLEAR_TRANSACTION' })
                    dispatch({ type: 'CLEAR_REFERENCE_NUMBER' })
                    swal("Deleted Successfully!", {
                        icon: "success",
                    });
                    navigate.push('/')
                } else {
                    swal("You can continue with the payment");
                }
            });
    }

    return (

        <div >

            <Container className='white-container-summary' maxWidth="xl">
                <p className='summary-text'>Summary</p>
                <h6 className='almost-done'>Almost Done! Review the information below and complete your transfer.</h6>
                <h5 className='rates-fees'>Rate & Fees <span className='edit-btn'>
                    <button onClick={() => navigate.push('/')}>Edit</button></span> </h5>
                <p className='conversion-rate'>{`${transaction.amount} USD = 
        ${transaction.convertedValue} ${transaction.currencyName} Exchange Rate: ${transaction.conversionRate} `}</p>

                <Grid className='summary-small-boxes' container spacing={2}>
                    <Grid item xs={3} md={3} >
                        <h4 className='small-box-header'>Receiver Country</h4>
                        <p className='small-box-text'>{transaction.countryFullName}</p>
                    </Grid>
                    <Grid item xs={3} md={3}>
                        <h4 className='small-box-header'>Amount</h4>
                        <p className='small-box-text'>{`${transaction.convertedValue} ${transaction.currencyName}`}</p>

                    </Grid>

                </Grid>
                <Grid className='summary-small-boxes' container spacing={2}>
                    <Grid item xs={3} md={3} >
                        <h4 className='small-box-header'>Fee</h4>
                        <p className='small-box-text'>$0.00</p>
                    </Grid>

                </Grid>

                <h5 className='rates-fees'>Receiver <span className='edit-btn'>
                    <button onClick={() => navigate.push('/receiver-info')}>Edit</button></span> </h5>
                <p className='conversion-rate'>Legal Name</p>
                <p className='conversion-rate'>{`${receiverInfo.firstName} ${receiverInfo.lastName}`}</p>

                <h5 className='rates-fees'>COST SUMMARY <span className='edit-btn'>
                    <button onClick={() => navigate.push('/getStarted')}>Edit</button></span> </h5>
                <Grid className='summary-small-boxes' container spacing={2}>
                    <Grid item xs={6} md={3} >
                        <h4 className='small-box-header'>Total Cost:</h4>
                        <p className='small-box-text'>{`${transaction.amount} USD`}</p><br />
                        <h4 className='small-box-header'>Total Receive Amount:</h4>
                        <p className='small-box-text'>{`${transaction.convertedValue} ${transaction.currencyName}`}</p>
                    </Grid>

                    <Grid item xs={6} md={4} >
                        <Button className='summary-btn' variant="contained" onClick={handleDelete} >
                            Delete
                        </Button>

                    </Grid>
                    <Grid item xs={12} md={4} >
                        <Button className='summary-btn' onClick={() => transactionConfirmation()} variant="contained">
                            Next
                        </Button>

                    </Grid>

                </Grid>

            </Container>
        </div>

    )
}

export default Summary;