const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
const path = require('path');
const MongoStore = require('connect-mongo')(session);

mongoose.connect('mongodb://localhost/codewars');
mongoose.Promise = Promise;
const db = mongoose.connection;
db.on('error', console.error.bind('connection error:'));

const app = express();
app.use(morgan('dev'));
app.use(express.static('public'));
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

app.use('/api/users', require('./routes/Users'));
app.use('/api/kyus', require('./routes/Kyus'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve('public', 'index.html'));
});

module.exports = app;
