/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styles = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NormalText = function (_Component) {
  _inherits(NormalText, _Component);

  function NormalText() {
    _classCallCheck(this, NormalText);

    return _possibleConstructorReturn(this, (NormalText.__proto__ || Object.getPrototypeOf(NormalText)).apply(this, arguments));
  }

  _createClass(NormalText, [{
    key: "render",
    value: function render() {
      var width = window.screen.width;
      var concatStyles = Object.assign({}, this.props.style, { fontSize: width * 1.0 / _styles.scalingFactors.normal });

      return _react2.default.createElement(
        "span",
        { className: "fontNormal",
          style: concatStyles
        },
        this.props.children
      );
    }
  }]);

  return NormalText;
}(_react.Component);

NormalText.displayName = "NormalText";
exports.default = NormalText;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var cardStyle = exports.cardStyle = {
    position: "absolute",
    border: "2px solid yellow",
    height: 100,
    width: 70,
    padding: 10,
    borderRadius: 10,
    cursor: 'pointer',
    textAlign: 'center'
};

var scalingFactors = exports.scalingFactors = {
    normal: 45,
    big: 30
};

var colors = exports.colors = {
    pink: "#FDA6CD",
    pink2: "#d35d90",
    green: "#65ed99",
    tan: "#FFEFE8",
    blue: "#5DA9E9",
    gray1: "#888888",
    red: "#ff0000",
    white: "#ffffff"
};

var fonts = exports.fonts = {
    normal: { fontSize: 24 },
    alternate: { fontSize: 50, color: "#FFFFFF" },
    big: { fontSize: 32, alignSelf: "center" }
};

var headerStyle = exports.headerStyle = {
    position: 'relative',
    top: 80,
    margin: 0
};

var inputButtonStyle = exports.inputButtonStyle = {
    justifyContent: "center",
    padding: 10,
    margin: 10,
    fontSize: 24,
    alignItems: "center",
    backgroundColor: 'green',
    color: 'white'
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = function (_Component) {
  _inherits(Button, _Component);

  function Button(props) {
    _classCallCheck(this, Button);

    var _this = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, props));

    _this._onClick = function (e) {
      e.preventDefault();
      //e.persist();//will remove the synthetic event from the pool and retake the reference to the event
      _this.props.onClick(_this.buttonRef.current.id);
    };

    _this.buttonRef = _react2.default.createRef();
    return _this;
  }

  _createClass(Button, [{
    key: "render",
    value: function render() {
      var concatStyles = Object.assign({}, this.props.style);

      return _react2.default.createElement(
        "button",
        {
          className: "wideButton",
          onClick: this._onClick,
          style: concatStyles,
          disabled: this.props.disabled,
          id: this.props.id,
          ref: this.buttonRef
        },
        this.props.children
      );
    }
  }]);

  return Button;
}(_react.Component);

Button.displayName = "Button";


Button.defaultProps = { disabled: false };

exports.default = Button;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("md5");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _switchRoutes = __webpack_require__(25);

var _switchRoutes2 = _interopRequireDefault(_switchRoutes);

var _routes = __webpack_require__(24);

var _routes2 = _interopRequireDefault(_routes);

var _reactRouterDom = __webpack_require__(6);

var _server = __webpack_require__(27);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//ReactDOMServer

//server-side store
var _require = __webpack_require__(40),
    createStore = _require.createStore;
//import serialize from "serialize-javascript";

//import entryHTML from './entryHTML.js';


var reducers = __webpack_require__(36);
var store = createStore(reducers);

//Use Babel to transform required files from JSX to JS
__webpack_require__(26)({
    presets: ['react']
});

module.exports = function (app) {
    console.log('------------- called restful-api.js --------------------');
    //dynamic path '*' or '/*'??????
    //app.get('*', (req, res, next) => { //not called
    //app.get('/*', (req, res, next) => {
    app.get('/', function (req, res, next) {
        console.log('restful-api req.url: ', req.url); //no

        var activeRoute = _switchRoutes2.default.find(function (route) {
            return (0, _reactRouterDom.matchPath)(req.url, route);
        }) || {};

        var promise = activeRoute.fetchInitialData ? activeRoute.fetchInitialData(req.path) : Promise.resolve();

        var ServerRoutes = (0, _routes2.default)(_reactRouterDom.StaticRouter, store); //server side doesn't have store????

        promise.then(function (data) {
            var context = { data: data };

            //const initialData = `window.INITIAL_DATA = ${serialize(data)}`;
            var initialData = "window.INITIAL_DATA = " + JSON.stringify(data);

            console.log('restful-api data: ', data);

            var content = (0, _server.renderToString)(_react2.default.createElement(ServerRoutes, { location: req.url, context: context })
            // <Provider store={store}>
            //     <StaticRouter>
            //         <Layout>
            //             {/* <Switch>
            //                 <Route path='/' exact component={(props) => (<DeckPage {...props} />)} />  
            //             </Switch> */}
            //         </Layout>
            //     </StaticRouter>
            // </Provider>
            );

            res.send(entryHTML(content, initialData)); //send() or render()
            // res.send(
            //     `<!DOCTYPE html>
            //     <html>
            //         <head>
            //             <link href="/css/bootstrap.css" type="text/css" rel="stylesheet"> 
            //             <meta name="viewport" content="width=device-width, initial-scale=1">
            //         </head>
            //         <body>
            //             <div class="container-fluid" id="content">${content}</div>
            //             <script src="/js/bundle.js"></script>
            //         </body>
            //     </html>
            //     `
            // )
        }).catch(next);
    });
};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 10 */,
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// import { renderToString } from "react-dom/server";
// import { matchPath } from "react-router-dom";

// require('babel-register')({
//     presets: [ 'react' ]
// })

var express = __webpack_require__(9),
    app = express(),
    port = process.env.PORT || 3000,

// mongoose = require('mongoose'), 
// passport = require('passport'), 
// flash = require('connect-flash'), 
// logger = require('morgan'), 
// cookieParser = require('cookie-parser'), 
bodyParser = __webpack_require__(8),

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

// set up our express application
//app.use(express.static('../../public')); 
app.use(express.static('public'));

// app.use(logger('dev')); // log every request to the console
// app.use(cookieParser()); // read cookies (needed for auth)
// app.use(compression());
// app.use(errorHandler());
// app.use(validator());

//A new body object containing the parsed data is populated on the request object after the middleware (i.e. req.body). This object will contain key-value pairs, where the value can be a string or array (when extended is false), or any type (when extended is true).
app.use(bodyParser.urlencoded({ extended: true })); //---- parse application/x-www-form-urlencoded. 
//extended: true? false?
//The extended option allows to choose between parsing the URL-encoded data with the querystring library (when false) or the qs library (when true). The "extended" syntax allows for rich objects and arrays to be encoded into the URL-encoded format, allowing for a JSON-like experience with URL-encoded. For more information, please see the qs library.
//If {extended:false}, you can not post nested objects!

app.use(bodyParser.json());

//app.set('view engine', 'ejs'); 

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

__webpack_require__(7)(app);

app.listen(port, function () {
    console.log('Frontend Server is listening on port: ' + port);
});

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadData = exports.nextReview = exports.stopReview = exports.deleteDeck = exports.reviewDeck = exports.studyDeck = exports.addCard = exports.addDeck = undefined;

var _types = __webpack_require__(13);

var _Card = __webpack_require__(22);

var _Card2 = _interopRequireDefault(_Card);

var _Deck = __webpack_require__(23);

var _Deck2 = _interopRequireDefault(_Deck);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var addDeck = exports.addDeck = function addDeck(name) {
  return { type: _types.ADD_DECK, data: new _Deck2.default(name) };
};

var addCard = exports.addCard = function addCard(front, back, deckID) {
  return { type: _types.ADD_CARD, data: new _Card2.default(front, back, deckID) };
};

