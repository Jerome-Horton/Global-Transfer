const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated
} = require('../modules/authentication-middleware');


/**
 * GET route template
 */
router.get('/', rejectUnauthenticated, (req, res) => {
  console.log('req.user', req.user);
  let queryText;
  queryText = `select *
                FROM "transactions"
                WHERE "sender_id" = '${req.user.id}'
                `;
  pool.query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
});



router.post('/', rejectUnauthenticated, (req, res) => {
  // POST route code here
  const createReferenceNumber = () => Math.floor(Math.random() * 1000000000);
  const { firstName, middleName, lastName, address, phone, amount, receivingAmount, currencyID
  } = req.body
  let queryText = `insert into transactions (
    legal_first_name,
    legal_middle_name,
    legal_last_name,
    address,
    phone,
    sent_amount,
    receiving_amount,
    reference_number,
    sender_id,
    currency_id)
    values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10) RETURNING reference_number`;
  pool.query(queryText, [firstName, middleName, lastName, address, phone, amount, receivingAmount, createReferenceNumber(), req.user.id, currencyID])
    .then((response) => res.send(response.rows))
    .catch((err) => {
      console.log('post transaction ', err);
      res.sendStatus(500);
    })
});

// Post route to track transaction status
router.post('/tracking', (req, res) => {
  console.log(req.body)
  const { firstName, lastName, reference
  } = req.body
  let queryText = `SELECT full_name, sent_amount, receiving_amount, legal_first_name, 
  legal_last_name, receiving_method, reference_number, currency_name
  FROM transactions JOIN currency ON transactions.currency_id = currency.id WHERE
  legal_first_name = $1 AND legal_last_name = $2 AND reference_number  = $3
  `;
  pool.query(queryText, [firstName, lastName, reference])
    .then((response) => res.send(response.rows))
    .catch((err) => {
      console.log('fetch tracking info ', err);
      res.sendStatus(500);
    })
});

/**
 * DELETE route
 */
// Delete a transaction by Id
router.delete("/:id",rejectUnauthenticated, (req, res) => {
  console.log('req.params.id', req.params.id);
  let query = `delete
        from "transactions"
        where "id" = ${req.params.id}`;
  pool.query(query)
    .then((results) => {
      res.send(results.rows);
    })
    .catch((error) => {
      console.log('DELETE /:id', error);
      res.sendStatus(500);
    })
});

module.exports = router;
