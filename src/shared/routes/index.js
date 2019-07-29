import React, {Component} from 'react';
import allRoutes from './allRoutes';
import { Provider } from 'react-redux';

const {
    withRouter 
} = require('react-router');

const {
    Route,
    Switch
} = require('react-router-dom');

const Layout = require('../components/Layout');

const withAllRoutes = (DynamicRouter, store) => {
  return class extends Component { 
    render() {
      return (
        <Provider store={store}>
          <DynamicRouter {...this.props}>
            {allRoutes}
          </DynamicRouter>
        </Provider>
      );
    }
  }
};

module.exports = withAllRoutes;