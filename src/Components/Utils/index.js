import React from 'react';
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