import allRoutes from './allRoutes';
import { Provider } from 'react-redux';

// const reduxRoutes = (store, Router, pathname, context) => {
// const reduxRoutes = (store, Router, ...more) => {
//     <Provider store={store}>
//         {/* <Router location={pathname} context={context}> */}
//         <Router {...more}>
//             {routes}
//         </Router>
//     </Provider>
// }

const withRoutes = (store, Router) => {
    class extends React.Component {
        render() {
            return (
                <Provider store={store}>
                    <Router {...this.props}>
                        {allRoutes}
                    </Router>
                </Provider>
            )
        }
    }
}

module.exports = withRoutes;