const express = require('express');
const userRouter = require('./routes/user');
const productRouter = require('./routes/product');
require('./db');

const app = express();
const port = 5000;

app.use(express.json());
app.use('/api/users', userRouter);
app.use('/api/products', productRouter);

app.get('/', (req, res, next) => {
    res.status(200).send("Home Page");
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})