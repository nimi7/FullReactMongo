const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(__dirname + "/public"));

// require("router");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


const Userapi = require('../controllers/UserController')
const GetUser = require('../controllers/apiuser')
const Password = require('../controllers/password')
var cookieSession = require('cookie-session')
app.use(cookieSession({
  name: 'session',
  secret: 'ninja',
}));
var passport = require('passport');
require('../initializers/passport')

var flash = require('connect-flash');

// AFTER app.use(cookieSession(...))
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());


app.use('/api' , Userapi,GetUser,Password);


module.exports = app;
