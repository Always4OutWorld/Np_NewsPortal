import { combineReducers } from 'redux';
import {
    FETCH_TEST,
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

const rootReducer = combineReducers({
    ping: testData
});

export default rootReducer;

