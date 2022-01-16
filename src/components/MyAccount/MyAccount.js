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

import './MyAccount.css';

function myAccount(props) {

    const dispatch = useDispatch()
    let navigate = useHistory();


    const user = useSelector(store => store.user);
    const [card_type, setCardType] = useState(user?.card_type)
    const [card_title, setCardTitle] = useState(user?.card_title)
    const [card_number, setCardNumber] = useState(user?.card_number)
    const [cvv, setCvv] = useState("")
    const [billing_address, setBillingAddress] = useState(user?.billing_address)
    const [expiration, setExpiration] = useState(user?.expiration)
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
        setCvv("");
    }


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
                        <th>expiration </th>
                    </tr>
                    <tr>
                        <td>{user?.card_type}</td>
                        <td>{user?.card_title}</td>
                        <td>{user?.card_number}</td>
                        <td>{user?.cvv}</td>
                        <td>{user?.billing_address}</td>
                        <td>{user?.expiration}</td>
                    </tr>

                </table>
                <form onSubmit={updateInfo}>
                    <input value={card_type} onChange={(e) => setCardType(e.target.value)} />
                    <input value={card_title} onChange={e => setCardTitle(e.target.value)} />
                    <input value={card_number} onChange={e => setCardNumber(e.target.value)} />
                    <input value={cvv} onChange={e => setCvv(e.target.value)} />
                    <input value={billing_address} onChange={e => setBillingAddress(e.target.value)} />
                    <input value={expiration} onChange={e => setExpiration(e.target.value)} />
                    <button>Update </button>
                </form>
            </Container>

        </div>


    );
}

export default myAccount;