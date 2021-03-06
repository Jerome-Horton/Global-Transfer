const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();


router.get('/',(req, res) => {
    
const queryText = `SELECT * from currency`;
  pool.query(queryText)
    .then((response) => res.send(response.rows))
    .catch((err) => {
      console.log('Get currency error ', err);
      res.sendStatus(500);
    })
});



module.exports = router;