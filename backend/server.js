const express = require('express');
const userRouter = require('./routes/user');

const app = express();
const port = 5000;

app.use(express.json());
app.use('/api/user', userRouter);

app.get('/', (req, res, next) => {
    res.status(200).send("Home Page");
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})