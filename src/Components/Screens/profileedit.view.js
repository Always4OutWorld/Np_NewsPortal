import React from 'react';
import {
    Avatar,
    Grid,
    Paper,
    Button
} from '@material-ui/core';
import {
    Edit
} from'@material-ui/icons';
import { TextInputField } from '../Utils/index';
import { get } from 'lodash';

const ProfileView = ({
    firstLetter= 'N',
    OnEdit=()=>{},
    editField,
    isEdit,
    onForgot=()=>{},
    isForgot,
    forgotPassword,
    EditSubmit,
    passwordSubmit
}) => (
   <Grid container className="w3-padding w3-padding-16" justify="center" spacing={3}>
       <Grid item xs={8}>
            <Paper fullWidth className="paperstyle">
                <Grid container className="w3-padding w3-padding-16" justify="center">
                <Grid item xs={12}>
                    <a href="/" className="astyle">Back to Home</a>
                </Grid>
                    <Grid item xs={8}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} className="avatar">
                                <Avatar className="avatarColor">{firstLetter}</Avatar>
                            </Grid>
                            <Grid item xs={12} className="w3-right-align">
                                <Button size="small" color="primary" variant="outlined" disabled={isEdit || isForgot} onClick={OnEdit} startIcon={(<Edit />)}>Edit</Button>
                            </Grid>
                            {editField.map(each => (
                                <Grid item xs={12}>
                                    <TextInputField
                                        label={get(each, 'label')}
                                        name={get(each, 'name')}
                                        value={get(each, 'value')}
                                        onChange={each.onChange}
                                        onBlur={each.onBlur}
                                        error={each.error}
                                        disabled={each.disabled}
                                    />
                                </Grid>
                            ))}
                            {isEdit && (
                            <Grid item xs={12}>
                                <Button size="small" variant="outlined" color="primary" onClick={OnEdit}>Cancel</Button>
                                <Button size="small" className="w3-margin-left" variant="contained" onClick={EditSubmit} color="primary">Submit</Button>
                            </Grid>
                            )}
                            {isForgot && forgotPassword.map(each => (
                                <Grid item xs={12}>
                                    <TextInputField
                                        label={get(each, 'label')}
                                        name={get(each, 'name')}
                                        value={get(each, 'value')}
                                        onChange={each.onChange}
                                        onBlur={each.onBlur}
                                        error={each.error}
                                        disabled={each.disabled}
                                        type={each.type}
                                    />
                                </Grid>
                            ))}
                            {!isEdit && (
                                <Grid item xs={12}>
                                    <Button size="small" variant={isForgot? "contained" : "text"} color="primary" onClick={onForgot}>{isForgot ? "Cancel":"Forgot Password ?"}</Button>
                                    {isForgot && <Button size="small" onClick={passwordSubmit} className="w3-margin-left" variant="contained" color="primary">Submit</Button>}
                                </Grid>
                            )}
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
       </Grid>
   </Grid>
);

export default ProfileView;
