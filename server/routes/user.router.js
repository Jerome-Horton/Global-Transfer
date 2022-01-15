const express = require('express');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();

// Handles Ajax request for user information if user is authenticated
router.get('/', rejectUnauthenticated, (req, res) => {
  // Send back user object from the session (previously queried from the database)
  res.send(req.user);
});

// Handles POST request with new user data
// The only thing different from this and every other post we've seen
// is that the password gets encrypted before being inserted
router.post('/register', (req, res) => {

  const { username, address, phone, cardType, cardNumber, cardTitle, expiration, cvv, billingAddress,
    firstName, lastName, middleName
  } = req.body

  const password = encryptLib.encryptPassword(req.body.password);

  const queryText = `INSERT INTO "user" (username, password, address, phone, card_type, card_number, card_title,
                    cvv, billing_address, expiration,firstName,middleName,lastName)
                    values ( $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)`;

  pool
    .query(queryText, [username, password, address, phone, cardType, cardNumber, cardTitle, cvv, billingAddress, expiration, firstName, middleName, lastName])
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.log('User registration failed: ', err);
      res.sendStatus(500);
    });
});

// Handles login form authenticate/login POST
// userStrategy.authenticate('local') is middleware that we run on this route
// this middleware will run our POST if successful
// this middleware will send a 404 if not successful
router.post('/login', userStrategy.authenticate('local'), (req, res) => {
  res.sendStatus(200);
});

// clear all server session information about this user
router.post('/logout', (req, res) => {
  // Use passport's built-in method to log out the user
  req.logout();
  res.sendStatus(200);
});

/**
 * PUT routes
 */

router.put("/:id", (req, res) => {
  let {id} = req.params;
  console.log('id',id)
  let query = `update "user"
					set card_type='${req.body.card_type}',
          card_number='${req.body.card_number}',
          card_title='${req.body.card_title}',
          cvv='${req.body.cvv}',
          billing_address='${req.body.billing_address}',
          expiration='${req.body.expiration}', 
					where id = ${id} RETURNING *`;
  pool.query(query)
    .then((results) => {
      res.send(results.rows);
    })
    .catch((error) => {
      console.log('/updateReceiverInformation/:id', error);
      res.sendStatus(500);
    })
});




module.exports = router;
