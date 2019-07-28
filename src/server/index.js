// import { renderToString } from "react-dom/server";
// import { matchPath } from "react-router-dom";

// require('babel-register')({
//     presets: [ 'react' ]
// })
import React from 'react';
import switchRoutes from "../shared/routes/switchRoutes";
import entryHTML from './entryHTML.js';
// import withRoutes from "../shared/routes";
// import allRoutes from "../shared/routes/allRoutes";
const withAllRoutes = require('../shared/routes/withAllRoutes');
import { StaticRouter, matchPath, Route, Switch } from 'react-router-dom';
// import { StaticRouter, matchPath } from 'react-router';
import { renderRoutes } from 'react-router-config';
//import serialize from "serialize-javascript";
// import ReactDOMServer, { renderToString } from 'react-dom/server';//ReactDOMServer
import { renderToString } from 'react-dom/server';

import Layout from '../shared/components/Layout';
import DeckPage from '../shared/components/DeckPage/index.jsx';
import NewCardPage from '../shared/components/NewCardPage/index.jsx';
import StudyPage from '../shared/components/StudyPage/index.jsx';
import ReviewPage from '../shared/components/ReviewPage/index.jsx';
import {Provider} from 'react-redux';

//server-side store
const {createStore} = require('redux');
const reducers = require('../shared/reducers');
const store = createStore(reducers);

//Use Babel to transform required files from JSX to JS
// require('babel-register')({
//     presets: [ 'react' ]
// });

const express = require('express'), 
    app = express(), 
    port = process.env.PORT || 3000, 
    // mongoose = require('mongoose'), 
    // passport = require('passport'), 
    // flash = require('connect-flash'), 
    // logger = require('morgan'), 
    // cookieParser = require('cookie-parser'), 
    bodyParser = require('body-parser'), 
    // session = require('express-session'), 
    // sticky = require('sticky-session'), 
    // server = require('http').Server(app),
    // validator = require('express-validator'),
    // errorHandler = require('errorhandler'),
    // compression = require('compression'),
    // mongoDBurl = 'mongodb://localhost:27017/.....',
    // ReactDOMServer = require('react-dom/server'),
    // React = require('react'),
    dummy = 'dumb';

// require('babel-register')({
//     presets: ['react']
// });

//set the title for this application
app.set('title', 'React Card Game');

// app.set('view engine', 'hbs');//'handlerbars' template engine

// set up our express application
//app.use(express.static('../../public')); 
app.use(express.static('public'));  

// app.use(logger('dev')); // log every request to the console
// app.use(cookieParser()); // read cookies (needed for auth)
// app.use(compression());
// app.use(errorHandler());
// app.use(validator());

//A new body object containing the parsed data is populated on the request object after the middleware (i.e. req.body). This object will contain key-value pairs, where the value can be a string or array (when extended is false), or any type (when extended is true).
app.use(bodyParser.urlencoded({ extended: true }));//---- parse application/x-www-form-urlencoded. 
//extended: true? false?
//The extended option allows to choose between parsing the URL-encoded data with the querystring library (when false) or the qs library (when true). The "extended" syntax allows for rich objects and arrays to be encoded into the URL-encoded format, allowing for a JSON-like experience with URL-encoded. For more information, please see the qs library.
//If {extended:false}, you can not post nested objects!

app.use(bodyParser.json());

//methodOverride is for simulating DELETE and PUT. Otherwise they are treated the same as <input ...method='GET'>.
//in HTML <input... name='method' value='PUT'> --> app.put() in Node.js
// var methodOverride = require('method-override');
// app.use(methodOverride());

// config connection to client database for this session
// var clientDbURL = 'mongodb://localhost:27017/clientDB';
// mongoose.connect(clientDbURL);

// //set up a session store ==========================
// //const MongoStore = require('connect-mongo')(session);// replaced by 'connect-mongodb-session' in Express 4
// //'connect-mongo' automatically store session in a collection called 'sessions', but need to define which database
// var MongoDBStore = require('connect-mongodb-session')(session);  //MongoDB session store for connect/express built by MongoDB. Pass in an instance of the express-session module the MongoDBStore class will enable you to store your Express sessions in MongoDB. 
// //'connect-mongodb-session' is a MongoDB-backed session storage for connect and Express. Meant to be a well-maintained and fully-featured replacement for modules like connect-mongo

// // declare a session store instance
// var store = new MongoDBStore({
//   //uri: 'mongodb://localhost:27017/connect_mongodb_session',//WRONG: must use client credential database for login seesion
//   uri: clientDbURL, // uri: a MongoDB connection string (an existing mongoose connection)
//   collection: 'clientSessions' //collection: the MongoDB collection to store sessions in. By default it's 'sessions'
// });
 
// // Catch errors 
// store.on('error', function(error) {
//   assert.ifError(error);
//   assert.ok(false);
// });

// app.use(session({
//   secret: 'TL-twApp',// seed for encryption
//   name: 'TrendifyLive_Twitter_App_Session',
//   //The name of the session ID cookie to set in the response. The default value is 'connect.sid', but this is problematic when running multiple apps on the same host name (e.g. localhost --not counting ports)
//   cookie: { 
//     maxAge: 1000 * 60 * 60 * 24, // 1 day.
//     //expires: new Date(0) //year 1969 // comment this out as it prohibits toggling passport isAuthenticated().
//     //The expiration is reset to the original maxAge. By default, no maximum age is set.

//     //httpOnly: true, // don't let browser javascript access cookie ever
//     //secure: true, // only use cookie over https
//   },
//   store: store,
//   resave: true, //Forces the session to be saved back to the session store, even if the session was never modified during the request. Need 'resave: true' when session.touch() not implemented
//   saveUninitialized: true
// }));

