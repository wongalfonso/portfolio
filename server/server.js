const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
const fs = require('fs');
const path = require('path');
const MongoStore = require('connect-mongo')(session);
const axios = require('axios');
const app = express();
const config = require('../config/config');
const menu = require('./food.json');
const NODE = process.env.NODE_ENV;

if (NODE !== 'production') {
  const dotenv = require('dotenv')
  dotenv.config();
}


// mongoose.connect('mongodb://localhost/codewars' || process.env.MONGO_URL);
// mongoose.Promise = Promise;
// const db = mongoose.connection;
// db.on('error', console.error.bind('connection error:'));

app.use(morgan('dev'));
app.use(express.static('/public'));
app.use(express.static('dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(session({
//   secret: 'word hard',
//   resave: true,
//   saveUninitialized: false,
//   store: new MongoStore({
//     mongooseConnection: db
//   })
// }))
app.get("/api/weather/:input", (req, res) => {  
  let weatherKey;;
  if (NODE === 'production') {
    weatherKey = process.env.WEATHER_KEY;
    
  } else {
    weatherKey = config.WEATHER_KEY
  };

  const search = req.params.input;
  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=imperial&APPID=${weatherKey}`)
    .then(response => {      
      res.send(response.data)
    })
    .catch(err => res.send(err.response.data))
});
app.get('/api/pokemon', (req, res) => {  
  axios.get('https://pokeapi.co/api/v2/pokemon/?limit=964').then((response) => { 
    res.send(response.data);
  })
});

app.get('/api/pokemon/:name', (req, res) => {  
  const name = req.params.name;  
  axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`).then((response) => {    
    res.send(response.data);
  })
})

app.get('/api/pokemon/:num', (req, res) => {
  const num = req.params.num;
  axios.get(`https://pokeapi.co/api/v2/ability/${num}`).then((response) => {
    res.send(response.data);
  })
});

app.get("/api/menu", (req, res) => {
  res.send(menu);
})

app.use('/api/users', require('./routes/Users'));
app.use('/api/kyus', require('./routes/Kyus'));

// app.get('*.js', (req,res, next) => {
//   req.url = req.url + '.gz';
//   res.set('Content-Encoding', 'gzip');
//   next();
// });

app.get('*', (req, res) => {
  res.sendFile(path.resolve('public', 'index.html'));
});

module.exports = app;
