import { combineReducers } from 'redux';
import {
    FETCH_TEST,
    FETCH_USERS,
    LOGIN_USERS,
    FETCH_ALL_SECTION_DATA,
    FETCH_ALL_ARTICLE_DATA
} from '../constants/storeConstant';
import { get } from 'lodash';

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

const sectionData = (state = {}, action) => {
    if (action.type === FETCH_ALL_SECTION_DATA) {
        const data = get(action, 'value');
        if (data) {
            return Object.assign({}, state, data);
        }
        return Object.assign({}, action.value);
    }
    return state;
}

const articleData = (state = {}, action) => {
    if (action.type === FETCH_ALL_ARTICLE_DATA) {
        const data = get(action, 'value');
        if (data) {
            return Object.assign({}, state, data);
        }
        return Object.assign({}, action.value);
    }
    return state;
}

const rootReducer = combineReducers({
    users,
    currentUser: login,
    allSections: sectionData,
    allArticle: articleData,
});

export default rootReducer;

