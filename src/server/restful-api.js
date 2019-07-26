require('babel-register')({
    presets: [ 'react' ]
});
import React from 'react';
import switchRoutes from "../shared/routes/switchRoutes";
import entryHTML from './entryHTML.js';
import withRoutes from "../shared/routes";
import { StaticRouter, matchPath } from 'react-router-dom';
//import serialize from "serialize-javascript";
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

            //const initialData = `window.INITIAL_DATA = ${serialize(data)}`;
            const initialData = `window.INITIAL_DATA = ${JSON.stringify(data)}`;

            const content = renderToString(
                <ServerRoutes location={req.url} context={context}/>
            );

            res.send( entryHTML(content, initialData)); //send() or render()
        })
        .catch(next);
    });
};