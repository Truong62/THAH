const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const apiRoutes = require('./src/route/api');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', apiRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to the API!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
