import { useFormik } from 'formik';
import * as Yup from 'yup';
import { REQUIRED_ERROR, INVALID_EMAIL } from '../../Constants/constant';

const NewsFeedHandler = () => {
    const loginformik = useFormik({
        enableReinitialize: true,
        validateOnChange: false,
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object().shape({
            email: Yup.string()
                .email(INVALID_EMAIL)
                .required(REQUIRED_ERROR),
            password: Yup.string()
                .min(6, 'minimum 6 Characters needed')
                .max(20, 'maximum 20 character only')
                .matches(`/[^A-Za-z 0-9]/g`, 'No Special Character allowed')
                .required(REQUIRED_ERROR)
        }),
        onSubmit: (values, { setSubmitting }) => {},
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
                .matches(`/[^A-Za-z 0-9]/g`, 'No Special Character allowed')
                .required(REQUIRED_ERROR),
            email: Yup.string()
                .email(INVALID_EMAIL)
                .required(REQUIRED_ERROR),
            password: Yup.string()
                .min(6, 'minimum 6 Characters needed')
                .max(20, 'maximum 20 character only')
                .matches(`/[^A-Za-z 0-9]/g`, 'No Special Character allowed')
                .required(REQUIRED_ERROR)
        }),
        onSubmit: (values, { setSubmitting }) => {},
      })

    const {
        values,
        setFieldValue,
        setFieldTouched,
        errors,
        touched
    } = registerformik;

  return {
    loginformik,
    registerformik: {
        registerValue: values,
        setRegister: setFieldValue,
        setRegisterBlur: setFieldTouched,
        registerError: errors,
        registerTouch: touched,
    }
  }
}

export default NewsFeedHandler;
