const express = require('express');
const cookieParser = require('cookie-parser');
// require all the routes here
const authRouter = require('./routes/auth.routes');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))
app.use('/api/auth', authRouter); //using all the routes here

module.exports = app;