// mongodb.MongoClient.connect(mongoDBurl, (err, db) => {
//     if (err) {
//       console.error(err);
//       process.exit(1);
//     }
//     app.use((req, res, next) => {
//         req.clientDB = db.collection('clientDB');
//         return next();
//     })
// });

// require('./config/passport-strategies.js')(passport); // pass passport for configuration
// //Passport has the request to connect to database
// //this must be before require('./app/routes.js')(app, passport)
// // the passport.use to config passport. Then passport then can return a 'user'/client from mongodb and after that it can be used in route!
// app.use(passport.initialize());
// app.use(passport.session()); // persistent login sessions
// app.use(flash()); // use connect-flash for flash messages stored in session

//split the file
//require('./routes.js')(app, passport); // load our routes and pass in our app and fully configured passport

//require('./restful-api.js')(app);
console.log('------------- called restful-api.js --------------------')
app.get('*', (req, res, next) => { 
    //console.log('restful-api req.url: ', req.url);//no

    console.log('switch rotes ', switchRoutes);

    const activeRoute = switchRoutes.find((route) => {
        console.log('route ', route);
        return matchPath(req.url, route)
    }) || {};

    console.log('activaeRoute ', activeRoute);

    const ServerRoutes = withAllRoutes(StaticRouter, store);

    // TypeError: Cannot read property 'parsePath' of undefined -- history/PathUtil
    // const content = renderToString(  
    //     <Provider store={store}>
    //         <StaticRouter location={req.url} context={{}}>
    //             <Layout>
    //             </Layout>
    //         </StaticRouter>
    //     </Provider>

    //     // <div>
    //     // <Provider store={store}>
    //     //     <StaticRouter location={req.url} context={{}}>
    //     //         <Layout>
    //     //         </Layout>
    //     //     </StaticRouter>
    //     // </Provider>
    //     // </div>

    //     // <Provider store={store}>
    //     //     <BrowserRouter location={req.url} context={{}}>
    //     //         <Layout>
    //     //         </Layout>
    //     //     </BrowserRouter>
    //     // </Provider>
    // );

    // const content = renderToString(  // no error
    //     <h1>SHITTTTT</h1>
    // );
    
    // res.send( entryHTML(content, `window.INITIAL_DATA = 0`));
    res.send(
        // `<!DOCTYPE html>
        // <html>
        //     <head>
        //         <link href="/css/bootstrap.css" type="text/css" rel="stylesheet"> 
        //         <meta name="viewport" content="width=device-width, initial-scale=1">
        //     </head>
        //     <body>
        //         <div class="container-fluid" id="content">${content}</div>
        //         <script src="/js/bundle.js"></script>
        //     </body>
        // </html>
        // `

        // `<!DOCTYPE html>
        // <html>
        //     <head>
        //         <link href="/css/bootstrap.css" type="text/css" rel="stylesheet"> 
        //         <meta name="viewport" content="width=device-width, initial-scale=1">
        //     </head>
        //     <body>
        //         <div class="container-fluid" id="content">This Works!!!</div>
        //         <script src="/js/bundle.js"></script>
        //     </body>
        // </html>
        // `

        // `<!DOCTYPE html>
        // <html>
        //     <head>
        //         <link href="/css/bootstrap.css" type="text/css" rel="stylesheet"> 
        //         <meta name="viewport" content="width=device-width, initial-scale=1">
        //     </head>
        //     <body>
        //         <div class="container-fluid" id="content">
        //         ${
        //             renderToString(
        //                 // <Provider store={store}>
        //                 //     <StaticRouter location={req.url} context={{}}>
        //                         {/* <div>{renderRoutes([
        //                                 {
        //                                     component: DeckPage,
        //                                     path: '/',
        //                                     exact: true
        //                                 },
        //                                 {
        //                                     component: NewCardPage,
        //                                     path: '/createCard/:deckID'
        //                                 }
        //                             ])}
        //                         </div> */}

        //                         {/* <Layout>
        //                             <Switch>
        //                                 <Route path="/" exact component={(props) => <DeckPage {...props}/>} /> */}
        //                                 {/* <Route path='/createCard/:deckID' component={(props) => <NewCardPage {...props}/>} />
        //                                 <Route path='/study' component={(props) => <StudyPage {...props}/>} />
        //                                 <Route path='/review' component={(props) => <ReviewPage {...props}/>} /> */}
        //                             {/* </Switch> */}
        //                             {/* <Route path="/" exact component={(props) => <DeckPage {...props}/>} /> */}
        //                         {/* </Layout> */}

        //                         {/* {withRoutes()} */}
        //                         {/* {allRoutes} */}
        //                 //     </StaticRouter>
        //                 // </Provider>
        //             )
        //         }
        //         </div>
        //         <script src="/js/bundle.js"></script>
        //     </body>
        // </html>
        // `

        `<!DOCTYPE html>
        <html>
            <head>
                <link href="/css/bootstrap.css" type="text/css" rel="stylesheet"> 
                <meta name="viewport" content="width=device-width, initial-scale=1">
            </head>
            <body>
                <div class="container-fluid" id="content">
                ${
                    renderToString(
                        <ServerRoutes location={req.url} context={{}}/>
                    )
                }
                </div>
                <script src="/js/bundle.js"></script>
            </body>
        </html>
        `
    )
});

app.listen(port, () => {
    console.log('Frontend Server is listening on port: ' + port);
    if (process.env.NODE_ENV !== 'production') {
        console.log('We are in development mode');
    }
});