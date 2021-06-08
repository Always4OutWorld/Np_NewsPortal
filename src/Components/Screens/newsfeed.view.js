import { Button, Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { get } from 'lodash';
import CommonDialog from '../Common/commonDialog';
import { TextInputField } from '../Utils/index';
import NewsFeedHandler from '../Handler/newsfeed.handler';
import { useDispatch, useSelector } from 'react-redux';
import { getAllData } from '../../redux/action';

const NewsFeed = ({
  actionData
}) => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const { isModal, setModal } = actionData;
  const { loginformik, registerformik } = NewsFeedHandler();
  const [isReg, setReg] = useState(false);

  console.log("state", state);
  useEffect(() => {
    dispatch(getAllData())
  }, []);
  const {
    values,
    setFieldValue,
    setFieldTouched,
    errors,
    touched
  } = loginformik;

  const {
    registerValue,
    setRegister,
    setRegisterBlur,
    registerError,
    registerTouch,
  } = registerformik;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFieldValue([name], value);
  }

  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setRegister([name], value);
  }
  return (
   <div>
     {isModal && (
        <CommonDialog
          maxWidth="sm"
          title={isReg ? "Registration with SunriseEdition" : "Login to SunriseEdition"}
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
                </Grid>
              </Grid>
            </Grid>
          )}
          action={isReg ? (
            <Button className="buttonR" fullWidth color="primary" variant="text">Create</Button>
          ) : (
            <Button className="buttonR" fullWidth color="primary" variant="text">Submit</Button>
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
}

export default NewsFeed;
