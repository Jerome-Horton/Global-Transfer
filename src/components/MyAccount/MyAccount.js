import React, { useEffect } from 'react';
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

import './MyAccount.css';

function myAccount(props) {

    const dispatch = useDispatch()
    let navigate = useHistory();
    const payment = useSelector((store) => store.updatePaymentInformation);

    // useEffect(() => {
    //     dispatch({
    //       type:
    //     });
    //    
    // }

    // function handleEdit() {
    //     // dispatch({ type: '' })
    //     // navigate.push('')
    // }

     // function handleUpdate() {
    //     // dispatch({ type: '' })
    //     // navigate.push()
    // }

    return (

        <div>

            <Container className='white-container-transfer' maxWidth="xl">

                <p className='transfer-status'>Payment Information</p>

                <table>
                    <tr>
                        <th>Card Type</th>
                        <th>Card Title</th>
                        <th>Card Number</th>
                        <th>CVV</th>
                        <th>Billing Address </th>
                    </tr>
                    <tr>
                        <td>Ex: Visa</td>
                        <td>Maria Anders</td>
                        <td>7427474884784</td>
                        <td>233</td>
                        <td>123 Moment Street</td>
                        
                    </tr>
                    
                </table>
            
            </Container>
    
        </div>
    

);
}

export default myAccount;