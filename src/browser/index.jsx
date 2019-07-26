import React from 'react';
// const ReactDOM = require('react-dom');
// const {Provider} = require('react-redux');
import { hydrate } from 'react-dom';
import withRoutes from "../shared/routes";
import { BrowserRouter } from 'react-router-dom';

const {createStore} = require('redux');
const reducers = require('./reducers');
let store = createStore(reducers);

const BrowserRoutes = withRoutes(store, BrowserRouter);

//require('../css/cardgame.scss'); 
import '../css/cardgame.scss';

hydrate(
    (
       <BrowserRoutes /> 
    ), document.getElementById('content')
)