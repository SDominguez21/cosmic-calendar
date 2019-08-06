require('dotenv').config();

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
const favicon = require('serve-favicon');
const mongoose = require('mongoose');
const logger = require('morgan');
const path = require('path');
const passport = require('passport');
const session = require('express-session');
const cors = require('cors');
const hbs = require('hbs');
const moment = require('moment');

require('./config/passport');

mongoose.Promise = Promise;
mongoose
  .connect('mongodb://localhost/CircadianCalendar', {
    useNewUrlParser: true
  })
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error('Error connecting to mongo', err);
  });

const app_name = require('./package.json').name;
const debug = require('debug')(
  `${app_name}:${path.basename(__filename).split('.')[0]}`
);

const app = express();

//cors
app.use(
  cors({
    credentials: true,
    origin: ['http://localhost:3000', 'https://cosmic-calendar.herokuapp.com']
  })
);

// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

//card images working because of this
// app.use(express.static("./public/images"));

// Express View engine setup

app.use(
  require('node-sass-middleware')({
    src: path.join(__dirname, 'public'),
    dest: path.join(__dirname, 'public'),
    sourceMap: true
  })
);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));

// default value for title local
app.locals.title = 'Express - Generated with IronGenerator';

app.use(
  session({
    secret: 'a secret',
    resave: true,
    saveUninitialized: true
  })
);

// PASSPORT
app.use(passport.initialize());
app.use(passport.session());

//--------------------------------ROUTES-----------------------------------
const index = require('./routes/index');
app.use('/', index);

const userRoutes = require('./routes/userRoutes');
app.use('/api/auth', userRoutes);

//_________________________________________________________________________
module.exports = app;
