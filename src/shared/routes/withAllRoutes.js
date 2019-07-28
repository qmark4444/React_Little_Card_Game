import React, {Component} from 'react';
import switchRoutes from './switchRoutes';
import { Provider } from 'react-redux';

// import Navbar from './components/Navbar';
// import NoMatch from './components/NoMatch';

const {
    withRouter 
} = require('react-router');

const {
    Route,
    Switch
} = require('react-router-dom');

//const Layout = withRouter(require('../components/Layout/index.jsx'));
const Layout = withRouter(require('../components/Layout'));

// const DeckPage = require('../components/DeckPage/index.jsx');//test

const withAllRoutes = (DynamicRouter, store) => {
  return class extends Component { 
    render() {
        return (
          <Provider store={store}>
            <DynamicRouter {...this.props}>
              <Layout>
                <Switch>
                  {switchRoutes.map(
                    ( { path, exact, component: Component } ) => (
                      <Route key={path} path={path} exact={exact} component={(props) => (<Component {...props} />)} />
                    )
                  )}
                </Switch>
              </Layout>
            </DynamicRouter>
          </Provider> 
        );
      }
    }
  };

module.exports = withAllRoutes;