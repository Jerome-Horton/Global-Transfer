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

    // create a reducer to get the transaction history and a put route to update it.

    // useEffect(() => {

    //     // return () => {
    //     //     dispatch({ type: 'CLEAR_TRACKING_INFO' })
    //     // }
    // }, []);

    // function homeBtn() {
    //     // dispatch({ type: 'CLEAR_TRACKING_INFO' })
    //     // navigate.push('/')
    // }

    return (

        <div>
{/* 
            <Container className='white-container-transfer' maxWidth="xl">
                <p className='transfer-status'>Contact Information</p>
            <Grid>
                <table>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Middle Name</th>
                        <th>Country</th>
                    </tr>
                    <tr>
                        <td>Alfreds Futterkiste</td>
                        <td>Maria Anders</td>
                        <td>Germany</td>
                    </tr>
                    <tr>
                        <td>Centro comercial Moctezuma</td>
                        <td>Francisco Chang</td>
                        <td>Mexico</td>
                    </tr>
                    <tr>
                        <td>Ernst Handel</td>
                        <td>Roland Mendel</td>
                        <td>Austria</td>
                    </tr>
                    <tr>
                        <td>Island Trading</td>
                        <td>Helen Bennett</td>
                        <td>UK</td>
                    </tr>
                    <tr>
                        <td>Laughing Bacchus Winecellars</td>
                        <td>Yoshi Tannamuri</td>
                        <td>Canada</td>
                    </tr>
                    <tr>
                        <td>Magazzini Alimentari Riuniti</td>
                        <td>Giovanni Rovelli</td>
                        <td>Italy</td>
                    </tr>
                    
                </table>    */}

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