import './Styles/App.css';
import 'react-clock/dist/Clock.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {loggedInRoutes, publicRoutes} from './Routers/index';
import Drawer from './Components/index';
import { concat, get } from 'lodash';
import { useSelector } from 'react-redux';
import Test from './Components/Screens/test';

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
