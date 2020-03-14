const path = require('path');

module.exports = (app) => {
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'home.html'));
  });
  app.get('/table', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'table.html'));
  })
};