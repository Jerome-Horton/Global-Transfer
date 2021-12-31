import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import DatePicker from '@mui/lab/DatePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Button from '@mui/material/Button';


function payment () {

        const [expDate, setExpDate] = useState(null);

    return (

        <div>
            <Grid container item lg={3} sm={6} xs={12} >

                <Box style={{ marginLeft: "15em", marginTop: "0.5em" }}
                    sx={{
                        display: 'flex', justifyContent: 'center', alignItems: 'center',
                        '& > :not(style)': {
                            m: 1,
                            width: '65em',
                            height: 500,
                        },
                    }}
                >
                    <Paper variant="outlined" lg={12}>
                        <Grid container style={{ marginTop: "2em", marginLeft: "3em" }} lg={12}>
                            <Grid item style={{ marginLeft: '23em' }} xs={12} >
                                <Typography variant="h6" > Add Card Information</Typography>
                            </Grid>



                        </Grid>

                        <Grid container style={{ marginTop: "2em", marginLeft: "10em" }} lg={12}>
                            <Grid item lg={6} xs={12}>
                                <TextField id="standard-basic" label="Card Number" variant="standard" />
                            </Grid>
                            <Grid item lg={6} xs={12}>
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <DatePicker

                                        value={expDate}
                                        onChange={(e) => { setExpDate(e) }}
                                        renderInput={(params) => <TextField {...params} required variant="standard" id="exp-date" label="Enter Expiry Date" />}
                                    />
                                </LocalizationProvider>
                            </Grid>



                        </Grid>
                        <Grid container style={{ marginTop: "2em", marginLeft: "10em" }} lg={12} >
                            <Grid item lg={6} xs={12} >
                                <TextField id="standard-basic" label="Billing Address" variant="standard" />
                            </Grid>
                            <Grid item lg={6} xs={12}>
                                <TextField id="standard-basic" label="CVV" variant="standard" />
                            </Grid>



                        </Grid>
                        <Grid container style={{ marginTop: "2em", marginLeft: "3em" }} lg={12}>
                            <Grid item style={{ marginLeft: '23em' }} lg={6} xs={12}>
                                <Button> <Typography variant="h3"  >Save Card</Typography></Button>
                            </Grid>



                        </Grid>

                    </Paper>

                </Box>


            </Grid>

        
        </div>
    )
}

export default payment;