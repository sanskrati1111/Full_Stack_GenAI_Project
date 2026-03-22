const express = require('express');

// require all the routes here
const authRouter = require('./routes/auth.routes');

const app = express();

app.use(express.json());


app.use('/api/auth', authRouter); //using all the routes here

module.exports = app;
