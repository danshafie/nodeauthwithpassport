const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
// const router = require('./router');
const app = express();
const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:auth/auth');

app.use(morgan('combined'));
app.use(bodyParser.json({ type: '*/*'}));

require('./router')(app)


const port = process.env.PORT || 3090;

app.listen(port, function(){
  console.log("i'm going to bang this bitch the fuck out", port);
})
