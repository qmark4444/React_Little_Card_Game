require('babel-register')({
    presets: [ 'react' ]
});

import { matchPath } from "react-router-dom";

import switchRoutes from "../shared/routes/switchRoutes";

import entryHTML from './entryHTML.js';
import withRoutes from "../shared/routes";
import { StaticRouter } from 'react-router-dom';
import serialize from "serialize-javascript";
import React from 'react';
import { renderToString } from 'react-dom/server';

module.exports = function (app, passport) {
    //dynamic path '*' or '/*'??????
    app.get('*', (req, res, next) => {
        const activeRoute = switchRoutes.find((route) => matchPath(req.url, route)) || {};
    
        const promise = activeRoute.fetchInitialData? 
            activeRoute.fetchInitialData(req.path)
            : Promise.resolve();

        const ServerRoutes = withRoutes(store, StaticRouter);

        promise
        .then((data) => {
            const context = { data };

            const initialData = `window.__INITIAL_DATA__ = ${serialize(data)}`;

            // const markup = renderToString(
            //     <StaticRouter location={req.url} context={context}>
            //     <App />
            //     </StaticRouter>
            // )

            const content = renderToString(
                <ServerRoutes location={req.url} context={context}/>
            );

            res.send( entryHTML(content, initialData))
        })
        .catch(next);
    });
};