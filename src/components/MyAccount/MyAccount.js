import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Grid } from '@mui/material';
import Container from '@mui/material/Container';

import './MyAccount.css';

function myAccount(props) {

    const dispatch = useDispatch()



    const user = useSelector(store => store.user);
    const [card_type, setCardType] = useState("")
    const [card_title, setCardTitle] = useState("")
    const [card_number, setCardNumber] = useState("")
    const [cvv, setCvv] = useState("")
    const [billing_address, setBillingAddress] = useState("")
    const [expiration, setExpiration] = useState("")
    const [change, setChange] = useState(false);



    const updateInfo = (e) => {

        e.preventDefault()
        console.log('payload', card_type, card_title, card_number, cvv, billing_address, expiration)
        dispatch({
            type: "EDIT_PAYMENT",
            id: user.id,
            payload: {
                card_type,
                card_title,
                card_number,
                cvv,
                billing_address,
                expiration: expiration,
            }
        })
        dispatch({
            type: "FETCH_USER"
        })
        setCardType(""),
            setCardTitle(""),
            setCardNumber(""),
            setCvv(""),
            setBillingAddress(""),
            setExpiration("");
    }


    return (

        <div>

            <Container className='white-container-transfer' maxWidth="xl">

                <p className='transfer-status'>Payment Information</p>

                <table className='card'>
                    <tbody>
                        <tr>
                            <th>Card Type</th>
                            <th>Name</th>
                            <th>Card Number</th>
                            <th>CVV</th>
                            <th>Billing Address </th>
                            <th>expiration </th>
                        </tr>
                        <tr>
                            <td>{user?.card_type}</td>
                            <td>{user?.card_title}</td>
                            <td>{user?.card_number}</td>
                            <td>{user?.cvv}</td>
                            {/* billing address not showing up */}
                            <td>{user?.billing_address}</td>
                            <td>{user?.expiration}</td>
                        </tr>
                    </tbody>
                </table>
                <Grid >
                    <form onSubmit={updateInfo}>
                        <div style={{ margin: 0, padding: 0 }}>


                            <input className='input' value={card_type} onChange={(e) => setCardType(e.target.value)} placeholder='Card Type' />
                            <input className='input' value={card_title} onChange={e => setCardTitle(e.target.value)} placeholder='Name On Card' />
                            <input className='input' value={card_number} onChange={e => setCardNumber(e.target.value)} placeholder='Card Number' />
                            <input className='input' value={cvv} onChange={e => setCvv(e.target.value)} placeholder='CVV' />
                            <input className='input' value={billing_address} onChange={e => setBillingAddress(e.target.value)} placeholder='Billing Address' />
                            <input className='input' value={expiration} onChange={e => setExpiration(e.target.value)} placeholder='Expiration Date' />
                        </div>

                        <div>

                            <button className='button'>Update </button>
                        </div>

                    </form>
                </Grid>
            </Container>

        </div>


    );
}

export default myAccount;