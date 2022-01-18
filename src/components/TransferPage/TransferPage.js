import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router';
import './TransferPage.css';


import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { Link } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TextField from '@mui/material/TextField';
import TabPanel from '@mui/lab/TabPanel';
import USFlag from "../../assets/images/flag.png"
// import LBDFlag from "../../assets/images/lbdflag.png"
// import canFlag from '../../assets/images/can.png'
import moment from 'moment';



function Started(props) {

    let navigate = useHistory();
    const dispatch = useDispatch()

    const transaction = useSelector(state => state.transaction)
    const user = useSelector(state => state.user)

    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    function trackYourMoney() {
        navigate.push('/transfer-status')
    }

    function getStarted() {
        if (!user.id) {
            navigate.push('/login')
        }
        else {
            navigate.push('/receiver-info')
        }
    }



    const onChangeTransactionAmount = (e) => {


        const totalAmount = e.target.value
        const convertedValue = totalAmount * transaction.conversionRate

        dispatch({
            type: 'CHANGE_TRANSACTION_AMOUNT',
            payload: { totalAmount, convertedValue }
        })


    }

    const onChangeConvertedAmount = (e) => {


        const convertedValue = e.target.value
        const totalAmount = convertedValue / transaction.conversionRate


        dispatch({
            type: 'CHANGE_TRANSACTION_AMOUNT',
            payload: { convertedValue, totalAmount }
        })

    }

    return (
        <div >

            <Box sx={{ flexGrow: 1 }}>
                <Grid className='nav-grid-track' container spacing={2}>
                    <Grid item sm={7} md={3} >
                        <h4>Money Transfer At Your Finger Tips</h4>
                        <h4>Send Money Now Starting At $0 Fee*</h4>
                        <Link className="send-link">Send Now</Link>
                    </Grid>
                    <Grid textAlign="center" item sm={12} md={7}>
                        <Container className='white-container-track' >
                            <Box sx={{ width: '100%', typography: 'body1' }}>
                                <TabContext value={value}>
                                    <Box  >
                                        <TabList onChange={handleChange} >
                                            <Tab label="Rates & Fees" value="1" />
                                            <Tab label="Track & Receive" value="2" />
                                        </TabList>
                                    </Box>
                                    <TabPanel value="1" className="tabs-each">

                                        <Box sx={{ flexGrow: 1 }}>
                                            <Grid className='nav-grid' container spacing={2}>
                                                <Grid item xs={6} md={6} >

                                                    <input className='two-inputs' value={transaction.amount} onChange={onChangeTransactionAmount}
                                                    /><span className='usd-name-exchange'>USD <img width="30px" src={USFlag} /></span>
                                                    <div className='radio-payment'>
                                                        Payment Option
                                                    </div>
                                                    <RadioGroup
                                                        aria-label="sending"
                                                        defaultValue="debit"
                                                        name="radio-buttons-group"

                                                    >
                                                        <FormControlLabel style={{ color: "black" }} value="credit" control={<Radio />} label="Credit Card " />
                                                        <FormControlLabel style={{ color: "black" }} value="debit" control={<Radio />} label="Debit Card" />
                                                        {/* <FormControlLabel style={{ color: "black" }} value="bank" control={<Radio />} label=" Bank Account " /> */}
                                                    </RadioGroup>


                                                </Grid>
                                                <Grid item xs={6} md={6}>

                                                    <input className='two-inputs' value={transaction.convertedValue}
                                                        onChange={onChangeConvertedAmount} />
                                                    <span className='usd-name-exchange'> {transaction.selectCountryShortName?.toUpperCase()}
                                                        <img width="30px" src={`/images/${transaction.selectCountryShortName}.png`}
                                                            style={{ verticalAlign: "top", marginLeft: "0.5rem" }} /></span>

                                                    <div className='radio-payment'>Select Receiving Method</div>

                                                    <RadioGroup
                                                        aria-label="receiving"
                                                        defaultValue="pickup"
                                                        name="radio-buttons-group"
                                                    >
                                                        <FormControlLabel style={{ color: "black" }} value="pickup" control={<Radio />} label="Cash Pickup" />
                                                        <FormControlLabel style={{ color: "black" }} value="wallet" control={<Radio />} label="Mobile Wallet" />
                                                        <p className='fee'>Transfer Fee: $0.00 </p>
                                                    </RadioGroup>
                                                </Grid>

                                            </Grid>
                                            <p className='money-note'>Money Available by: {moment().format('MMMM Do YYYY')} </p>
                                            <Button className='get-started-btn' onClick={() => getStarted()} variant="contained">
                                                {user.id ? "Get Started" : "Sign Up/Login to get started"}
                                            </Button>

                                        </Box>

                                    </TabPanel>
                                    <TabPanel value="2" className="tabs-each">
                                        <TextField id="standard-basic" className="input-fields" label="Reference Number" variant="standard" />
                                        <TextField id="standard-basic" className="input-fields" label="Full Name" variant="standard" />
                                        <Button className='track-btn' onClick={() => trackYourMoney()} variant="contained">
                                            Track Your Money
                                        </Button>
                                    </TabPanel>
                                </TabContext>
                            </Box>
                        </Container>
                    </Grid>

                </Grid>
            </Box>

        </div>
    );
}

export default Started;