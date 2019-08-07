const express = require('express'), 
    app = express(), 
    port = process.env.PORT || 3000, 
    // mongoose = require('mongoose'), 
    // passport = require('passport'), 
    // flash = require('connect-flash'), 
    logger = require('morgan'), 
    cookieParser = require('cookie-parser'), 
    bodyParser = require('body-parser'), 
    // session = require('express-session'), 
    // sticky = require('sticky-session'), 
    // server = require('http').Server(app),
    // validator = require('express-validator'),
    errorHandler = require('errorhandler'),
    compression = require('compression'),
    // mongoDBurl = 'mongodb://localhost:27017/.....',
dummy = 'dumb';

//set the title for this application
app.set('title', 'React Card Game');

// app.set('view engine', 'hbs');//'handlerbars' template engine --- just use React, no additional template engine

// set up our express application
//app.use(express.static('../../public')); 
app.use(express.static('public'));  

app.use(logger('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(compression());
app.use(errorHandler());
// app.use(validator());

//A new body object containing the parsed data is populated on the request object after the middleware (i.e. req.body). This object will contain key-value pairs, where the value can be a string or array (when extended is false), or any type (when extended is true).
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

require('./restful-api.js')(app);

app.listen(port, () => {
    console.log('Node Server is listening on port: ' + port);
    if (process.env.NODE_ENV !== 'production') {
        console.log('We are in development mode');
    }
});