import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import Recaptcha from '../ReCAPTCHA/Recaptcha';
import DropDownButton from './DropDownButton';
import DropDownRole from './DropDownRole';
import { useNavigate } from 'react-router-dom';

const MyForm = () => {
  const navigate = useNavigate();

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
    courses: Yup.string().required('Please select a course'),
    currentlyYouAre: Yup.string().required('Currently You Are is required'),
    isRobot: Yup.string().required('Please verify you are not a robot')
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await axios.post('http://localhost:5000', values);
      console.log('Form submitted:', response.data); 
      navigate("/submit");
      window.location.reload();

      
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
        courses: 'Reactjs',  // Set default value to 'Reactjs'
        currentlyYouAre: 'Student', // Set default value to 'Student'
        isRobot: '',
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      
    >
      {({ isSubmitting, setFieldValue }) => (
        <Form className='space-y-4'>
          <div>
            <Field
              className='border-b border-black pl-3 p-2 rounded w-full'
              type='text'
              name='name'
              placeholder='Your Name'
            />
            <ErrorMessage name='name' component='div' className='text-red-600 absolute' />
          </div>
          <div>
            <Field
              className='border-b border-black pl-3 p-2 rounded mb-3 w-full'
              type='email'
              name='email'
              placeholder='Your Email'
            />
            <ErrorMessage name='email' component='div' className='text-red-600 absolute' />
          </div>
          <div>
            <Field
              className='border-b border-black pl-3 p-2 rounded mb-3 w-full'
              type='tel'
              name='mobile'
              placeholder='Your Mobile'
            />
            <ErrorMessage name='mobile' component='div' className='text-red-600 absolute' />
          </div>
          <div className='flex mb-3 gap-4'>
            <p>
              <DropDownButton name="courses" />
              <ErrorMessage name='courses' component='div' className='text-red-600 absolute' />
            </p>
            <p>
              <DropDownRole name="currentlyYouAre" />
              <ErrorMessage name='currentlyYouAre' component='div' className='text-red-600 absolute' />
            </p>
          </div>
          <div className=' mb-3'>
            <Recaptcha
              name="isRobot"
              onChange={value => setFieldValue('isRobot', value)}
            />
            {/* <ErrorMessage name='isRobot' component='div' className='text-red-600' /> */}
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
