import React, { useState } from 'react';
// import { useHistory } from 'react-router';
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
    // let navigate = useHistory();


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
                        {/* billing address not showing up */}
                        <td>{user?.billing_address}</td> 
                        <td>{user?.expiration}</td>
                    </tr>

                </table>
                <form onSubmit={updateInfo}>
                    <input value={card_type} onChange={(e) => setCardType(e.target.value)} placeholder='Card Type'/>
                    <input value={card_title} onChange={e => setCardTitle(e.target.value)} placeholder='Card Title'/>
                    <input value={card_number} onChange={e => setCardNumber(e.target.value)} placeholder='Card Number'/>
                    <input value={cvv} onChange={e => setCvv(e.target.value)} placeholder='CVV'/>
                    <input value={billing_address} onChange={e => setBillingAddress(e.target.value)} placeholder='Billing Address'/>
                    <input value={expiration} onChange={e => setExpiration(e.target.value)} placeholder='EXP'/>
                    <button>Update </button>
                </form>
                
            </Container>

        </div>


    );
}

export default myAccount;