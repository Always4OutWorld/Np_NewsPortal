import { Button, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { get } from 'lodash';
import CommonDialog from '../Common/commonDialog';
import { TextInputField } from '../Utils/index';

const NewsFeed = ({
  isModal,
  isReg,
  setModal,
  setReg,
  registerValue,
  handleRegisterChange,
  setRegisterBlur,
  registerTouch,
  registerError,
  values,
  handleChange,
  setFieldTouched,
  touched,
  errors,
  handleRegister,
  handleSubmit,
  errorTest
}) => (
   <div>
     {isModal && (
        <CommonDialog
          maxWidth="sm"
          title={isReg ? "Registration with NYtimes Edition" : "Login to NYtimes Edition"}
          open={isModal}
          onClose={() => {
            setModal(false);
            setReg(false);
          }}
          content={isReg ? (
            <Grid container justify="center">
              <Grid item xs={6}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <TextInputField
                      label="Name"
                      name="name"
                      value={get(registerValue, 'name')}
                      onChange={e => handleRegisterChange(e)}
                      onBlur={() => setRegisterBlur('name')}
                      error={get(registerTouch, 'name') && get(registerError, 'name')}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextInputField
                      label="Email"
                      name="email"
                      value={get(registerValue, 'email')}
                      onChange={e => handleRegisterChange(e)}
                      onBlur={() => setRegisterBlur('email')}
                      error={get(registerTouch, 'email') && get(registerError, 'email')}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextInputField
                      type="password"
                      label="Password"
                      name="password"
                      value={get(registerValue, 'password')}
                      onChange={e => handleRegisterChange(e)}
                      onBlur={() => setRegisterBlur('password')}
                      error={get(registerTouch, 'password') && get(registerError, 'password')}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body2" color="error">{errorTest}</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          ) : (
            <Grid container justify="center">
              <Grid item xs={6}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <TextInputField
                      label="Email"
                      name="email"
                      value={get(values, 'email')}
                      onChange={e => handleChange(e)}
                      onBlur={() => setFieldTouched('email')}
                      error={get(touched, 'email') && get(errors, 'email')}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextInputField
                      type="password"
                      label="Password"
                      name="password"
                      value={get(values, 'password')}
                      onChange={e => handleChange(e)}
                      onBlur={() => setFieldTouched('password')}
                      error={get(touched, 'password') && get(errors, 'password')}
                    />
                  </Grid>
                  <Grid item xs={12}>
                      <Button
                        variant="body2"
                        onClick={() => setReg(true)}
                        className="createaccount"
                      >
                        Create a new account ?
                      </Button>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body2" color="error">{errorTest}</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          )}
          action={isReg ? (
            <Button className="buttonR" onClick={() => {
              handleRegister();
            }} fullWidth color="primary" variant="text">Create</Button>
          ) : (
            <Button className="buttonR" onClick={() => {
              handleSubmit();
            }} fullWidth color="primary" variant="text">Submit</Button>
          )}
          mainStyle=""
          titleStyleC="w3-center w3-border w3-teal w3-section"
          titleStyle="loginTitle"
          contentStyle=""
          actionStyle="w3-center w3-border w3-teal w3-section"
        />
     )}
   </div>
);

export default NewsFeed;
