import React from 'react';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Header from '../Header/Header';
import './FraudPage.css';
import { useNavigate } from 'react-router';

function FraudPage () {

    let navigate = useNavigate();
    
        function reviewSend() {
            navigate('/reviewPage')
    }

    return (

        <div >
                    <Header />
            <Container className='white-container-summary' maxWidth="xl">

                <p className='fraud-header'>Fraud Protection</p>
                <h6 className='almost-done'>Fraud Warning About Your Money Transfer</h6>
                <p className='fraud-text'>Keep your money safe. If any of the below apply, DO NOT SEND the money transfer. It’s a scam and someone is trying to steal your money. If you send money, it can be paid out quickly, and you may not be able to get a refund.</p>
                <h6 className='almost-done-header'>Never transfer money to a stranger. Know who you are dealing with. A money transfer is like cash.</h6>
                <h6 className='almost-done-header'>Never send money in the following situations:</h6>
                <p className='fraud-text'>To make a charity donation or to pay an internet merchant for supplies during a pandemic, natural disaster, or other crisis.<br />
                        To receive money (example: lottery winnings, a prize, job offer or loan).<br />
                        For a “secret shopper” opportunity or to repay an overpayment.<br />
                        To pay the IRS or the police, or to get out of a warrant.<br />
                        To buy a car, puppy, or another high-value or unique item, or for “escrow” on an apartment<br />
                </p>
                <h6 className='almost-done-header'>Never send money without checking out the story. Reach out to that friend or family member you heard is in need first.</h6>
                <h6 className='almost-done-header'>If it sounds too good to be true, it probably is.</h6>
                <p className='fraud-text'>Never give your transaction reference number to anyone other than the person you intend to receive the money. Fraudulent transactions may result in the loss of your money with no recourse.</p>

                <div className='fraud-btn-container'>
                    <Button className='fraud-btn' onClick={()=>reviewPage()} variant="contained">Review & Send</Button>
                </div>
    
            </Container>
        </div>

    )
}

export default FraudPage;