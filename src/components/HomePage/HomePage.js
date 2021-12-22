import React, { useState } from 'react';
import { useHistory, useDispatch } from 'react-router-dom';
import './HomePage.css';

// CUSTOM COMPONENTS
// import HomePageForm from '../HomePageForm/HomePageForm';

function HomePage() {

  const [heading, setHeading] = useState('Welcome');



  return (
    <div className="container">
      <h2>{heading}</h2>

      <div className="grid">
        <div className="grid-col grid-col_8">
          <p>
            Money Transfer At your Finger Tips.
          </p>

          <p>
            Send Money Now Starting At $0.00 Transfer Fee
          </p>

          <p>
          {/* Make Send Now a hyper Link and navigate it to the login page. 
              Make the letters bold and underline it.
           */}
            Send Now
          </p>
        </div>
        <div className="grid-col grid-col_4">
          <HomePageForm />
        </div>
      </div>
    </div>

  )
}

export default HomePage;
