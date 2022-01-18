import React from 'react';
import Container from '@mui/material/Container';
import './AboutPage.css';


// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <Container className='white-container-transfer' maxWidth="xl">

      <p className='transfer-status'>Our Purpose</p>

      <div>

        <p>International money transfer is an essential source of family
            and national income and is one of the most significant external
            financing sources.</p>
            
        <p><b>Global Transfer</b> aims to improve the remission of money internationally
            by providing an unmatched user experience for people worldwide
            to remit money to their loved ones and business partners securely and instantly.
        </p>
            
        <p>Connecting you to every part of the world for <b>$0.00!</b></p>
      </div>
      </Container>

  );
}

export default AboutPage;
