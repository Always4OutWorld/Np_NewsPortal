import axios from 'axios';
import {
    FETCH_TEST,
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

const getAllData = () => async dispatch => {
    dispatchFinalData(FETCH_TEST, 'cities', dispatch);
    try {
        // const data = await axiosRequest('url', { limit: 1000 });
        // if (data.status === 200) {
        //     dispatchFinalData(FETCH_TEST, 'cities', dispatch, false, get(data, 'data.results'));
        // } else {
        //     dispatchFinalData(FETCH_TEST, 'cities', dispatch, false, data);
        // }
        dispatchFinalData(FETCH_TEST, 'cities', dispatch, false, {
            name: 'new',
        });
        return {
            name: 'new',
        };
    } catch (er) {
        dispatchFinalData(FETCH_TEST, 'cities', dispatch, false, null, er);
        return er;
    }
}

export {
    getAllData,
}