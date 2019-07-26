import React from 'react';
import { renderToString } from 'react-dom/server';
// import { Provider } from 'react-redux';
// import { renderRoutes } from 'react-router-config';

//import Routes from '../src/router/Routes';

import entryHTML from './entryHTML.js';
import withRoutes from "../shared/routes";
import { StaticRouter } from 'react-router-dom';

export default (pathname, store, context) => {
    const ServerRoutes = withRoutes(store, StaticRouter);

    const content = renderToString(
        // <Provider store={store}>
        //   <StaticRouter location={pathname} context={context}>
        //     <div>{renderRoutes(Routes)}</div>
        //   </StaticRouter>
        // </Provider>

        <ServerRoutes location={pathname} context={context}/>
    );

  const initialData = `window.INITIAL_STATE = ${JSON.stringify(store.getState())}`;

  return entryHTML(content, initialData);
};