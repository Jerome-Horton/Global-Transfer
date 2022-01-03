import React from 'react';
// import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
// import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';


function SuccessPage (props) {

    return (

        <div>
        
            <Container className='white-container' maxWidth="xl">
                <h1 className='success'>Success!</h1>
                <h1 className='complete'>Your Money Transfer Is <br /> Complete </h1>
                <h1 className='reference'>Reference Number: 3570941192 </h1>

                <Button className='return-btn' variant="contained">
                    Return Home   
                </Button>

            </Container>
        </div>
    )
}

export default SuccessPage;