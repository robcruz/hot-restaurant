const express = require('express');
const tables = require('../data/tables.json');
const waitingList = require('../data/waitingList.json');

const router = express.Router();


router.get('/tables', (req, res) => {
  res.json(tables);
});

router.get('/waitinglist', (req, res) => {
  res.json(waitingList);
});

router.post('/reservation', (req, res) => {
  const {
    body: {
      uniqueID,
      customerName,
      customerEmail,
      customerPhone,
      partySize
    }
  } = req;

  const table = {
    uniqueID,
    customerName,
    customerEmail,
    customerPhone,
    partySize
  };

  if (tables.length < 5) {
    tables.push(table);
    res.send('Table Reserved!');
  } else {
    waitingList.push(table);
    res.send('Tables full! Added to waitlist!');
  }
})

module.exports = router;