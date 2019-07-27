import allRoutes from './allRoutes';
import { Provider } from 'react-redux';
//import {React, Component} from 'react';//wrong
import React, {Component} from 'react';

import Layout from '../components/Layout';
import DeckPage from '../components/DeckPage';

// const reduxRoutes = (store, Router, pathname, context) => {
// const reduxRoutes = (store, Router, more) => {
//     <Provider store={store}>
//         {/* <Router location={pathname} context={context}> */}
//         <Router {...more}>
//             {routes}
//         </Router>
//     </Provider>
// }

const {
    withRouter 
} = require('react-router');

const {
    Route,
    Switch
} = require('react-router-dom');

const withRoutes = (Router, store) => {
    // class extends Component {
    return class extends Component { // don't forget return
        render() {
            return (
                <Provider store={store}>
                    <Router {...this.props}>
                        {allRoutes}
                        {/* <Layout>
                            <Switch>
                                <Route path='/' exact component={(props) => (<DeckPage {...props} />)} />  
                            </Switch>
                        </Layout> */}
                    </Router>
                </Provider>
            )
        }
    }
}

module.exports = withRoutes;