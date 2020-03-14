const express = require('express');

const app = express();

const port = 3000;

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./routes/htmlRoute')(app);

app.use('/api', require('./routes/apiRoute'))

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
})