var studyDeck = exports.studyDeck = function studyDeck(deckID) {
  return { type: _types.STUDY_DECK, data: { deckID: deckID } };
};

var reviewDeck = exports.reviewDeck = function reviewDeck(deckID) {
  return { type: _types.REVIEW_DECK, data: { deckID: deckID } };
};

var deleteDeck = exports.deleteDeck = function deleteDeck(deckID) {
  return { type: _types.DELETE_DECK, data: { deckID: deckID } };
};

var stopReview = exports.stopReview = function stopReview() {
  return { type: _types.STOP_REVIEW, data: {} };
};

var nextReview = exports.nextReview = function nextReview() {
  return { type: _types.NEXT_REVIEW, data: {} };
};

var loadData = exports.loadData = function loadData(data) {
  return { type: _types.LOAD_DATA, data: data };
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var ADD_DECK = exports.ADD_DECK = "ADD_DECK";
var ADD_CARD = exports.ADD_CARD = "ADD_CARD";
var STUDY_DECK = exports.STUDY_DECK = "STUDY_DECK";
var REVIEW_DECK = exports.REVIEW_DECK = "REVIEW_DECK";
var DELETE_DECK = exports.DELETE_DECK = "DELETE_DECK";
var STOP_REVIEW = exports.STOP_REVIEW = "STOP_REVIEW";
var NEXT_REVIEW = exports.NEXT_REVIEW = "NEXT_REVIEW";
var LOAD_DATA = exports.LOAD_DATA = "LOAD_DATA";

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Button = __webpack_require__(3);

var _Button2 = _interopRequireDefault(_Button);

var _NormalText = __webpack_require__(1);

var _NormalText2 = _interopRequireDefault(_NormalText);

var _Card = __webpack_require__(18);

var _Card2 = _interopRequireDefault(_Card);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Deck = function (_Component) {
  _inherits(Deck, _Component);

  function Deck(props) {
    _classCallCheck(this, Deck);

    var _this = _possibleConstructorReturn(this, (Deck.__proto__ || Object.getPrototypeOf(Deck)).call(this, props));

    _this._study = function () {
      _this.props.study();
    };

    _this._review = function () {
      _this.props.review();
    };

    _this._addCards = function () {
      _this.props.add();
    };

    _this._deleteDeck = function () {
      _this.props.delete();
    };

    _this.state = { deckWidth: 0, deckHeight: 0 };
    _this._updatePosition = _this._updatePosition.bind(_this);
    _this.deckRef = _react2.default.createRef();
    _this.deckFigRef = _react2.default.createRef();
    return _this;
  }

  _createClass(Deck, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._updatePosition();
      window.addEventListener('resize', this._updatePosition);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this._updatePosition);
    }
  }, {
    key: "_updatePosition",
    value: function _updatePosition(e) {
      var deck = this.deckRef.current;
      var deckFig = this.deckFigRef.current;
      this.setState({
        deckWidth: deckFig.offsetWidth,
        deckHeight: deckFig.offsetHeight
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        "div",
        { className: "deckContainer", id: this.props.id, ref: this.deckRef },
        _react2.default.createElement(
          "figure",
          {
            onClick: this._study,
            ref: this.deckFigRef
          },
          this.props.deck.cards.map(function (card, cardIndex) {
            return _react2.default.createElement(_Card2.default, {
              key: card.id,
              containerWidth: _this2.state.deckWidth,
              containerHeight: _this2.state.deckHeight,
              cardIndex: cardIndex,
              zIndex: cardIndex + 1,
              id: card.id,
              uncover: false
            });
          })
        ),
        _react2.default.createElement(
          "div",
          { className: "deckGroup" },
          _react2.default.createElement(
            _Button2.default,
            { className: "deckButton", onClick: this._deleteDeck },
            _react2.default.createElement(
              _NormalText2.default,
              null,
              this.props.deck.name,
              ": Delete"
            )
          ),
          _react2.default.createElement(
            _Button2.default,
            { className: "editButton", onClick: this._addCards },
            _react2.default.createElement(
              _NormalText2.default,
              null,
              this.props.count,
              " Cards: Add"
            )
          )
        )
      );
    }
  }]);

  return Deck;
}(_react.Component);

Deck.displayName = "Deck";
exports.default = Deck;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _DeckCreationFields = __webpack_require__(16);

var _Snackbar = __webpack_require__(21);

var _Snackbar2 = _interopRequireDefault(_Snackbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DeckCreation = function (_Component) {
  _inherits(DeckCreation, _Component);

  function DeckCreation(props) {
    _classCallCheck(this, DeckCreation);

    var _this = _possibleConstructorReturn(this, (DeckCreation.__proto__ || Object.getPrototypeOf(DeckCreation)).call(this, props));

    _this._newDeck = function (name) {
      _this.props.create(name);
      _this.setState({ startCreating: false });
    };

    _this._startCreating = function () {
      _this.setState({ startCreating: true });
    };

    _this.state = { startCreating: false };
    return _this;
  }

  _createClass(DeckCreation, [{
    key: "render",
    value: function render() {
      var contents = this.props.error ? _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(_DeckCreationFields.EnterDeck, { create: this._newDeck }),
        _react2.default.createElement(
          _Snackbar2.default,
          { display: this.props.error && this.props.showMsg, handleClick: this.props.closeMsg, dwellTime: 1000 },
          this.props.error
        )
      ) : this.state.startCreating ? _react2.default.createElement(_DeckCreationFields.EnterDeck, { create: this._newDeck }) : _react2.default.createElement(_DeckCreationFields.CreateDeckButton, { onClick: this._startCreating });
      return contents;
    }
  }]);

  return DeckCreation;
}(_react.Component);

exports.default = DeckCreation;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EnterDeck = exports.CreateDeckButton = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Button = __webpack_require__(3);

var _Button2 = _interopRequireDefault(_Button);

var _NormalText = __webpack_require__(1);

var _NormalText2 = _interopRequireDefault(_NormalText);

var _LabeledInput = __webpack_require__(20);

var _LabeledInput2 = _interopRequireDefault(_LabeledInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CreateDeckButton = function (_Component) {
  _inherits(CreateDeckButton, _Component);

  function CreateDeckButton() {
    _classCallCheck(this, CreateDeckButton);

    return _possibleConstructorReturn(this, (CreateDeckButton.__proto__ || Object.getPrototypeOf(CreateDeckButton)).apply(this, arguments));
  }

  _createClass(CreateDeckButton, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        _Button2.default,
        { className: "createDeck", onClick: this.props.onClick },
        _react2.default.createElement(
          _NormalText2.default,
          null,
          "Create Deck"
        )
      );
    }
  }]);

  return CreateDeckButton;
}(_react.Component);

var EnterDeck = function (_Component2) {
  _inherits(EnterDeck, _Component2);

  function EnterDeck(props) {
    _classCallCheck(this, EnterDeck);

    var _this2 = _possibleConstructorReturn(this, (EnterDeck.__proto__ || Object.getPrototypeOf(EnterDeck)).call(this, props));

    _this2._create = function () {
      _this2.props.create(_this2.state.deckName);
    };

    _this2._onChange = function (deckName) {
      _this2.setState({ deckName: deckName });
    };

    _this2.state = { deckName: "" };
    return _this2;
  }

  _createClass(EnterDeck, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { id: "deckCreation" },
        _react2.default.createElement(_LabeledInput2.default, {
          onEntry: this.props.create,
          onChange: this._onChange,
          className: "nameField fontNormal",
          label: "Deck Name",
          placeholder: " New Deck Name "
        }),
        _react2.default.createElement(CreateDeckButton, {
          onClick: this._create
        })
      );
    }
  }]);

  return EnterDeck;
}(_react.Component);

