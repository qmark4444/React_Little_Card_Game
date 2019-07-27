import React from 'react';
const ReactDOM = require('react-dom');
const {Provider} = require('react-redux');
import { hydrate } from 'react-dom';
import withRoutes from "../shared/routes";
import { BrowserRouter } from 'react-router-dom';

const {createStore} = require('redux');
const reducers = require('../shared/reducers');
let store = createStore(reducers);

const BrowserRoutes = withRoutes(BrowserRouter, store);

//require('../../public/css/cardgame.scss'); 
import '../../public/css/cardgame.scss';

import Layout from '../shared/components/Layout';

hydrate(
    (
       <BrowserRoutes /> 
        // <Provider store={store}>
        //     <BrowserRouter>
        //         <Layout>
        //             {/* <Switch>
        //                 <Route path='/' exact component={(props) => (<DeckPage {...props} />)} />  
        //             </Switch> */}
        //         </Layout>
        //     </BrowserRouter>
        // </Provider>
    ), document.getElementById('content')
)