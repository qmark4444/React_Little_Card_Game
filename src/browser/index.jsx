import React from 'react';
import { hydrate } from 'react-dom';
import withAllRoutes from "../shared/routes";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const {createStore} = require('redux');
const reducers = require('../shared/reducers');
let store = createStore(reducers);

const BrowserRoutes = withAllRoutes(BrowserRouter, store);

import '../../public/css/cardgame.scss';

hydrate(
    (
       <BrowserRoutes /> 

    ), document.getElementById('content')
)