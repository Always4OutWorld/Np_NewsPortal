import axios from 'axios';
import {
    FETCH_USERS,
    LOGIN_USERS
} from '../constants/storeConstant';

const axiosRequest = async (url = '', params = {}) => {
    const options = {
        method: 'get',
        url: `${process.env.REACT_APP_HITURL}${url}`,
        params: params
      };
    const data = await axios(options);
    return data;
}

const dispatchFinalData = (
    type,
    key,
    dispatch,
    inProgress = true,
    data = null,
    error = null
  ) => {
    dispatch({
        type,
        key,
        value: {
          inProgress,
          data,
        },
      });
};
const registerUser = (reqData) => async dispatch => {
    dispatchFinalData(FETCH_USERS, 'cities', dispatch);
    try {
        dispatchFinalData(FETCH_USERS, 'cities', dispatch, false, reqData);
        return reqData
    } catch (er) {
        dispatchFinalData(FETCH_USERS, 'cities', dispatch, false, null, er);
        return er;
    }
}
const loginUser = (reqData) => async dispatch => {
    dispatchFinalData(LOGIN_USERS, 'cities', dispatch);
    try {
        dispatchFinalData(LOGIN_USERS, 'cities', dispatch, false, reqData);
        return reqData
    } catch (er) {
        dispatchFinalData(LOGIN_USERS, 'cities', dispatch, false, null, er);
        return er;
    }
}

export {
    registerUser,
    loginUser
}