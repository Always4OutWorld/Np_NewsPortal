import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './reducer';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';

// const dataStructure: {
//     users: [{}]
//     currentUser: {

//     },
//     data: {},
//     readLater: {}
// }

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(
    persistedReducer,
    {},
    composeEnhancers(applyMiddleware(thunk))
);
const persistor = persistStore(store);
const mainStore = { store, persistor };

export default mainStore;