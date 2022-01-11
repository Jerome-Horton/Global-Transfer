import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router';
import './HomePage.css'


import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TextField from '@mui/material/TextField';
import TabPanel from '@mui/lab/TabPanel';







function homePage() {

    const [value, setValue] = React.useState('1');


    let navigate = useHistory();
    const dispatch = useDispatch()

    const currencyList = useSelector(state => state.currency)
    const transaction = useSelector(state => state.transaction)


    const [selectCountry, setSelectCountry] = useState(transaction.selectCountry || "")
    const [amount, setAmount] = useState(transaction.amount || "")
    const [reference, setReference] = useState("")
    const [fullName, setFullName] = useState("")

    useEffect(() => {
        dispatch({
            type: 'FETCH_CURRENCIES'
        })
    }, [])

    function estimateFees() {

        const index = currencyList.findIndex(currency => currency.id === selectCountry);

        const convertedValue = parseFloat(currencyList[index].exchange_rate) * amount

        const data = {
            amount: parseFloat(amount),
            selectCountry,
            selectCountryShortName: currencyList[index].short_name,
            convertedValue,
            conversionRate: currencyList[index].exchange_rate,
            currencyName: currencyList[index].currency_name,
            countryFullName: currencyList[index].full_name,
        }

        dispatch({
            type: 'MAKE_ESTIMATE',
            payload: data
        })
        navigate.push('/getstarted')
    }


function trackYourMoney() {

    const data = {
        reference, firstName: fullName.split(" ")[0],
        lastName: fullName.split(" ")[1]
    }
    dispatch({
        type: 'GET_TRANSFER_STATUS',
        payload: data
    })
    navigate.push('/transfer-status')

}

const handleChange = (event, newValue) => {
    setValue(newValue);
};

function sendNow() {
    navigate.push('/')
}

const countryName = () => {
    const id = currencyList.findIndex(currency => currency.id === selectCountry)
    return currencyList[id].full_name
}

return (
    <div >

        <Box sx={{ flexGrow: 1 }}>
            <Grid className='nav-grid-track' container spacing={2}>

                <Grid item xs={3} md={3} >
                    <h4>Money Transfer At Your Finger Tips</h4>
                    <h4>Send Money Now Starting For $0 Fee*</h4>
                    <a className="send-link" onClick={sendNow} >Send Now</a>
                </Grid>

                <Grid textAlign="center" item xs={3} md={7}>
                    <Container className='white-container-track' >
                        <Box sx={{ width: '100%', Typography: 'body1' }}>
                            <TabContext value={value}>
                                <Box  >
                                    <TabList onChange={handleChange}  >
                                        <Tab label="Rates & Fees" value="1" />
                                        <Tab label="Track & receive" value="2" />
                                    </TabList>
                                </Box>

                                <TabPanel value="1" className="tabs-each">
                                    <input className="input-field-1" placeholder='Send Amount'
                                        value={amount} onChange={(e) => { setAmount(e.target.value) }}
                                    /><span className='usd-name'>USD <img width="40px" src={USFlag} /></span>

                                    {/* <InputLabel id="demo-simple-select-label">Receiver Country</InputLabel> */}
                                    <Select
                                        value={selectCountry}
                                        displayEmpty
                                        // MenuProps={{ classes: { paper: classes.dropdownStyle } }}
                                        renderValue={
                                            selectCountry !== "" ?
                                                () => <div className="input-field render-large-value" >{countryName()}</div>
                                                :
                                                () => <div className="input-field render-value" >Receiver Country</div>
                                        }

                                        className="input-field"
                                        onChange={(e) => { setSelectCountry(e.target.value) }}
                                    >
                                        {
                                            currencyList.map(currency =>
                                                <MenuItem key={currency.id} value={currency.id}>{currency.full_name}</MenuItem>
                                            )
                                        }
                                    </Select>

                                    {/* <input className="input-field" placeholder='Receiver Country' /> */}

                                    <Button className='estimate-btn' onClick={() => estimateFees()} variant="contained"
                                        disabled={!amount && !selectCountry}> Estimate Fees</Button>
                                </TabPanel>

                                <TabPanel value="2" className="tabs-each">

                                    <TextField id="standard-basic" className="input-fields" label="Reference Number"
                                        onChange={(e) => { setReference(e.target.value) }}
                                        value={reference} variant="standard" />

                                    <TextField id="standard-basic" className="input-fields" label="Full Name" variant="standard"
                                        onChange={(e) => { setFullName(e.target.value) }} value={fullName} />

                                    <Button className='track-btn' onClick={trackYourMoney} variant="contained"
                                        disabled={!reference && !fullName}>Track Your Money</Button>
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

export default homePage;