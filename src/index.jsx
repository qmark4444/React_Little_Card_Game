import React from 'react';
const ReactDOM = require('react-dom');
const {Provider} = require('react-redux');
const {createStore} = require('redux');
const reducers = require('./reducers');
const routes = require('./routes.jsx');

let store = createStore(reducers);

ReactDOM.render(
    (
        <Provider store={store}>
            {routes}
        </Provider>
    ), document.getElementById('content')
)