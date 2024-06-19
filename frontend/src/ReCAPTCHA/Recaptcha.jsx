import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
const Recaptcha = () => {
  const [recaptchaValue, setRecaptchaValue] = useState(null);
  const [errors, setErrors] = useState({});
  const handleRecaptchaChange = (value) => {
    setRecaptchaValue(value);
    setErrors((prevErrors) => ({ ...prevErrors, recaptcha: '' }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!recaptchaValue) {
      setErrors({ recaptcha: 'Please complete the reCAPTCHA' });
    } else {
      setErrors({});
      // Handle form submission here
      console.log('Form submitted with reCAPTCHA value:', recaptchaValue);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <ReCAPTCHA
          sitekey="6LeLsvspAAAAAE-O9jxhVBc9H_A375hRimMQmgPW"
          onChange={handleRecaptchaChange}
        />
        {errors.recaptcha && <div style={{ color: 'red' }}>{errors.recaptcha}</div>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
export default Recaptcha;







