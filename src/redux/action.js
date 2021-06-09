import {
    FETCH_USERS,
    LOGIN_USERS,
    FETCH_ALL_SECTION_DATA
    ,FETCH_ALL_ARTICLE_DATA
} from '../constants/storeConstant';
import {
    axiosRequest,
    dispatchFinalData
} from '../components/Utils/index';

const getAllSections = (reqData, params) => async dispatch => {
    dispatchFinalData(FETCH_ALL_SECTION_DATA, 'sectionData', dispatch);
    try {
        const data = await axiosRequest('/section-list.json', {});
        dispatchFinalData(FETCH_ALL_SECTION_DATA, 'sectionData', dispatch, false, data);
        return reqData
    } catch (er) {
        dispatchFinalData(FETCH_ALL_SECTION_DATA, 'sectionData', dispatch, false, null, er);
        return er;
    }
}

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

const getNewsData = (params = {}) => async dispatch => {
    dispatchFinalData(FETCH_ALL_ARTICLE_DATA, 'articledata', dispatch);
    try {
        const data = await axiosRequest('/all/all.jso', params);
        dispatchFinalData(FETCH_ALL_ARTICLE_DATA, 'articledata', dispatch, false, data);
        return data;
    } catch (er) {
        dispatchFinalData(FETCH_ALL_ARTICLE_DATA, 'articledata', dispatch, false, null, er);
        return er;
    }
}



export {
    registerUser,
    loginUser,
    getAllSections,
    getNewsData
}