const express = require('express');
const cors = require('cors');
require('dotenv').config();

const {
  UserRoute,
} = require('./routes');
const { getDbService } = require('./services');

getDbService();
const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.json({'message': 'ok'});
});

app.use('/users', UserRoute);

/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({'message': err.message});
  
  return;
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
