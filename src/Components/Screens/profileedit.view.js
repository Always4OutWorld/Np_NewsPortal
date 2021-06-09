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
    passwordSubmit,
    deleteAccount=()=>{},
    signOut=()=>{}
}) => (
   <Grid container className="w3-padding w3-padding-16" justify="center" spacing={3}>
       <Grid item lg={5} md={6} sm={7} xs={12}>
            <Paper fullWidth className="paperstyle">
                <Grid container className="w3-padding w3-padding-16" justify="center">
                <Grid item xs={12}>
                    <a href="/" className="astyle">Back to Home</a>
                </Grid>
                    <Grid item lg={8} md={8} sm={8} xs={12}>
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
                            <Grid item xs={12} style={{ borderBottom: "1px solid" }} />
                            <Grid item xs={12} className="w3-margin-top">
                                <Button fullWidth variant="outlined" color="primary" onClick={signOut}>Sign Out</Button>
                            </Grid>
                            <Grid item xs={12} className="w3-margin-bottom">
                            <Button fullWidth variant="contained" onClick={deleteAccount} style={{ background: 'red', color: 'white' }} >Delete Account</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
       </Grid>
   </Grid>
);

export default ProfileView;
