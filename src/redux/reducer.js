import { combineReducers } from 'redux';
import {
    FETCH_TEST,
    FETCH_USERS,
    LOGIN_USERS
} from '../constants/storeConstant';
import { get } from 'lodash';

const testData = (state = {}, action) => {
    if (action.type === FETCH_TEST) {
        const data = get(action, 'value');
        if (data) {
            return Object.assign({}, state, {
                ...action.value,
                data,
            })
        }
        return Object.assign({}, action.value);
    }
    return state;
}
const users = (state = {}, action) => {
    if (action.type === FETCH_USERS) {
        const data = get(action, 'value');
        if (data) {
            return Object.assign({}, state, {
                ...action.value,
                ...data,
            })
        }
        return Object.assign({}, action.value);
    }
    return state;
}

const login = (state = {}, action) => {
    if (action.type === LOGIN_USERS) {
        const data = get(action, 'value');
        if (data) {
            return Object.assign({}, state, data);
        }
        return Object.assign({}, action.value);
    }
    return state;
}

const rootReducer = combineReducers({
    ping: testData,
    users,
    currentUser: login,
});

export default rootReducer;

