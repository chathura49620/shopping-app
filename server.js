const express = require('express');
const app = express();

const connectDB = require("./server/Database/connection")

//get env file configarations
require('dotenv').config();

//connect mongoDB 
connectDB();

app.listen(5000, function() {
    console.log('listening on 5000')
  })