exports.CreateDeckButton = CreateDeckButton;
exports.EnterDeck = EnterDeck;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(5);

var _creators = __webpack_require__(12);

var _Deck = __webpack_require__(14);

var _Deck2 = _interopRequireDefault(_Deck);

var _DeckCreation = __webpack_require__(15);

var _DeckCreation2 = _interopRequireDefault(_DeckCreation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DecksScreen = function (_Component) {
  _inherits(DecksScreen, _Component);

  function DecksScreen(props) {
    _classCallCheck(this, DecksScreen);

    var _this = _possibleConstructorReturn(this, (DecksScreen.__proto__ || Object.getPrototypeOf(DecksScreen)).call(this, props));

    _this._createDeck = function (name) {
      try {
        var createDeckAction = (0, _creators.addDeck)(name);
        _this.props.createDeck(createDeckAction);
        _this.setState({ error: null, showMsg: false });
        _this.props.history.push("/createCard/" + createDeckAction.data.id);
      } catch (e) {
        _this.setState({ error: e, showMsg: true });
      }
    };

    _this._closeMsg = function () {
      _this.setState({ showMsg: false });
    };

    _this._addCards = function (deckID) {
      _this.props.history.push({
        pathname: "/createCard/" + deckID,
        state: {
          returnto: _this.props.location.pathname
        }
      });
    };

    _this._study = function (deckID) {
      _this.props.studyDeck(deckID);
      _this.props.history.push({
        pathname: '/study',
        state: {
          deckID: deckID //access: this.props.location.state.deckID
        }
      });
    };

    _this._review = function (deckID) {
      _this.props.reviewDeck(deckID);
      _this.props.history.push('review');
    };

    _this._delete = function (deckID) {
      _this.props.deleteDeck(deckID);
    };

    _this.state = { error: null, showMsg: false };
    return _this;
  }

  _createClass(DecksScreen, [{
    key: "_mkDeckViews",
    value: function _mkDeckViews() {
      var _this2 = this;

      if (!this.props.decks) {
        return null;
      }

      return _react2.default.createElement(
        "div",
        { className: "playTable" },
        this.props.decks.map(function (deck) {
          return _react2.default.createElement(_Deck2.default, {
            deck: deck,
            count: _this2.props.counts[deck.id],
            key: deck.id,
            id: '_' + deck.id //JS variable for querySelector can't start with a number
            , add: function add() {
              _this2._addCards(deck.id);
            },
            study: function study() {
              _this2._study(deck.id);
            },
            "delete": function _delete() {
              _this2._delete(deck.id);
            },
            review: function review() {
              _this2._review(deck.id);
            }
          });
        })
      );
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { id: "deckPage" },
        _react2.default.createElement(_DeckCreation2.default, { create: this._createDeck, error: this.state.error, showMsg: this.state.showMsg, closeMsg: this._closeMsg }),
        this._mkDeckViews()
      );
    }
  }]);

  return DecksScreen;
}(_react.Component);

DecksScreen.displayName = "DecksScreen";


var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    createDeck: function createDeck(deckAction) {
      dispatch(deckAction);
    },
    studyDeck: function studyDeck(deckID) {
      dispatch((0, _creators.studyDeck)(deckID));
    },
    reviewDeck: function reviewDeck(deckID) {
      dispatch((0, _creators.reviewDeck)(deckID));
    },
    deleteDeck: function deleteDeck(deckID) {
      dispatch((0, _creators.deleteDeck)(deckID));
    }
  };
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    decks: state.decks,
    counts: state.decks.reduce(function (sum, deck) {
      sum[deck.id] = deck.cards.length;
      return sum;
    }, {})
  };
};

module.exports = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(DecksScreen);

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styles = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Card = function (_Component) {
  _inherits(Card, _Component);

  function Card(props) {
    _classCallCheck(this, Card);

    var _this = _possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).call(this, props));

    _this._flipCard = function () {
      var orientation = _this.state.orientation === 'front' ? 'back' : 'front';
      var className = 'flip-animation';
      _this.setState({ orientation: orientation, className: className });
    };

    _this._animeEnd = function () {
      _this.setState({ className: '' });
    };

    _this.state = { orientation: 'front', className: '' };
    return _this;
  }

  _createClass(Card, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          _props$containerWidth = _props.containerWidth,
          containerWidth = _props$containerWidth === undefined ? 0 : _props$containerWidth,
          _props$containerHeigh = _props.containerHeight,
          containerHeight = _props$containerHeigh === undefined ? 0 : _props$containerHeigh,
          _props$cardIndex = _props.cardIndex,
          cardIndex = _props$cardIndex === undefined ? 0 : _props$cardIndex,
          _props$zIndex = _props.zIndex,
          zIndex = _props$zIndex === undefined ? 1 : _props$zIndex,
          _props$uncover = _props.uncover,
          uncover = _props$uncover === undefined ? false : _props$uncover,
          _props$orientation = _props.orientation,
          orientation = _props$orientation === undefined ? 'front' : _props$orientation,
          _props$card = _props.card,
          card = _props$card === undefined ? null : _props$card;

      //calculate each card position

      var stackGap = 4 * cardIndex;
      var offsetX = (containerWidth - _styles.cardStyle.width) / 2 - stackGap;
      var offsetY = (containerHeight - _styles.cardStyle.height) / 2 - stackGap;

      var bgColor = uncover ? 'white' : 'red';
      var extraStyle = {
        top: offsetY,
        left: offsetX,
        zIndex: zIndex,
        backgroundColor: bgColor
      };
      var concatStyle = Object.assign({}, _styles.cardStyle, extraStyle);
      return _react2.default.createElement(
        "div",
        { style: concatStyle, onClick: this._flipCard, className: this.state.className, onAnimationEnd: this._animeEnd },
        card && uncover ? card[this.state.orientation] : null
      );
    }
  }]);

  return Card;
}(_react.Component);

Card.displayName = "Card";
exports.default = Card;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Input = function (_Component) {
  _inherits(Input, _Component);

  function Input(props) {
    _classCallCheck(this, Input);

    var _this = _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).call(this, props));

    _this._onSubmit = function (ev) {
      var keyCode = ev.keyCode || ev.which;
      if (keyCode == 13) {
        if (_this.props.onEntry && typeof _this.props.onEntry === 'function') {
          _this.props.onEntry(_this.state.text);

          if (_this.props.clearOnSubmit) {
            _this.setState({ text: "" });
          }
        }
      }
    };

    _this._onChange = function (ev) {
      _this.setState({ text: ev.target.value });

      if (_this.props.onChange) {
        _this.props.onChange(ev.target.value);
      }
    };

    _this.state = { text: "" }; //a controlled component
    return _this;
  }

  //add this to update input field (e.g clear it after submit)


  _createClass(Input, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.value != undefined) {
        this.setState({ text: nextProps.value });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          _props$placeholder = _props.placeholder,
          placeholder = _props$placeholder === undefined ? '' : _props$placeholder,
          _props$type = _props.type,
          type = _props$type === undefined ? '' : _props$type,
          _props$name = _props.name,
          name = _props$name === undefined ? '' : _props$name,
          _props$className = _props.className,
          className = _props$className === undefined ? '' : _props$className,
          _props$style = _props.style,
          style = _props$style === undefined ? {} : _props$style,
          _props$onClick = _props.onClick,
          onClick = _props$onClick === undefined ? null : _props$onClick,
          _props$readOnly = _props.readOnly,
          readOnly = _props$readOnly === undefined ? false : _props$readOnly;


      var localStyle = {
        container: {
          display: 'flex',
          flexDirection: 'row'
        },
        input: {
          flex: '1'
        }
      };

      var concatStyle = Object.assign({}, style, localStyle.input);

      return _react2.default.createElement(
        "div",
        { style: localStyle.container },
        _react2.default.createElement("input", {
          placeholder: placeholder,
          type: type,
          name: name,
          className: className,
          style: concatStyle,
          ref: "inputRef" //use ref if not capture state change
          , onChange: this._onChange,
          onKeyUp: this._onSubmit,
          onClick: onClick,
          readOnly: readOnly,
          value: readOnly ? this.props.value : this.state.text //if passed a value then it should be read-only
        })
      );
    }
  }]);

  return Input;
}(_react.Component);

