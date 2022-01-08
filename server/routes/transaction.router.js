const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// function for random reference number
const createReferenceNumber = () => Math.floor(Math.random() * 1000000000);

/**
 * GET route template
 */
// GET route to retrieve transaction by reference number
router.get('/', (req, res) => {
  // GET route code here
  router.get("/sender/:id", (req, res) => {
    const reference_number = req.body.reference_number;
    const full_name = req.body.full_name;
    let query = `select *
                        from transactions
                        where reference_number = '${reference_number}'`;
    // How can I include the full name in the search result?
    pool.query(query)
      .then((results) => {
        res.send(results.rows);
      })
      .catch((error) => {
        console.log('GET route /sender/:id error', error);
        res.sendStatus(500);
      });
  });
});

/**
 * POST route template
 */
// Creation of new transaction, Create Route
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

/**
 * PUT routes
 */

// This for first Edit button - Updating Payment Method
router.put("/updatePaymentMethod/:id", (req, res) => {
  const transactionId = req.params.id;
  let query = `update transactions
    set country='${req.body.country}',
    payment_option='${req.body.payment_option}',
    receiving_method='${req.body.receiving_method}',
    amount='${req.body.amount}'
         where id = ${transactionId} RETURNING *`;
  pool.query(query)
    .then((results) => {
      res.send(results.rows);
    })
    .catch((error) => {
      console.log('/updatePaymentMethod/:id', error);
      res.sendStatus(500);
    })
});

module.exports = router;
