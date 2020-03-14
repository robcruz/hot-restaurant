const express = require('express');
const tables = require('../data/tables.json');
const waitlist = require('../data/waitlist.json');

const router = express.Router();

router.get('/tables', (req, res) => {
  res.json(tables);
});

router.get('/waitlist', (req, res) => {
  res.json(waitlist);
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
    waitlist.push(table);
    res.send('Tables full! Added to waitlist!');
  }
})

module.exports = router;