// Default props for custom attributes


Input.defaultProps = { clearOnSubmit: true };

exports.default = Input;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Input = __webpack_require__(19);

var _Input2 = _interopRequireDefault(_Input);

var _NormalText = __webpack_require__(1);

var _NormalText2 = _interopRequireDefault(_NormalText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LabeledInput = function (_Component) {
  _inherits(LabeledInput, _Component);

  function LabeledInput() {
    _classCallCheck(this, LabeledInput);

    return _possibleConstructorReturn(this, (LabeledInput.__proto__ || Object.getPrototypeOf(LabeledInput)).apply(this, arguments));
  }

  _createClass(LabeledInput, [{
    key: "render",
    value: function render() {
      var localStyle = {
        container: {
          display: 'flex',
          flexDirection: 'row'
        }
      };

      return _react2.default.createElement(
        "div",
        { style: localStyle.container },
        _react2.default.createElement(
          _NormalText2.default,
          null,
          this.props.label,
          ":"
        ),
        _react2.default.createElement(_Input2.default, _extends({
          type: "text"
        }, this.props))
      );
    }
  }]);

  return LabeledInput;
}(_react.Component);

exports.default = LabeledInput;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Snackbar = function (_Component) {
  _inherits(Snackbar, _Component);

  function Snackbar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Snackbar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Snackbar.__proto__ || Object.getPrototypeOf(Snackbar)).call.apply(_ref, [this].concat(args))), _this), _this._handleClick = function () {
      _this.props.handleClick();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Snackbar, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      console.log('snackbar will unmount');
    }
  }, {
    key: 'render',
    value: function render() {
      var _style = {
        display: this.props.display ? 'block' : 'none'
      };

      return _react2.default.createElement(
        'div',
        { id: 'snackbar', style: _style, onClick: this._handleClick },
        this.props.children
      );
    }
  }]);

  return Snackbar;
}(_react.Component);

Snackbar.defaultProps = { dwellTime: 1000 };

exports.default = Snackbar;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _md = __webpack_require__(4);

var _md2 = _interopRequireDefault(_md);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Card = function () {
  function Card(front, back, deckID) {
    _classCallCheck(this, Card);

    this.front = front;
    this.back = back;
    this.deckID = deckID;
    this.id = (0, _md2.default)(front + back + deckID);
  }

  _createClass(Card, [{
    key: "setFromObject",
    value: function setFromObject(ob) {
      this.front = ob.front;
      this.back = ob.back;
      this.deckID = ob.deckID;
      this.id = ob.id;
    }
  }, {
    key: "isOneSideEmpty",
    value: function isOneSideEmpty() {
      var emptyStringPattern = /^\s*$/; // has zero or more space and has only space
      return emptyStringPattern.test(this.front) || emptyStringPattern.test(this.back);
    }
  }], [{
    key: "createInstance",
    value: function createInstance(ob) {
      //to save lines of code when creating a new card
      var c = new Card(ob.front, ob.back, ob.deckID);
      c.setFromObject(ob);
      return c;
    }
  }]);

  return Card;
}();

exports.default = Card;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _md = __webpack_require__(4);

var _md2 = _interopRequireDefault(_md);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Deck = function () {
  function Deck(name) {
    _classCallCheck(this, Deck);

    this.name = name;
    this.id = (0, _md2.default)("deck:" + name);
    this.cards = [];
  }

  _createClass(Deck, [{
    key: "setFromObject",
    value: function setFromObject(ob) {
      this.name = ob.name;
      this.cards = ob.cards;
      this.id = ob.id;
    }
  }, {
    key: "findCard",
    value: function findCard(cardID) {
      return this.cards.find(function (card) {
        return card.id === cardID;
      });
    }
  }, {
    key: "addCard",
    value: function addCard(card) {
      if (this.findCard(card.id)) {
        throw "card already exists";
      }
      if (card.isOneSideEmpty()) {
        throw "one side of the card is empty";
      }
      this.cards = this.cards.concat(card);
    }
  }, {
    key: "isDeckNameEmpty",
    value: function isDeckNameEmpty() {
      var emptyStringPattern = /^\s*$/; // has zero or more space and has only space
      return emptyStringPattern.test(this.name);
    }
  }], [{
    key: "createInstance",
    value: function createInstance(ob) {
      var d = new Deck(ob.name);
      d.setFromObject(ob);
      return d;
    }
  }]);

  return Deck;
}();

exports.default = Deck;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _allRoutes = __webpack_require__(31);

var _allRoutes2 = _interopRequireDefault(_allRoutes);

var _reactRedux = __webpack_require__(5);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Layout = __webpack_require__(30);

var _Layout2 = _interopRequireDefault(_Layout);

var _DeckPage = __webpack_require__(17);

var _DeckPage2 = _interopRequireDefault(_DeckPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//import {React, Component} from 'react';//wrong


// const reduxRoutes = (store, Router, pathname, context) => {
// const reduxRoutes = (store, Router, more) => {
//     <Provider store={store}>
//         {/* <Router location={pathname} context={context}> */}
//         <Router {...more}>
//             {routes}
//         </Router>
//     </Provider>
// }

var _require = __webpack_require__(28),
    withRouter = _require.withRouter;

var _require2 = __webpack_require__(6),
    Route = _require2.Route,
    Switch = _require2.Switch;

var withRoutes = function withRoutes(Router, store) {
    // class extends Component {
    return function (_Component) {
        _inherits(_class, _Component);

        function _class() {
            _classCallCheck(this, _class);

            return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
        }

        _createClass(_class, [{
            key: 'render',
            // don't forget return
            value: function render() {
                return _react2.default.createElement(
                    _reactRedux.Provider,
                    { store: store },
                    _react2.default.createElement(
                        Router,
                        this.props,
                        _allRoutes2.default
                    )
                );
            }
        }]);

        return _class;
    }(_react.Component);
};

module.exports = withRoutes;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// import { fetchCards } from './api/cards-api';
var DeckPage = __webpack_require__(17);
var NewCardPage = __webpack_require__(42);
var StudyPage = __webpack_require__(47);
var ReviewPage = __webpack_require__(46);

var switchRoutes = [{
  path: '/',
  exact: true,
  component: DeckPage
  // fetchInitialData: (path = '') => fetchCards(path.split('/').pop()),
}, {
  path: '/createCard/:deckID',
  component: NewCardPage
}, {
  path: '/study',
  component: StudyPage
}, {
  path: '/review',
  component: ReviewPage
}];

exports.default = switchRoutes;

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("babel-register");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Logo = function (_Component) {
  _inherits(Logo, _Component);

  function Logo() {
    _classCallCheck(this, Logo);

    return _possibleConstructorReturn(this, (Logo.__proto__ || Object.getPrototypeOf(Logo)).apply(this, arguments));
  }

  _createClass(Logo, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "svg",
        {
          width: "200",
          height: "100",
          viewBox: "0 0 200 350",
          id: "svgLogo"
        },
        _react2.default.createElement(
          "g",
          null,
          _react2.default.createElement("rect", {
            style: {
              fill: 'lightblue',
              fillOpacity: 1,
              stroke: '',
              strokeWidth: 2,
              strokeMiterlimit: 4,
              strokeDasharray: 'none',
              strokeOpacity: 1
            },
            id: "OL",
            width: "211.28172",
            height: "199.94244",
            x: "5.4841413",
            y: "37" }),
          _react2.default.createElement("rect", {
            id: "LV",
            width: "41.577381",
            height: "153.45834",
            x: "24.190477",
            y: "61.898811",
            style: {
              strokeWidth: 0.37226507,
              fill: 'red'
            } }),
          _react2.default.createElement("rect", {
            id: "LH",
            width: "146.65477",
            height: "19.654755",
            x: "24.190462",
            y: "195.70238",
            style: {
              strokeWidth: 0.31524804,
              fill: 'red'
            } }),
          _react2.default.createElement("rect", {
            id: "QH",
            width: "99.029762",
            height: "18.142857",
            x: "71.815475",
            y: "61.898819",
            style: {
              strokeWidth: 0.25593761
            } }),
          _react2.default.createElement("rect", {
            id: "QV",
            width: "20.410706",
            height: "130",
            x: "150.43452",
            y: "61.898819",
            style: {
              strokeWidth: 0.23363407
            } }),
          _react2.default.createElement("path", {
            id: "QA",
            style: {
              fill: 'none',
              fillOpacity: 1,
              stroke: 'yellow',
              strokeWidth: 19.21442986,
              strokeMiterlimit: 4,
              strokeDasharray: 'none',
              strokeOpacity: 1
            },
            type: "arc",
            cx: "159.50595",
            cy: "131.14861",
            rx: "35.289242",
            ry: "33.480274",
            d: "m 194.79519,131.14861 a 35.289242,33.480274 0 0 1 -17.7583,29.05677 35.289242,33.480274 0 0 1 -35.4022,-0.18722 35.289242,33.480274 0 0 1 -17.41579,-29.24278"
          })
        )
      );
    }
  }]);

  return Logo;
}(_react.Component);

