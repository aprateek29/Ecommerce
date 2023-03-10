const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res, next) => {
    res.send("Home Page");
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})