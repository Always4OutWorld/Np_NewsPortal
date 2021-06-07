import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {loggedInRoutes, publicRoutes} from './Routers/index';

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
              render={props => <eachRoute.component props={props} />}
            />
        ))}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
