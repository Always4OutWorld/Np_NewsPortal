import './styles/App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {loggedInRoutes, publicRoutes} from './routers/index';
import Drawer from './components/index';

const auth = true;

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {(auth ? loggedInRoutes : publicRoutes).map(eachRoute => (
            <Route
              key={eachRoute.url}
              path={eachRoute.url}
              exact
              render={props => <Drawer eachRoute={eachRoute} routeProps={props} />}
            />
        ))}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
