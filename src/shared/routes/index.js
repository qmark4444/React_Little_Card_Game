import routes from './routes';
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

const reduxRoutes = (store, Router) => {
    class extends React.Component {
        render() {
            return (
                <Provider store={store}>
                    <Router {...this.props}>
                        {routes}
                    </Router>
                </Provider>
            )
        }
    }
}

module.exports = reduxRoutes;