const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated
} = require('../modules/authentication-middleware');


/**
 * GET route template
 */
// GET route to retrieve transaction by reference number
// router.get('/', (req, res) => {
//   // GET route code here
//   router.get("/sender/:id", (req, res) => {
//     const reference_number = req.body.reference_number;
//     const full_name = req.body.full_name;
//     let query = `select *
//                         from transactions
//                         where reference_number = '${reference_number}'`;
//     // How can I include the full name in the search result?
//     pool.query(query)
//       .then((results) => {
//         res.send(results.rows);
//       })
//       .catch((error) => {
//         console.log('GET route /sender/:id error', error);
//         res.sendStatus(500);
//       });
//   });
// });

/**
 * POST route template
 */
// Creation of new transaction, Create Route
router.post('/',rejectUnauthenticated,(req, res) => {
  // POST route code here
    const createReferenceNumber = () => Math.floor(Math.random() * 1000000000);
    const { firstName,middleName,lastName,address,phone,amount,receivingAmount,currencyID
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
  pool.query(queryText,[firstName,middleName,lastName,address,phone,amount,receivingAmount,createReferenceNumber(),req.user.id,currencyID])
    .then((response) => res.send(response.rows))
    .catch((err) => {
      console.log('post transaction ', err);
      res.sendStatus(500);
    })
});

// Post route to track transaction status
router.post('/tracking',(req, res) => {
  const { firstName,lastName,reference
    } = req.body
  let queryText = `SELECT full_name, sent_amount, receiving_amount, legal_first_name, 
  legal_last_name, receiving_method, reference_number, currency_name
  FROM transactions JOIN currency ON transactions.currency_id = currency.id WHERE
  legal_first_name = $1 AND legal_last_name = $2 AND reference_number  = $3
  `;
pool.query(queryText,[firstName,lastName,reference])
  .then((response) =>  res.send(response.rows))
  .catch((err) => {
    console.log('fetch tracking info ', err);
    res.sendStatus(500);
  })
});

/**
 * PUT routes
 */

// This for first Edit button - Updating Payment Method
// router.put("/updatePaymentMethod/:id", (req, res) => {
//   const transactionId = req.params.id;
//   let query = `update transactions
//     set country='${req.body.country}',
//     payment_option='${req.body.payment_option}',
//     receiving_method='${req.body.receiving_method}',
//     amount='${req.body.amount}'
//          where id = ${transactionId} RETURNING *`;
//   pool.query(query)
//     .then((results) => {
//       res.send(results.rows);
//     })
//     .catch((error) => {
//       console.log('/updatePaymentMethod/:id', error);
//       res.sendStatus(500);
//     })
// });

// second edit button
// router.put("/updateReceiverInformation/:id", (req, res) => {
//   const transactionId = req.params.id;
//   let query = `update transactions
// 					set legal_first_name='${req.body.legal_first_name}',
// 					legal_middle_name='${req.body.legal_middle_name}',
// 					legal_last_name='${req.body.legal_last_name}',
// 					second_last_name='${req.body.second_last_name}',
// 					address_1='${req.body.address_1}',
// 					address_2='${req.body.address_2}',
// 					phone='${req.body.phone}',
// 					where id = ${transactionId} RETURNING *`;
//   pool.query(query)
//     .then((results) => {
//       res.send(results.rows);
//     })
//     .catch((error) => {
//       console.log('/updateReceiverInformation/:id', error);
//       res.sendStatus(500);
//     })
// });

/**
 * DELETE route
 */

// Delete a transaction by Id - during user section
// router.delete("/:id", (req, res) => {
//   const transactionId = req.params.id;
//   let query = `delete
//         from transactions
//         where id = ${transactionId}`;
//   pool.query(query)
//     .then((results) => {
//       res.send(results.rows);
//     })
//     .catch((error) => {
//       console.log('DELETE /:id', error);
//       res.sendStatus(500);
//     })
// });

module.exports = router;