Logo.displayName = "Logo";
exports.default = Logo;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Logo = __webpack_require__(29);

var _Logo2 = _interopRequireDefault(_Logo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Navbar = function (_Component) {
  _inherits(Navbar, _Component);

  function Navbar(props) {
    _classCallCheck(this, Navbar);

    var _this = _possibleConstructorReturn(this, (Navbar.__proto__ || Object.getPrototypeOf(Navbar)).call(this, props));

    _this._handleScroll = function (evt) {
      //console.log('window.scrollTop ', window.pageYOffset);
      var currentScrollY = window.pageYOffset; //get scroll top position
      //compare current scroll position with previous (differ by 1)
      if (currentScrollY > _this.prevScrollY) {
        _this.setState({ navbarClass: "hide" });
      } else {
        _this.setState({ navbarClass: "navbar" });
      }

      _this.prevScrollY = currentScrollY;
    };

    _this.state = {
      navbarClass: "navbar"
    };
    _this.prevScrollY = 0;
    return _this;
  }

  _createClass(Navbar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      //scroll event on window
      window.addEventListener('scroll', this._handleScroll);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this._handleScroll);
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: this.state.navbarClass },
        this.props.children
      );
    }
  }]);

  return Navbar;
}(_react.Component);

var Footer = function (_Component2) {
  _inherits(Footer, _Component2);

  function Footer() {
    var _ref;

    var _temp, _this2, _ret;

    _classCallCheck(this, Footer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = Footer.__proto__ || Object.getPrototypeOf(Footer)).call.apply(_ref, [this].concat(args))), _this2), _this2._displayCopyRight = function () {
      return _react2.default.createElement(
        "span",
        { style: { display: 'inline-block', paddingRight: '5px' } },
        "2019 - " + new Date().getFullYear()
      );
    }, _temp), _possibleConstructorReturn(_this2, _ret);
  }

  _createClass(Footer, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "footer",
        { style: { display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' } },
        _react2.default.createElement(
          "div",
          { style: { color: 'white', fontSize: '20px' } },
          "\xA9 ",
          this._displayCopyRight(),
          _react2.default.createElement(
            "a",
            { href: "javascript:void();", target: "_blank", style: { textDecoration: 'none', color: 'white' }, className: "top_tooltip" },
            "Q.M. Long"
          )
        ),
        _react2.default.createElement(
          "h1",
          null,
          "Footer Grid"
        )
      );
    }
  }]);

  return Footer;
}(_react.Component);

var Layout = function (_Component3) {
  _inherits(Layout, _Component3);

  function Layout() {
    _classCallCheck(this, Layout);

    return _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).apply(this, arguments));
  }

  _createClass(Layout, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "layout" },
        _react2.default.createElement(
          Navbar,
          null,
          _react2.default.createElement(_Logo2.default, null),
          _react2.default.createElement(
            "ul",
            null,
            _react2.default.createElement(
              "li",
              null,
              _react2.default.createElement(
                "a",
                { href: "#" },
                "Home"
              )
            ),
            _react2.default.createElement(
              "li",
              null,
              _react2.default.createElement(
                "a",
                { href: "#" },
                "About"
              )
            ),
            _react2.default.createElement(
              "li",
              null,
              _react2.default.createElement(
                "a",
                { href: "#" },
                "Games"
              )
            ),
            _react2.default.createElement(
              "li",
              null,
              _react2.default.createElement(
                "a",
                { href: "#" },
                "Portfolio"
              )
            ),
            _react2.default.createElement(
              "li",
              null,
              _react2.default.createElement(
                "a",
                { href: "#" },
                "Contact"
              )
            )
          )
        ),
        _react2.default.createElement(
          "section",
          null,
          this.props.children
        ),
        _react2.default.createElement(Footer, null)
      );
    }
  }]);

  return Layout;
}(_react.Component);

Layout.displayName = "Layout";


module.exports = Layout;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _switchRoutes = __webpack_require__(25);

