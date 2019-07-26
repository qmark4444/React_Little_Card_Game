import React from 'react';
// const ReactDOM = require('react-dom');
// const {Provider} = require('react-redux');
import { hydrate } from 'react-dom';
import routes from "../shared/routes";
import { BrowserRouter } from 'react-router-dom';

const {createStore} = require('redux');
const reducers = require('./reducers');
let store = createStore(reducers);

const BrowserRoutes = routes(store, BrowserRouter);

//require('../css/cardgame.scss'); 
import '../css/cardgame.scss';

// ReactDOM.render(
    //use hydrate instead: Same as render(), but is used to hydrate a container whose HTML contents were rendered by ReactDOMServer. 
    //React will attempt to attach event listeners to the existing markup (when taking over after initial load/render from server).
hydrate(
    (
       <BrowserRoutes /> 
    ), document.getElementById('content')
)