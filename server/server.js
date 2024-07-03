const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

const connect=require('./databasegym.js');
// const gymRouter = require('./gym.router');

const app=express();
dotenv.config();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.send('Welcome to gym');
  });

// app.use('/api', gymRouter);


connect();

app.listen(process.env.PORT||6000, () => {
  console.log(`running on port 6000`);
});