var _switchRoutes2 = _interopRequireDefault(_switchRoutes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import Navbar from './components/Navbar';
// import NoMatch from './components/NoMatch';

var _require = __webpack_require__(28),
    withRouter = _require.withRouter;

var _require2 = __webpack_require__(6),
    Route = _require2.Route,
    Switch = _require2.Switch;

//const Layout = withRouter(require('../components/Layout/index.jsx'));


var Layout = withRouter(__webpack_require__(30));

var DeckPage = __webpack_require__(17); //test

var routes = _react2.default.createElement(
  Layout,
  null,
  _react2.default.createElement(
    Switch,
    null,
    _switchRoutes2.default.map(
    // // ( { path, exact, component: Component, ...rest } ) => ( // param = props, call with ...props spread expension
    // ( { path, exact, component: Component, rest } ) => (
    //   <Route key={path} path={path} exact={exact} component={(props) => (<Component {...props} {...rest} />)} />
    // )

    function (_ref) {
      var path = _ref.path,
          exact = _ref.exact,
          Component = _ref.component;
      return _react2.default.createElement(Route, { key: path, path: path, exact: exact, component: function component(props) {
          return _react2.default.createElement(Component, props);
        } });
    }

    // ( { path, exact, component } ) => ( //--wrong
    //   <Route key={path} path={path} exact={exact} component={(props) => (<component {...props} />)} />
    // )
    )
  )
);

exports.default = routes;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QuizCardView = exports.mkReviews = undefined;

var _lodash = __webpack_require__(39);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var QuizCardView = function QuizCardView(orientation, cardID, prompt, correctAnswer, answers) {
  _classCallCheck(this, QuizCardView);

  this.orientation = orientation;
  this.cardID = cardID;
  this.prompt = prompt;
  this.correctAnswer = correctAnswer;
  this.answers = answers;
};

function mkReviews(cards) {
  var makeReviews = function makeReviews(sideOne, sideTwo) {
    return cards.map(function (card) {
      var others = cards.filter(function (other) {
        return other.id !== card.id;
      });

      var answers = _lodash2.default.shuffle([card[sideTwo]].concat(_lodash2.default.sampleSize(_lodash2.default.map(others, sideTwo), 3)));

      return new QuizCardView(sideOne, card.id, card[sideOne], card[sideTwo], answers);
    });
  };

  var reviews = makeReviews("front", "back").concat(makeReviews("back", "front"));
  return _lodash2.default.shuffle(reviews);
}

exports.mkReviews = mkReviews;
exports.QuizCardView = QuizCardView;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MockDeck = exports.MockDecks = exports.MockCard = exports.MockCards = exports.MockReviews = undefined;

var _Card = __webpack_require__(22);

var _Card2 = _interopRequireDefault(_Card);

var _Deck = __webpack_require__(23);

var _Deck2 = _interopRequireDefault(_Deck);

var _QuizCardView = __webpack_require__(32);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MockCards = [new _Card2.default("der Hund", "the dog", "fakeDeckID"), new _Card2.default("das Kind", "the child", "fakeDeckID"), new _Card2.default("die Frau", "the woman", "fakeDeckID"), new _Card2.default("die Katze", "the cat", "fakeDeckID")];

var MockCard = MockCards[0];
var MockReviews = (0, _QuizCardView.mkReviews)(MockCards);

var MockDecks0 = [new _Deck2.default("Chinese")];
var MockDecks1 = [new _Deck2.default("French")];
var MockDecks2 = [new _Deck2.default("German1"), new _Deck2.default("German2")];
var MockDecks3 = [new _Deck2.default("Spanish1"), new _Deck2.default("Spanish2"), new _Deck2.default("Spanish3")];

MockDecks0.map(function (deck) {
  deck.addCard(new _Card2.default("nihou", "how are you", deck.id));
  return deck;
});

MockDecks1.map(function (deck) {
  deck.addCard(new _Card2.default("chien", "Dog", deck.id));
  deck.addCard(new _Card2.default("chat", "Cat", deck.id));
  deck.addCard(new _Card2.default("pain", "Bread", deck.id));
  return deck;
});

MockDecks2.map(function (deck) {
  deck.addCard(new _Card2.default("der Hund", "the dog", deck.id));
  deck.addCard(new _Card2.default("die Katze", "the cat", deck.id));
  deck.addCard(new _Card2.default("das Brot", "the bread", deck.id));
  deck.addCard(new _Card2.default("die Frau", "the woman", deck.id));
  return deck;
});

MockDecks2[0].addCard(new _Card2.default("Auf Wiedersehen", "goodbye", MockDecks2[0].id));
MockDecks2[0].addCard(new _Card2.default("danken", "thank", MockDecks2[0].id));

MockDecks3.map(function (deck) {
  deck.addCard(new _Card2.default("el rey", "the king", deck.id));
  deck.addCard(new _Card2.default("la reina", "the queen", deck.id));
  return deck;
});

var MockDecks = [].concat(MockDecks0, MockDecks1, MockDecks2, MockDecks3);

var MockDeck = MockDecks[0];

exports.MockReviews = MockReviews;
exports.MockCards = MockCards;
exports.MockCard = MockCard;
exports.MockDecks = MockDecks;
exports.MockDeck = MockDeck;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _types = __webpack_require__(13);

function findDeck(decks, id) {
    return decks.find(function (d) {
        return d.id === id;
    });
}

var reducer = function reducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments[1];
    var decks = arguments[2];

    switch (action.type) {
        case _types.STUDY_DECK:
            return findDeck(decks, action.data.deckID).cards;
    }
    return state;
};

exports.default = reducer;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _types = __webpack_require__(13);

var _decks = __webpack_require__(38);

function decksWithNewCard(oldDecks, card) {
  var newState = oldDecks.map(function (deck) {
    if (deck.id === card.deckID) {
      try {
        deck.addCard(card);
        return deck;
      } catch (e) {
        throw e;
      }
    } else {
      return deck;
    }
  });
  saveDecks(newState); //save to localStorage for now
  return newState;
}

function saveDecks(state) {
  (0, _decks.writeDecks)(state);
  return state;
}

function findDeck(decks, id) {
  //also used in reducer/reviews.js and cards.js
  return decks.find(function (d) {
    return d.id === id;
  });
}

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  switch (action.type) {
    case _types.LOAD_DATA:
      return action.data;
    case _types.ADD_DECK:
      if (findDeck(state, action.data.id)) {
        throw "deck already exists";
      }
      if (action.data.isDeckNameEmpty()) {
        throw "deck name is empty";
      }
      var newState = state.concat(action.data);
      saveDecks(newState);
      return newState;
    case _types.DELETE_DECK:
      {
        var _newState = state.filter(function (deck) {
          return deck.id !== action.data.deckID;
        });
        saveDecks(_newState);
        return _newState;
      }
    case _types.ADD_CARD:
      return decksWithNewCard(state, action.data);

  }
  return state;
};

exports.default = reducer;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Mocks = __webpack_require__(33);

var _decks = __webpack_require__(35);

var _decks2 = _interopRequireDefault(_decks);

var _cards = __webpack_require__(34);

var _cards2 = _interopRequireDefault(_cards);

var _reviews = __webpack_require__(37);

var _reviews2 = _interopRequireDefault(_reviews);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = function initialState() {
  return { decks: _Mocks.MockDecks, currentReview: (0, _reviews.mkReviewState)(), currentCards: [] };
};

module.exports = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState();
  var action = arguments[1];

  var decks = (0, _decks2.default)(state.decks, action);
  var cards = (0, _cards2.default)(state.currentCards, action, decks);

  return {
    decks: decks,
    currentReview: (0, _reviews2.default)(state.currentReview, action, decks),
    currentCards: cards
  };
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mkReviewState = undefined;

var _QuizCardView = __webpack_require__(32);

var _types = __webpack_require__(13);

var mkReviewState = exports.mkReviewState = function mkReviewState() {
  var deckID = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var questions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var currentQuestionIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

  return { deckID: deckID, questions: questions, currentQuestionIndex: currentQuestionIndex };
};

function findDeck(decks, id) {
  return decks.find(function (d) {
    return d.id === id;
  });
}

function generateReviews(deck) {
  return mkReviewState(deck.id, (0, _QuizCardView.mkReviews)(deck.cards), 0);
}

function nextReview(state) {
  return mkReviewState(state.deckID, state.questions, state.currentQuestionIndex + 1);
}

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : mkReviewState();
  var action = arguments[1];
  var decks = arguments[2];

  switch (action.type) {
    case _types.REVIEW_DECK:
      return generateReviews(findDeck(decks, action.data.deckID));
    case _types.NEXT_REVIEW:
      return nextReview(state);
    case _types.STOP_REVIEW:
      return mkReviewState(); //reset review
  }
  return state;
};

exports.default = reducer;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.writeDecks = exports.readDecks = exports.DECK_KEY = undefined;

var _Deck = __webpack_require__(23);

var _Deck2 = _interopRequireDefault(_Deck);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DECK_KEY = exports.DECK_KEY = "cardgame:decks";

async function read(key, deserializer) {
  try {
    var val = await localStorage.getItem(key);
    if (val !== null) {
      var readValue = JSON.parse(val).map(function (serialized) {
        return deserializer(serialized);
      });
      return readValue;
    } else {
      console.info(key + " not found on disk.");
      return [];
    }
  } catch (error) {
    console.warn("localStorage error: ", error.message);
  }
}

async function write(key, item) {
  try {
    await localStorage.setItem(key, JSON.stringify(item));
  } catch (error) {
    console.error("localStorage error: ", error.message);
  }
}

var readDecks = exports.readDecks = function readDecks() {
  return read(DECK_KEY, _Deck2.default.createInstance);
};

