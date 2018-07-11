const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
const path = require('path');
const MongoStore = require('connect-mongo')(session);
const webpackDevMiddleware = require('webpack-dev-middleware');

mongoose.connect('mongodb://localhost/codewars' || process.env.MONGO_URL);
mongoose.Promise = Promise;
const db = mongoose.connection;
db.on('error', console.error.bind('connection error:'));

const webpack = require('webpack');
const app = express();
const config = require('../webpack.config.js');
const compiler = webpack(config);
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.static('dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}));
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

app.get('*.js', (req,res, next) => {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  next();
})
app.get('*', (req, res) => {
  res.sendFile(path.resolve('public', 'index.html'));
});
module.exports = app;
