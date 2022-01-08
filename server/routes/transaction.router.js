const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// function for random reference number
const createReferenceNumber = () => Math.floor(Math.random() * 1000000000);

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
  let reference_number = createReferenceNumber();
  let query = `insert into transactions (sender_id,
              legal_first_name,
              legal_middle_name,
              legal_last_name,
              second_last_name,
              address_1,
              address_2,
              phone,
              amount,
              country,
              payment_option,
              receiving_method,
              reference_number,
              date)
  values ('${req.body.senderId}',
              '${req.body.legal_first_name}',
              '${req.body.legal_middle_name}',
              '${req.body.legal_last_name}',
              '${req.body.second_last_name}',
              '${req.body.address_1}',
              '${req.body.address_2}',
              '${req.body.phone}',
              '${req.body.amount}',
              '${req.body.country}',
              '${req.body.payment_option}',
              '${req.body.receiving_method}',
              '${reference_number}',
              '${req.body.date}') RETURNING *`;
  pool.query(query)
    .then((dbRes) => {
      console.log('CREATE Transaction Successful', dbRes);
      res.sendStatus(201);
    })
    .catch((dbErr) => {
      console.log('INSERT database error', dbErr);
      res.sendStatus(500);
    });
});

module.exports = router;