var writeDecks = exports.writeDecks = function writeDecks(decks) {
  return write(DECK_KEY, decks);
};

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styles = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HeadingText = function (_Component) {
  _inherits(HeadingText, _Component);

  function HeadingText() {
    _classCallCheck(this, HeadingText);

    return _possibleConstructorReturn(this, (HeadingText.__proto__ || Object.getPrototypeOf(HeadingText)).apply(this, arguments));
  }

  _createClass(HeadingText, [{
    key: "render",
    value: function render() {
      var width = window.screen.width;
      var concatStyles = Object.assign({}, this.props.style, { fontSize: width / _styles.scalingFactors.big });

      return _react2.default.createElement(
        "span",
        {
          style: concatStyles
        },
        this.props.children
      );
    }
  }]);

  return HeadingText;
}(_react.Component);

HeadingText.displayName = "HeadingText";
exports.default = HeadingText;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _creators = __webpack_require__(12);

var _reactRedux = __webpack_require__(5);

var _Button = __webpack_require__(3);

var _Button2 = _interopRequireDefault(_Button);

var _LabeledInput = __webpack_require__(20);

var _LabeledInput2 = _interopRequireDefault(_LabeledInput);

var _NormalText = __webpack_require__(1);

var _NormalText2 = _interopRequireDefault(_NormalText);

var _Input = __webpack_require__(19);

var _Input2 = _interopRequireDefault(_Input);

var _styles = __webpack_require__(2);

var _Snackbar = __webpack_require__(21);

var _Snackbar2 = _interopRequireDefault(_Snackbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NewCard = function (_Component) {
  _inherits(NewCard, _Component);

  function NewCard(props) {
    _classCallCheck(this, NewCard);

    var _this = _possibleConstructorReturn(this, (NewCard.__proto__ || Object.getPrototypeOf(NewCard)).call(this, props));

    _this._deckID = function () {
      return _this.props.match.params.deckID;
    };

    _this._handleFront = function (value) {
      _this.setState({ front: value });
    };

    _this._handleBack = function (value) {
      _this.setState({ back: value });
    };

    _this._createCard = function () {
      //if card exists, throw exception and catch it
      try {
        _this.props.createCard(_this.state.front, _this.state.back, _this._deckID());

        //clear front back input fields after adding card 
        _this.setState({ front: '', back: '', error: null, showMsg: false });

        if (!_this.props.history.location.pathname === "/createCard/" + _this._deckID()) {
          _this.props.history.push("/createCard/" + _this._deckID());
        }
      } catch (e) {
        _this.setState({ error: e, showMsg: true });
      }
    };

    _this._closeMsg = function () {
      _this.setState({ showMsg: false });
    };

    _this._reviewDeck = function () {
      _this.props.reviewDeck(_this._deckID());
      _this.props.history.push('/review');
    };

    _this._doneCreating = function () {
      _this.props.history.push('/');
    };

    _this.state = { front: "", back: "", error: null, showMsg: false };
    return _this;
  }

  _createClass(NewCard, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { id: "newCardPage" },
        _react2.default.createElement(
          "h1",
          null,
          "New Card Page"
        ),
        _react2.default.createElement(
          "form",
          { id: "createCard" },
          _react2.default.createElement(_LabeledInput2.default, {
            label: "Front",
            onChange: this._handleFront,
            value: this.state.front,
            className: "nameField wideButton fontNormal"
          }),
          _react2.default.createElement(_LabeledInput2.default, {
            label: "Back",
            onChange: this._handleBack,
            value: this.state.back,
            className: "nameField wideButton fontNormal"
          }),
          _react2.default.createElement(_Input2.default, { type: "button",
            style: _styles.inputButtonStyle //in-line style to override bootstrap.css
            , onClick: this._createCard,
            value: "Create Card",
            readOnly: true //button value
          }),
          this.state.error ? _react2.default.createElement(
            _Snackbar2.default,
            { display: this.state.error && this.state.showMsg, handleClick: this._closeMsg, dwellTime: 1000 },
            this.state.error
          ) : null
        ),
        _react2.default.createElement(
          "div",
          { style: { flexDirection: "row" } },
          _react2.default.createElement(
            _Button2.default,
            { onClick: this._doneCreating },
            _react2.default.createElement(
              _NormalText2.default,
              null,
              "Done"
            )
          ),
          _react2.default.createElement(
            _Button2.default,
            { onClick: this._reviewDeck },
            _react2.default.createElement(
              _NormalText2.default,
              null,
              "Review Deck"
            )
          )
        )
      );
    }
  }]);

  return NewCard;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return { decks: state.decks };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    createCard: function createCard(front, back, deckID) {
      dispatch((0, _creators.addCard)(front, back, deckID));
    },
    reviewDeck: function reviewDeck(deckID) {
      dispatch((0, _creators.reviewDeck)(deckID));
    }
  };
};

module.exports = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(NewCard);

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _HeadingText = __webpack_require__(41);

var _HeadingText2 = _interopRequireDefault(_HeadingText);

var _ReviewButtons = __webpack_require__(44);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var QuizView = function (_Component) {
  _inherits(QuizView, _Component);

  _createClass(QuizView, [{
    key: "_getInitialState",
    value: function _getInitialState() {
      return { wasReviewed: false, wasCorrect: false, id: null };
    }
  }]);

  function QuizView(props) {
    _classCallCheck(this, QuizView);

    var _this = _possibleConstructorReturn(this, (QuizView.__proto__ || Object.getPrototypeOf(QuizView)).call(this, props));

    _this._continue = function () {
      _this.setState(_this._getInitialState());
      _this.props.continue();
    };

    _this._selectAnswer = function (correct, id) {
      _this.props.onReview(correct);
      _this.setState({ wasReviewed: true, wasCorrect: correct, wasClicked: id });
    };

    _this.state = _this._getInitialState();
    return _this;
  }

  _createClass(QuizView, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "div",
          { className: "quizView" },
          _react2.default.createElement(
            _HeadingText2.default,
            null,
            "Question: ",
            this.props.prompt
          )
        ),
        (0, _ReviewButtons.mkAnswerButtons)(this.props.answers, this.props.correctAnswer, this.state.wasReviewed, this.state.wasCorrect, this._selectAnswer, this.state.wasClicked),
        (0, _ReviewButtons.mkContinueQuitButtons)(this.state.wasReviewed, this.state.wasCorrect, this._continue, this.props.quit)
      );
    }
  }]);

  return QuizView;
}(_react.Component);

QuizView.displayName = "QuizView";


module.exports = QuizView;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Button = __webpack_require__(3);

var _Button2 = _interopRequireDefault(_Button);

var _NormalText = __webpack_require__(1);

var _NormalText2 = _interopRequireDefault(_NormalText);

var _styles = __webpack_require__(2);

var _md = __webpack_require__(4);

var _md2 = _interopRequireDefault(_md);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ContinueButton = function (_Component) {
  _inherits(ContinueButton, _Component);

  function ContinueButton() {
    _classCallCheck(this, ContinueButton);

    return _possibleConstructorReturn(this, (ContinueButton.__proto__ || Object.getPrototypeOf(ContinueButton)).apply(this, arguments));
  }

  _createClass(ContinueButton, [{
    key: "render",
    value: function render() {
      var text = this.props.wasCorrect ? "Correct! Next card?" : "Oops, not quite. Next card?";
      return _react2.default.createElement(
        _Button2.default,
        { onClick: this.props.onClick, style: { backgroundColor: _styles.colors.pink } },
        _react2.default.createElement(
          _NormalText2.default,
          null,
          text
        )
      );
    }
  }]);

  return ContinueButton;
}(_react.Component);

function mkContinueQuitButtons(wasReviewed, wasCorrect, continueFunc, quitFunc) {
  if (wasReviewed) {
    return _react2.default.createElement(ContinueButton, { onClick: continueFunc, wasCorrect: wasCorrect });
  } else {
    return _react2.default.createElement(
      _Button2.default,
      { onClick: quitFunc, style: { backgroundColor: _styles.colors.yellow } },
      _react2.default.createElement(
        _NormalText2.default,
        null,
        "Stop Quiz"
      )
    );
  }
}

