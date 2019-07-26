import switchRoutes from './switchRoutes';

import Navbar from './components/Navbar';
import NoMatch from './components/NoMatch';

const Layout = withRouter(require('./components/Layout/index.jsx'));

const {
    withRouter 
} = require('react-router');

const {
    Route,
    Switch
} = require('react-router-dom');

const routes = (
  <Layout>
    <Switch>
      {switchRoutes.map(
        ( { path, exact, component: Component, ...rest } ) => (
          <Route key={path} path={path} exact={exact} component={(props) => (<Component {...props} {...rest} />)} />
        )
      )}
      {/* <Route component={(props) => <NoMatch {...props} /> } /> */}
    </Switch>
  </Layout>
);

export default routes;