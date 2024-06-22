import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import Recaptcha from '../ReCAPTCHA/Recaptcha';
import DropDownButton from './DropDownButton';
import DropDownRole from './DropDownRole';

const MyForm = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Name is required'),
    email: Yup.string()
      .email('Invalid email')
      .required('Email is required'),
    mobile: Yup.string()
      .matches(/^[0-9]+$/, 'Mobile number must be digits')
      .min(10, 'Mobile number must be at least 10 digits')
      .max(15, 'Mobile number must be less than 15 digits')
      .required('Mobile number is required'),
    courses: Yup.object().shape({
      nodeJs: Yup.boolean(),
      python: Yup.boolean(),
      reactJs: Yup.boolean(),
      digitalMarketing: Yup.boolean(),
    }).test('at-least-one-course', 'Select at least one course', value =>
      value.nodeJs || value.python || value.reactJs || value.digitalMarketing
    ),
    currentlyYouAre: Yup.string().required('Currently You Are is required'),
    isRobot: Yup.boolean().oneOf([true], 'Please verify you are not a robot')
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await axios.post('http://localhost:5000', values);
      console.log('Form submitted:', response.data);
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        mobile: '',
        courses: {
          nodeJs: false,
          python: false,
          reactJs: false,
          digitalMarketing: false,
        },
        currentlyYouAre: '',
        isRobot: false,
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className='space-y-4'>
          <div>
            <Field
              className='border-b border-black pl-3 p-2 rounded w-full'
              type='text'
              name='name'
              placeholder='Your Name'
            />
            <ErrorMessage name='name' component='div' className='text-red-600' />
          </div>
          <div>
            <Field
              className='border-b border-black pl-3 p-2 rounded mb-3 w-full'
              type='email'
              name='email'
              placeholder='Your Email'
            />
            <ErrorMessage name='email' component='div' className='text-red-600' />
          </div>
          <div>
            <Field
              className='border-b border-black pl-3 p-2 rounded mb-3 w-full'
              type='tel'
              name='mobile'
              placeholder='Your Mobile'
            />
            <ErrorMessage name='mobile' component='div' className='text-red-600' />
          </div>
          <div className='flex mb-3 gap-4'>
            <p>
            <DropDownButton />
          <ErrorMessage name='courses' component='div' className='text-red-600' />
            </p>

            <p>
            <DropDownRole />
          <ErrorMessage name='currentlyYouAre' component='div' className='text-red-600' />
            </p>

          </div>
          <div className=' mb-3'>
            <Recaptcha />
            <ErrorMessage name='isRobot' component='div' className='text-red-600' />
          </div>
          <button
            className='bg-red-600 tracking-widest font-bold text-sm text-white m-2 px-4 py-2 rounded w-full md:w-36 mx-auto hover:bg-red-700 transition duration-300 ease-in-out'
            type='submit'
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'SUBMIT'}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default MyForm;
