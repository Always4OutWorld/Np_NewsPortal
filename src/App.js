import './styles/App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {loggedInRoutes, publicRoutes} from './routers/index';
import Drawer from './components/index';
import { concat, get } from 'lodash';
import { useSelector } from 'react-redux';
import Test from './components/Screens/test';

function App() {
  const isAuth = useSelector(state => get(state, 'currentUser.data'));
  let route = publicRoutes;
  if (isAuth) {
    route = concat(publicRoutes, loggedInRoutes);
  }
  return (
    <BrowserRouter>
      <Switch>
        {route.map(eachRoute => (
            <Route
              key={eachRoute.url}
              path={eachRoute.url}
              exact
              render={props => {
                if (get(eachRoute, 'url')==='/profileView' || get(eachRoute, 'url')==='/readlater') {
                  return <eachRoute.component {...props} />
                }
                return <Drawer eachRoute={eachRoute} routeProps={props} />
            }}
            />
        ))}
        <Route component={Test} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
