import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import 'w3-css/w3.css';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import mainStore from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={mainStore.store}>
      <PersistGate loading={null} persistor={mainStore.persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
