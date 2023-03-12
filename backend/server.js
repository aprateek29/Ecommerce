const express = require('express');
require('./db');

const userRouter = require('./routes/user');
const productRouter = require('./routes/product');
const { errorHandler } = require('./util/functions');

const app = express();
const port = 5000;

app.use(express.json());
app.use('/api/users', userRouter);
app.use('/api/products', productRouter);
app.use(errorHandler);

app.all('/api/*', (req, res, next) => {
  res.status(404).json({error: "API endpoint not available."});
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
