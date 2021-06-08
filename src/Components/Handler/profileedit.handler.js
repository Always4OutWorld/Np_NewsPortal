import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import ProfileView from '../Screens/profileedit.view';
import { REQUIRED_ERROR, INVALID_EMAIL } from '../../constants/constant';
import { findIndex, get } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import {
  loginUser,
  registerUser
} from '../../redux/action';

const ProfileHandler = () => {
  const dispatch = useDispatch();
  const [isEdit, setEdit] = useState(false);
  const [isForgot, setForgotPassword] = useState(false);
  const userDatas = useSelector(state => state);
  const intialEditdata = {
    name: get(userDatas, 'currentUser.data.name'),
    email: get(userDatas, 'currentUser.data.email')
  };

  console.log("userDatas", userDatas)

  const editFormik = useFormik({
    enableReinitialize: true,
    initialValues: intialEditdata,
    validationSchema: Yup.object().shape({
        email: Yup.string()
            .email(INVALID_EMAIL)
            .required(REQUIRED_ERROR),
        name: Yup.string()
            .matches(/^[aA-zZ\s]+$/, 'No Special Character allowed,only characters')
            .required(REQUIRED_ERROR),
    }),
    onSubmit: (values) => {
        const email = get(values, 'email');
        const name = get(values, 'name');
        if (get(userDatas, 'users.data.length')) {
          const users = get(userDatas, 'users.data');
          const userIndex= findIndex(get(userDatas, 'users.data'), e => e.email===get(intialEditdata, 'email'));
          users[userIndex].email = email;
          users[userIndex].name = name;
          dispatch(registerUser(users));
          dispatch(loginUser(users[userIndex]));
          setEdit(false);
        }
    },
  });


  const passwordFormik = useFormik({
    enableReinitialize: true,
    initialValues: {
      password: '',
      confirmPassword: ''
    },
    validationSchema: Yup.lazy(values => Yup.object().shape({
          password: Yup.string()
            .matches(/^[aA-zZ\s]+$/, 'No Special Character allowed,only characters')
            .required(REQUIRED_ERROR),
          confirmPassword: Yup.string()
            .matches(/^[aA-zZ\s]+$/, 'No Special Character allowed,only characters')
            .required(REQUIRED_ERROR)
            .test('password', 'password Not Matching', value => {
              if (value === get(values, 'password')) {
                return true;
              }
              return false;
            })
    })),
    onSubmit: values => {
      const password = get(values, 'password');
      if (get(userDatas, 'users.data.length')) {
        const users = get(userDatas, 'users.data');
        const userIndex= findIndex(get(userDatas, 'users.data'), e => e.email===get(intialEditdata, 'email'));
        users[userIndex].password = password;
        dispatch(registerUser(users));
        dispatch(loginUser(users[userIndex]));
        setForgotPassword(false);
      }
    },
  });

  const {
    values,
    setFieldValue,
    setFieldTouched,
    errors,
    touched,
    handleSubmit,
    handleReset
  } = editFormik;

  useEffect(() => {
    if (!isEdit) {
      handleReset();
    }
  }, [isEdit]);

  useEffect(() => {
    if (!isForgot) {
      passwordFormik.handleReset();
    }
  }, [isForgot]);

  const handleChange = (name, e) => {
    const { value } = e.target;
    setFieldValue(name, value);
  }

  const handlePasswordChange = (name, e) => {
    const { value } = e.target;
    passwordFormik.setFieldValue(name, value);
  }
  const editField = [
    {
      disabled: !isEdit,
      name: 'name',
      value: get(values, 'name'),
      onChange: e => handleChange('name', e),
      onBlur: () => setFieldTouched('name'),
      error: get(touched, 'name') && get(errors, 'name'),
      label: 'Name'
    },
    {
      disabled: !isEdit,
      name: 'email',
      value: get(values, 'email'),
      onChange: e => handleChange('email', e),
      onBlur: () => setFieldTouched('email'),
      error: get(touched, 'email') && get(errors, 'email'),
      label: 'Email'
    }
  ];

  const forgotPassword = [
    {
      name: 'password',
      value: get(passwordFormik.values, 'password'),
      onChange: e => handlePasswordChange('password', e),
      onBlur: () => passwordFormik.setFieldTouched('password'),
      error: get(passwordFormik.touched, 'password') && get(passwordFormik.errors, 'password'),
      label: 'Password',
      type: "password"
    },
    {
      name: 'confirmPassword',
      value: get(passwordFormik.values, 'confirmPassword'),
      onChange: e => handlePasswordChange('confirmPassword', e),
      onBlur: () => passwordFormik.setFieldTouched('confirmPassword'),
      error: get(passwordFormik.touched, 'confirmPassword') && get(passwordFormik.errors, 'confirmPassword'),
      label: 'Confirm Password',
      type: 'password',
    }
  ]
  return (
      <ProfileView
        editField={editField}
        OnEdit={() => setEdit(!isEdit)}
        firstLetter="P"
        isEdit={isEdit}
        onForgot={() => setForgotPassword(!isForgot)}
        forgotPassword={forgotPassword}
        isForgot={isForgot}
        passwordSubmit={passwordFormik.handleSubmit}
        EditSubmit={handleSubmit}
      />
  );
}

export default ProfileHandler;
