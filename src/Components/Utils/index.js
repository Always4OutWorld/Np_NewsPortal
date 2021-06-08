import React from 'react';
import axios from 'axios';
import {
    TextField
} from '@material-ui/core';

export const TextInputField = ({
    label = "",
    variant="outlined",
    value="",
    name="",
    placeHolder="",
    onBlur=()=>{},
    onChange=()=>{},
    error="",
    fullWidth=true,
    type="text",
    disabled=false,
}) => {
    return (
        <TextField
            type={type}
            fullWidth={fullWidth}
            label={label}
            variant={variant}
            value={value}
            disabled={disabled}
            name={name}
            placeHolder={placeHolder}
            onChange={onChange}
            onBlur={onBlur}
            error={error}
            helperText={(<span>{error}</span>)}
        />
    );
}

export const axiosRequest = async (url = '', params = {}) => {
    const options = {
        method: 'get',
        url: `${process.env.REACT_APP_ENDPOINT}${url}`,
        params: {
            ...params,
            'api-key': 'uR1j3A82i48Cvvn6A4pQRWBCIhUCIvG7'
        }
      };
    const data = await axios(options);
    return data;
}

export const dispatchFinalData = (
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