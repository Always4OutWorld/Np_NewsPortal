import React, {useEffect, useState} from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { get, find } from 'lodash';
import { REQUIRED_ERROR, INVALID_EMAIL, REGREX, SPECIAL_CHAR_ERROR } from '../../constants/constant';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser, loginUser, getNewsData, addReadLaterSection } from '../../redux/action';
import NewsFeed from '../Screens/newsfeed.view'; 
import ArticleView from '../Screens/articleView';
import Pagination from '../Common/pagination';

const NewsFeedHandler = ({
    actionData,
}) => {
    const dispatch = useDispatch();
    const state = useSelector(state => state);
    const { isModal, setModal } = actionData;
    const [newModal, setNewModal] = useState(false);
    const [isReg, setReg] = useState(false);
    const [errorTest, setError] = useState('');
    const [selectedPage, setPage] = useState(1);
    const [stateUsers , setSetUser] = useState(null);

    useEffect(() => {
        setSetUser(state);
    }, [state]);

    useEffect(() => {
        dispatch(getNewsData({
            page: selectedPage
        }))
    }, [selectedPage]);

    useEffect(() => {
            setModal(newModal)
    }, [newModal]);

    useEffect(() => {
        if (isModal) {
            setNewModal(true);
        }
    }, [isModal]);

    const loginIntailvalue = {
        email: '',
        password: '',
    };
    const loginformik = useFormik({
        enableReinitialize: true,
        validateOnChange: false,
        initialValues: loginIntailvalue,
        validationSchema: Yup.object().shape({
            email: Yup.string()
                .email(INVALID_EMAIL)
                .required(REQUIRED_ERROR),
            password: Yup.string()
                .min(6, 'minimum 6 Characters needed')
                .max(20, 'maximum 20 character only')
                .matches(REGREX, SPECIAL_CHAR_ERROR)
                .required(REQUIRED_ERROR)
        }),
        onSubmit: (values) => {
            const isExisting = find(get(stateUsers, 'users.data'), e => e.email===get(values, 'email'));
            const currentUser = {
                email: get(values, 'email'),
                password: get(values, 'password'),
                name: get(isExisting, 'name'),
            };
            if (isExisting) {
                const isSamePassword = isExisting.password === get(values, 'password');
                if (isSamePassword) {
                    dispatch(loginUser(currentUser));
                    setNewModal(false);
                } else {
                    setError('Password dismatch');
                }
            } else {
                setError('No User found');
            }
        },
      })

      const registerformik = useFormik({
        enableReinitialize: true,
        validateOnChange: false,
        initialValues: {
            email: '',
            password: '',
            name: ''
        },
        validationSchema: Yup.object().shape({
            name: Yup.string()
                .matches(REGREX, SPECIAL_CHAR_ERROR)
                .required(REQUIRED_ERROR),
            email: Yup.string()
                .email(INVALID_EMAIL)
                .required(REQUIRED_ERROR),
            password: Yup.string()
                .min(6, 'minimum 6 Characters needed')
                .max(20, 'maximum 20 character only')
                .matches(REGREX, SPECIAL_CHAR_ERROR)
                .required(REQUIRED_ERROR)
        }),
        onSubmit: (values) => {
            let newUser = [];
            if (get(stateUsers, 'users.data.length')) {
                newUser = get(stateUsers, 'users.data');
            }
            const isExisting = find(get(stateUsers, 'users.data'), e => e.email===get(values, 'email'));

            if (isExisting) {
                setError('Existing User Email');
                return;
            }
            const currentUser = {
                name: get(values, 'name'),
                email: get(values, 'email'),
                password: get(values, 'password')
            };
            if (values) {
                newUser.push(currentUser);
            }
            dispatch(registerUser(newUser));
            dispatch(loginUser(currentUser));
            setNewModal(false);
        },
    });

    const {
        values,
        setFieldValue,
        setFieldTouched,
        errors,
        touched,
        handleSubmit,
    } = loginformik;

    useEffect(() => {
        setError('');
    }, [values, registerformik.values, isReg]);

    console.log("datattaaa", stateUsers)

    const handleReadLater = article => {
        let newReadList = [];
        if (get(stateUsers, 'readLaterData.data.length')) {
            newReadList = get(stateUsers, 'readLaterData.data', []);
        }
        if (article) {
            newReadList.push(article);
        }
        console.log("33333333", newReadList);
        dispatch(addReadLaterSection(newReadList));
    }   

  return (
    <>
      <NewsFeed
        errorTest={errorTest}
        isModal={newModal}
        isReg={isReg}
        setModal={setNewModal}
        setReg={setReg}
        registerValue={get(registerformik, 'values')}
        handleRegisterChange={(e) => {
            const { name, value } = e.target;
            registerformik.setFieldValue([name], value);
        }}
        setRegisterBlur={get(registerformik, 'setFieldTouched')}
        registerTouch={get(registerformik, 'touched')}
        registerError={get(registerformik, 'errors')}
        values={values}
        handleChange={(e) => {
            const { name, value } = e.target;
            setFieldValue([name], value);
        }}
        setFieldTouched={setFieldTouched}
        touched={touched}
        errors={errors}
        handleRegister={get(registerformik, 'handleSubmit')}
        handleSubmit={handleSubmit}
        article={get(stateUsers, 'allArticle.data.data.results', [])}
      />
      <ArticleView
        article={get(stateUsers, 'allArticle.data.data.results', [])}
        readLater={handleReadLater}
      />
      {get(stateUsers, 'allArticle.data.data.results', null) && (
            <Pagination
                selectedPage={selectedPage}
                total={get(stateUsers, 'allArticle.data.data.num_results')}
                perPage={20}
                nextAction={()=> selectedPage < (get(stateUsers, 'allArticle.data.data.num_results')/20) ? setPage(selectedPage + 1) : null}
                prevAction={()=> selectedPage > 1 ? setPage(selectedPage - 1) : null}
                onClickAction={label => setPage(label)}
            />
      )}
    </>
  )
}

export default NewsFeedHandler;
