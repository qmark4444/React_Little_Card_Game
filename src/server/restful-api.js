import React from 'react';
import switchRoutes from "../shared/routes/switchRoutes";
import entryHTML from './entryHTML.js';
import withAllRoutes from "../shared/routes";
import { StaticRouter, matchPath } from 'react-router-dom';
import { renderToString } from 'react-dom/server';

//server-side store
const {createStore} = require('redux');
const reducers = require('../shared/reducers');
const store = createStore(reducers);
const ServerRoutes = withAllRoutes(StaticRouter, store);

//Use Babel to transform required files from JSX to JS
require('babel-register')({
    presets: [ 'react' ]
});

module.exports = function (app) {
    app.get('*', (req, res, next) => { 
        const activeRoute = switchRoutes.find((route) => { 
            return matchPath(req.url, route)
        }) || {};
    
        const promise = activeRoute.fetchInitialData? 
            activeRoute.fetchInitialData(req.path)
            : Promise.resolve();

        promise
        .then((data) => {
            const context = { data };
            
            const content = renderToString(
                <ServerRoutes location={req.url} context={context}/>
            );
            const initialData = `window.INITIAL_DATA = ${JSON.stringify(data)}`;
            res.send( entryHTML(content, initialData));
        })
        .catch(next);
    });
};