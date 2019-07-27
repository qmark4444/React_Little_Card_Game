import React from 'react';
import switchRoutes from "../shared/routes/switchRoutes";
//import entryHTML from './entryHTML.js';
import withRoutes from "../shared/routes";
import { StaticRouter, matchPath } from 'react-router-dom';
//import serialize from "serialize-javascript";
import { renderToString } from 'react-dom/server';//ReactDOMServer

//server-side store
const {createStore} = require('redux');
const reducers = require('../shared/reducers');
const store = createStore(reducers);

//Use Babel to transform required files from JSX to JS
require('babel-register')({
    presets: [ 'react' ]
});

module.exports = function (app) {
    console.log('------------- called restful-api.js --------------------')
    //dynamic path '*' or '/*'??????
    //app.get('*', (req, res, next) => { //not called
    //app.get('/*', (req, res, next) => {
    app.get('/', (req, res, next) => {
        console.log('restful-api req.url: ', req.url);//no

        const activeRoute = switchRoutes.find((route) => matchPath(req.url, route)) || {};
    
        const promise = activeRoute.fetchInitialData? 
            activeRoute.fetchInitialData(req.path)
            : Promise.resolve();

        const ServerRoutes = withRoutes(StaticRouter, store);//server side doesn't have store????

        promise
        .then((data) => {
            const context = { data };

            //const initialData = `window.INITIAL_DATA = ${serialize(data)}`;
            const initialData = `window.INITIAL_DATA = ${JSON.stringify(data)}`;

            console.log('restful-api data: ', data);

            const content = renderToString(
                <ServerRoutes location={req.url} context={context}/>
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

            res.send( entryHTML(content, initialData)); //send() or render()
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
        })
        .catch(next);
    });
};