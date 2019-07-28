import React from 'react';
import switchRoutes from './switchRoutes';

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

const DeckPage = require('../components/DeckPage/index.jsx');//test

const routes = (
  //Invariant Violation: You should not use <Route> or withRouter() outside a <Router>
  <Layout>
    <Switch>
      {switchRoutes.map(
        // // ( { path, exact, component: Component, ...rest } ) => ( // param = props, call with ...props spread expension
        // ( { path, exact, component: Component, rest } ) => (
        //   <Route key={path} path={path} exact={exact} component={(props) => (<Component {...props} {...rest} />)} />
        // )

        ( { path, exact, component: Component } ) => (
          <Route key={path} path={path} exact={exact} component={(props) => (<Component {...props} />)} />
        )

        // ( { path, exact, component } ) => ( //--wrong
        //   <Route key={path} path={path} exact={exact} component={(props) => (<component {...props} />)} />
        // )
      )}

      {/* <Route path='/' exact component={(props) => (<DeckPage {...props} />)} />   */}

      {/* <Route component={(props) => <NoMatch {...props} /> } /> */}
    </Switch>
  </Layout>
);

export default routes;