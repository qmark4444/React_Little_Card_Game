import React from 'react';
import switchRoutes from "../shared/routes/switchRoutes";
import entryHTML from './entryHTML.js';
import withRoutes from "../shared/routes";
import { StaticRouter, matchPath } from 'react-router-dom';
//import serialize from "serialize-javascript";
// import ReactDOMServer, { renderToString } from 'react-dom/server';//ReactDOMServer
import { renderToString } from 'react-dom/server';

import Layout from '../shared/components/Layout';
import {Provider} from 'react-redux';

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
    app.get('*', (req, res, next) => { 
        //console.log('restful-api req.url: ', req.url);//no

        //console.log('switch rotes ', switchRoutes);

        const activeRoute = switchRoutes.find((route) => {
            console.log('route ', route);
            return matchPath(req.url, route)
        }) || {};//TypeError: Cannot read property 'parsePath' of undefined

        //console.log('activaeRoute ', activeRoute);
    
        const promise = activeRoute.fetchInitialData? 
            activeRoute.fetchInitialData(req.path)
            : Promise.resolve();

        const ServerRoutes = withRoutes(StaticRouter, store);//server side doesn't have store????

        const content = renderToString(
            <Provider store={store}>
                <StaticRouter location={req.url} context={{}}>
                    {/* <Layout>
                    </Layout> */}
                </StaticRouter>
            </Provider>
        );

        res.send( entryHTML(content, initialData));

        promise
        .then((data) => {
            const context = { data };

            //const initialData = `window.INITIAL_DATA = ${serialize(data)}`;
            const initialData = `window.INITIAL_DATA = ${JSON.stringify(data)}`;

            //console.log('restful-api data: ', data);//undefined

            //example
            // const content = renderToString(
            //     <Provider store={store}>
            //       <StaticRouter location={pathname} context={context}>
            //         <div>{renderRoutes(Routes)}</div>
            //       </StaticRouter>
            //     </Provider>
            // );
            // <div id="app">${content}</div>

            /*  when there is index.html in /public, the following has no effect!!!!!--- and it's NOT server-side rendering, only client
                while, if use views/template + hbs in server/index.js, or a different name in /public, then the following generates error:
                TypeError: Cannot read property 'parsePath' of undefined
            */
            // const content = renderToString(
            //     // <ServerRoutes location={req.url} context={context}/>
            //     // TypeError: Cannot read property 'parsePath' of undefined

            //     <Provider store={store}>
            //         <StaticRouter>
            //             <Layout>
            //                 {/* <Switch>
            //                     <Route path='/' exact component={(props) => (<DeckPage {...props} />)} />  
            //                 </Switch> */}
            //             </Layout>
            //         </StaticRouter>
            //     </Provider>
            // );

            // const content = renderToString(
            //     <Provider store={store}>
            //         <StaticRouter location={req.url} context={context}>
            //             {/* <Layout>
            //             </Layout> */}
            //         </StaticRouter>
            //     </Provider>
            // );

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

            // res.send( entryHTML(content, initialData)); //send() to DOM or render() to template/view

            // res.render('index', { // views/index.hbs
            //     content: content,
            //     initialProps: initialData 
            // });
        })
        .catch(next);
    });
};