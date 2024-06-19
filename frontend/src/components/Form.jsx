import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import ReCAPTCHA from 'react-google-recaptcha';
const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [courses, setCourses] = useState({
    nodejs: false,
    python: false,
    reactjs: false,
    digitalMarketing: false
  });
  const [errors, setErrors] = useState({});
  const [recaptchaValue, setRecaptchaValue] = useState(null);
  const validate = () => {
    let tempErrors = {};
    if (!name) tempErrors.name = "Please enter name";
    if (!email) tempErrors.email = "Please enter valid email";
    if (!mobile) tempErrors.mobile = "Please enter phone no.";
    if (!recaptchaValue) tempErrors.recaptcha = "Please complete the reCAPTCHA";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log({
        name,
        email,
        mobile,
        courses,
        recaptchaValue
      });
    }
  };
  const handleCourseChange = (e) => {
    setCourses({
      ...courses,
      [e.target.name]: e.target.checked
    });
  };
  return (
    <div style={styles.container}>
      <h1 className='font-bold text-lg'>Request a call back</h1><br></br>
      <p>Let's turn your curiosity into a conversation! Your journey starts with a click. Reach out now!</p>
      <br></br>
      <form onSubmit={handleSubmit}>
        <div style={styles.field}>
          <input
            type="text"
            placeholder="Your Name*"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={styles.input}
          />
          {errors.name && <div style={styles.error}>{errors.name}</div>}
        </div>
        <div style={styles.field}>
          <input
            type="email"
            placeholder="Your Email*"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />
          {errors.email && <div style={styles.error}>{errors.email}</div>}
        </div>
        <div style={styles.field}>
          <PhoneInput
            country={'in'}
            value={mobile}
            onChange={setMobile}
            inputStyle={{ width: '100%', padding: '10px', fontSize: '16px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
          {errors.mobile && <div style={styles.error}>{errors.mobile}</div>}
        </div>
        <div style={styles.field}>
          <p>Select Courses</p>
          <label>
            <input
              type="checkbox"
              name="nodejs"
              checked={courses.nodejs}
              onChange={handleCourseChange}
            /> Node Js
          </label>
          <label>
            <input
              type="checkbox"
              name="python"
              checked={courses.python}
              onChange={handleCourseChange}
            /> Python
          </label>
          <label>
            <input
              type="checkbox"
              name="reactjs"
              checked={courses.reactjs}
              onChange={handleCourseChange}
            /> React Js
          </label>
          <label>
            <input
              type="checkbox"
              name="digitalMarketing"
              checked={courses.digitalMarketing}
              onChange={handleCourseChange}
            /> Digital Marketing
          </label>
        </div>
        <div style={styles.field}>
          <ReCAPTCHA
            sitekey="Your-reCAPTCHA-Site-Key"
            onChange={(value) => setRecaptchaValue(value)}
          />
          {errors.recaptcha && <div style={styles.error}>{errors.recaptcha}</div>}
        </div>
        <button type="submit" style={styles.button}>REGISTER</button>
      </form>
    </div>
  );
};
const styles = {
  container: {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: 'white',
  },
  field: {
    marginBottom: '15px',
  },
  input: {
    width: '93%',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  button: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    color: 'white',
    backgroundColor: '#F44336',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  error: {
    color: 'red',
    fontSize: '12px',
  },
};
export default Form;