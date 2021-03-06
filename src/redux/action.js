import {
    FETCH_USERS,
    LOGIN_USERS,
    FETCH_ALL_SECTION_DATA
    ,FETCH_ALL_ARTICLE_DATA,
    READ_LATER
} from '../Constants/storeConstant';
import {
    axiosRequest,
    dispatchFinalData
} from '../Components/Utils/index';

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

const addReadLaterSection = reqData => async dispatch => {
    dispatchFinalData(READ_LATER, 'readlater', dispatch);
    try {
        dispatchFinalData(READ_LATER, 'readlater', dispatch, false, reqData);
        return reqData
    } catch (er) {
        dispatchFinalData(READ_LATER, 'readlater', dispatch, false, null, er);
        return er;
    }
}

const getNewsData = (params = {}, type = 'all') => async dispatch => {
    dispatchFinalData(FETCH_ALL_ARTICLE_DATA, 'articledata', dispatch);
    try {
        const data = await axiosRequest(`/all/${type}.jso`, params);
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
    getNewsData,
    addReadLaterSection
}