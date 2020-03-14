const express = require('express');
const tables = require('../data/tables');
const waitlist = require('../data/waitlist');

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

  const haveCapacity = tables.length < 5;

  if (haveCapacity) {
    tables.push(table);
  } else {
    waitlist.push(table);
  }

  res.send(haveCapacity);
})

module.exports = router;