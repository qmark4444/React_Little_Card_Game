import React, {Component} from 'react';
import switchRoutes from './switchRoutes';
import allRoutes from './allRoutes';
import { Provider } from 'react-redux';
import { StaticRouter, BrowserRouter } from 'react-router-dom';

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
// const Layout = withRouter(require('../components/Layout'));
const Layout = require('../components/Layout');

// const DeckPage = require('../components/DeckPage/index.jsx');//test

// const withAllRoutes = (DynamicRouter, store) => {
//   return class extends Component { 
//     render() {
//         return (
//           <Provider store={store}>
//             <DynamicRouter {...this.props}>
//               <Layout>
//                 <Switch>
//                   {switchRoutes.map(
//                     ( { path, exact, component: Component } ) => (
//                       <Route key={path} path={path} exact={exact} component={(props) => (<Component {...props} />)} />
//                     )
//                   )}
//                 </Switch>
//               </Layout>
//             </DynamicRouter>
//           </Provider> 
//         );
//       }
//     }
//   };

// const withAllRoutes = (isBrowser, store) => {
//   return class extends Component { 
//     render() {
//       console.log('------ is browser: ', isBrowser);
//       if(isBrowser){
//         return (
//           <Provider store={store}>
//             <BrowserRouter {...this.props}>
//               {/* {allRoutes} Invariant Violation: You should not use <Route> or withRouter() outside a <Router>*/}
//               {/* <Layout></Layout> Invariant Violation: You should not use <Route> or withRouter() outside a <Router>*/}
//               <h1>SHHIIITTTTT---WORKS</h1>
//             </BrowserRouter>
//           </Provider> 
//         );
//       }
//       return (
//         <Provider store={store}>
//           <StaticRouter {...this.props}>
//             {/* {allRoutes} Invariant Violation: You should not use <Route> or withRouter() outside a <Router>*/}
//             {/* <Layout></Layout> Invariant Violation: You should not use <Route> or withRouter() outside a <Router>*/}
//             <h1>SHHIIITTTTT---WORKS</h1>
//           </StaticRouter>
//         </Provider>
//       );
//     }
//   }
// };

// const withAllRoutes = (isBrowser, store) => {
//   return class extends Component { 
//     render() {
//       console.log('------ is browser: ', isBrowser);
//       if(isBrowser){
//         return (
//           <Provider store={store}>
//             <BrowserRouter {...this.props}>
//               {/* {withRouter(require('../components/Layout'))} */}
//               {/* Failed prop type: Invalid prop `children` supplied to `Router`, expected a ReactNode. */}

//               <div>{withRouter(Layout)}</div>
//             </BrowserRouter>
//           </Provider> 
//         );
//       }
//       return (
//         <Provider store={store}>
//           <StaticRouter {...this.props}>
//             {/* {withRouter(require('../components/Layout'))} */}
//             {/* Failed prop type: Invalid prop `children` supplied to `Router`, expected a ReactNode. */}

//             <div>{withRouter(Layout)}</div>
//           </StaticRouter>
//         </Provider>
//       );
//     }
//   }
// };

// const withAllRoutes = (isBrowser, store) => {
//   return class extends Component { 
//     render() {
//       console.log('------ is browser: ', isBrowser);
//       if(isBrowser){
//         return (
//           <Provider store={store}>
//             <BrowserRouter {...this.props}>
//               <Route component={(props) => (<Layout {...props} />)} />
//               {/* this works: can't use withRouter() HOC */}
//             </BrowserRouter>
//           </Provider> 
//         );
//       }
//       return (
//         <Provider store={store}>
//           <StaticRouter {...this.props}>
//             <Route component={(props) => (<Layout {...props} />)} />
//             {/* this works */}
//           </StaticRouter>
//         </Provider>
//       );
//     }
//   }
// };

const withAllRoutes = (isBrowser, store) => {
  return class extends Component { 
    render() {
      console.log('------ is browser: ', isBrowser);
      if(isBrowser){
        return (
          <Provider store={store}>
            <BrowserRouter {...this.props}>
              {allRoutes}
            </BrowserRouter>
          </Provider> 
        );
      }
      return (
        <Provider store={store}>
          <StaticRouter {...this.props}>
            {allRoutes}
          </StaticRouter>
        </Provider>
      );
    }
  }
};

module.exports = withAllRoutes;