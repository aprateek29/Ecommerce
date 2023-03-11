const mongoose = require('mongoose');
const mongoDBUrl = 'mongodb://localhost/thapa';

mongoose.connect(mongoDBUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected'))
    .catch((err) => console.log(err));