function mkAnswerButtons(answers, correctAnswer, wasReviewed, wasCorrect, selectAnswerFunc, wasClicked) {
  if (!answers) return null;

  return answers.map(function (a, aIndex) {
    var isCorrectAnswer = a === correctAnswer;
    var buttonStyle = styles.options;

    var myID = '_' + (0, _md2.default)(a);
    if (wasReviewed && wasClicked === myID) {
      if (wasCorrect) {
        buttonStyle = Object.assign({}, buttonStyle, styles.rightAnswer);
      } else {
        buttonStyle = Object.assign({}, buttonStyle, styles.wrongAnswer);
      }
    }

    return _react2.default.createElement(
      "div",
      { key: a, className: "answerOptions" },
      _react2.default.createElement(
        _Button2.default,
        {
          disabled: wasReviewed,
          style: buttonStyle,
          id: myID,
          onClick: function onClick(thisID) {
            selectAnswerFunc(isCorrectAnswer, thisID);
          }
        },
        _react2.default.createElement(
          _NormalText2.default,
          null,
          aIndex + 1,
          ". ",
          a
        )
      )
    );
  });
}

var styles = {
  options: { backgroundColor: "#FFFFFF" },
  continueButton: { backgroundColor: _styles.colors.tan },
  rightAnswer: { backgroundColor: _styles.colors.green },
  wrongAnswer: { backgroundColor: _styles.colors.pink }
};

module.exports = { mkContinueQuitButtons: mkContinueQuitButtons, mkAnswerButtons: mkAnswerButtons };

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mkReviewSummary = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _HeadingText = __webpack_require__(41);

var _HeadingText2 = _interopRequireDefault(_HeadingText);

var _NormalText = __webpack_require__(1);

var _NormalText2 = _interopRequireDefault(_NormalText);

var _Button = __webpack_require__(3);

var _Button2 = _interopRequireDefault(_Button);

var _styles = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mkReviewSummary(percentCorrect, quitFunc) {
  return _react2.default.createElement(
    "div",
    { style: styles.done },
    _react2.default.createElement(
      _HeadingText2.default,
      { style: styles.alternate },
      "Reviews cleared!"
    ),
    _react2.default.createElement(
      _NormalText2.default,
      { style: styles.alternate },
      Math.round(percentCorrect * 100),
      "% correct"
    ),
    _react2.default.createElement(
      _Button2.default,
      { onClick: quitFunc, style: styles.doneButton },
      _react2.default.createElement(
        _NormalText2.default,
        null,
        "Done"
      )
    )
  );
}

var styles = {
  alternate: { color: "#FFFFFF" },
  done: { display: 'flex', flexDirection: 'column', alignItems: "center" },
  doneButton: { backgroundColor: _styles.colors.tan }
};

exports.mkReviewSummary = mkReviewSummary;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(5);

var _ReviewSummary = __webpack_require__(45);

var _styles = __webpack_require__(2);

var _creators = __webpack_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var QuizView = __webpack_require__(43);

var ReviewScreen = function (_Component) {
  _inherits(ReviewScreen, _Component);

  function ReviewScreen(props) {
    _classCallCheck(this, ReviewScreen);

    var _this = _possibleConstructorReturn(this, (ReviewScreen.__proto__ || Object.getPrototypeOf(ReviewScreen)).call(this, props));

    _this._onReview = function (correct) {
      if (correct) {
        _this.setState({ numCorrect: _this.state.numCorrect + 1 });
      }
      _this.setState({ numReviewed: _this.state.numReviewed + 1 });
    };

    _this._nextReview = function () {
      _this.props.nextReview();
    };

    _this._quitReviewing = function () {
      _this.props.stopReview();
      _this.props.history.goBack();
    };

    _this.state = { numReviewed: 0, numCorrect: 0 };
    return _this;
  }

  _createClass(ReviewScreen, [{
    key: "_contents",
    value: function _contents() {
      if (!this.props.reviews || this.props.reviews.length === 0) {
        return null;
      }

      if (this.props.currentReview < this.props.reviews.length) {
        return _react2.default.createElement(QuizView, _extends({
          onReview: this._onReview,
          "continue": this._nextReview,
          quit: this._quitReviewing
        }, this.props.reviews[this.props.currentReview]));
      } else {
        var percent = this.state.numCorrect / this.state.numReviewed;
        return (0, _ReviewSummary.mkReviewSummary)(percent, this._quitReviewing);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { style: styles.container },
        this._contents()
      );
    }
  }]);

  return ReviewScreen;
}(_react.Component);

ReviewScreen.displayName = "ReviewScreen";


var styles = {
  container: { backgroundColor: _styles.colors.blue, flex: 1, paddingTop: 24 }
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    nextReview: function nextReview() {
      dispatch((0, _creators.nextReview)());
    },
    stopReview: function stopReview() {
      dispatch((0, _creators.stopReview)());
    }
  };
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    reviews: state.currentReview.questions,
    currentReview: state.currentReview.currentQuestionIndex
  };
};

module.exports = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ReviewScreen);

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(5);

var _creators = __webpack_require__(12);

var _Card = __webpack_require__(18);

var _Card2 = _interopRequireDefault(_Card);

var _Button = __webpack_require__(3);

var _Button2 = _interopRequireDefault(_Button);

var _NormalText = __webpack_require__(1);

var _NormalText2 = _interopRequireDefault(_NormalText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CardsScreen = function (_Component) {
  _inherits(CardsScreen, _Component);

  function CardsScreen(props) {
    _classCallCheck(this, CardsScreen);

    var _this = _possibleConstructorReturn(this, (CardsScreen.__proto__ || Object.getPrototypeOf(CardsScreen)).call(this, props));

    _this._review = function () {
      _this.props.reviewDeck(_this.props.location.state.deckID);
      _this.props.history.push('review');
    };

    _this.state = { cardFigWidth: 0, cardFigHeight: 0 };
    _this._updatePosition = _this._updatePosition.bind(_this);
    _this.cardFigRef = _react2.default.createRef(); //just for current card
    return _this;
  }

  _createClass(CardsScreen, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._updatePosition();
      //to make responsive
      window.addEventListener('resize', this._updatePosition);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this._updatePosition);
    }
  }, {
    key: "_updatePosition",
    value: function _updatePosition(e) {
      var cardFig = this.cardFigRef.current;
      //update card figure container size
      this.setState({
        cardFigWidth: cardFig.offsetWidth,
        cardFigHeight: cardFig.offsetHeight
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        "div",
        { id: "studyPage" },
        _react2.default.createElement(
          "div",
          { id: "cards" },
          this.props.cards.map(function (card) {
            return _react2.default.createElement(
              "figure",
              { key: card.id, ref: _this2.cardFigRef },
              _react2.default.createElement(_Card2.default, {
                card: card,
                id: '_' + card.id //JS variable for querySelector can't start with a number
                , containerWidth: _this2.state.cardFigWidth,
                containerHeight: _this2.state.cardFigHeight,
                uncover: true //show front and back
              })
            );
          })
        ),
        _react2.default.createElement(
          "div",
          { className: "" },
          _react2.default.createElement(
            _Button2.default,
            { className: "editButton", onClick: this._review },
            _react2.default.createElement(
              _NormalText2.default,
              null,
              "Start Quiz"
            )
          )
        )
      );
    }
  }]);

  return CardsScreen;
}(_react.Component);

CardsScreen.displayName = "CardsScreen";


var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    reviewDeck: function reviewDeck(deckID) {
      dispatch((0, _creators.reviewDeck)(deckID));
    }
  };
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    cards: state.currentCards
  };
};

module.exports = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(CardsScreen);

/***/ })
/******/ ]);