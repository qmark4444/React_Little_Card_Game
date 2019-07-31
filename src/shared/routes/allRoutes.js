import React from 'react';
import switchRoutes from './switchRoutes';

// import Navbar from '../components/Navbar';
import NoMatch from '../components/NoMatchPage';

const {
    withRouter 
} = require('react-router');

const {
    Route,
    Switch
} = require('react-router-dom');

// const Layout = withRouter(require('../components/Layout'));//Invariant Violation: You should not use <Route> or withRouter() outside a <Router>
const Layout = require('../components/Layout');

const routes = (
  <div>
    {/* <Navbar/> */}
    <Route component={ (props) => (
      <Layout {...props} >
        <Switch>
          {switchRoutes.map(
            ( { path, exact, component: Component } ) => (
              <Route key={path} path={path} exact={exact} component={(props) => (<Component {...props} />)} />
            )
          )}
        </Switch>
      </Layout>
    )}/>
    {/* <Route component={(props) => (<NoMatch {...props} />)} /> */}
    <Route path='/error' component={(props) => (<NoMatch {...props} />)} />
  </div>
);

export default routes;