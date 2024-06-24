import React from 'react';
import { useField, useFormikContext } from 'formik';
import ReCAPTCHA from 'react-google-recaptcha';

const Recaptcha = ({ name }) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);

  const handleRecaptchaChange = (value) => {
    setFieldValue(name, value);
  };

  return (
    <div className='mt-3'>
      <ReCAPTCHA
        sitekey="6LeLsvspAAAAAE-O9jxhVBc9H_A375hRimMQmgPW"
        onChange={handleRecaptchaChange}
      />
      {meta.touched && meta.error ? (
        <div className="text-red-600">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default Recaptcha;







