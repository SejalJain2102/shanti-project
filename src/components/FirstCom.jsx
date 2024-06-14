import React, { useState } from 'react';
import { Link } from "react-router-dom";
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';
import './FirstCom.css'; 

const FirstCom = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    courses: {
      nodeJs: false,
      python: false,
      reactJs: false,
      digitalMarketing: false,
    },
    isRobot: false,
  });

  const [isHovered, setIsHovered] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData({
        ...formData,
        courses: {
          ...formData.courses,
          [name]: checked,
        },
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handlePhoneChange = (value) => {
    setFormData({
      ...formData,
      mobile: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://abhinay.com/api/form', formData);
      console.log('Form submitted:', response.data);
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  return (
    <div style={{backgroundImage:"url('https://shantiinfosoft.com/images/training/banner-bg.svg')", backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center"}}  className='container mx-auto px-4 pt-6 sm:px-8 md:px-16 lg:px-32 xl:px-40'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10'>
        {/* Left section */}
        <div className='flex justify-start items-start'>
          <div className='p-7 flex flex-col gap-5'>
            <h1 className='font-bold text-3xl lg:text-4xl '>
              Level Up Your Tech Game <br />
              With Our{' '}
              <span className='underline text-rose-600'>Internships & </span>
              <br />
              <span className='underline text-rose-600'>Training</span> Programs.
            </h1>
            <p className='text-lg '>
              Gain valuable experience working on real-world projects <br />
              with leading IT companies in Indore.
            </p>
            <div className='flex gap-4 items-center justify-start'>
              <button className='px-4 py-2 text-white font-bold bg-red-600 rounded hover:bg-red-700'>
                Explore
              </button>
              <img
                className='h-8'
                src='https://shantiinfosoft.com/images/training/testimonial.png'
                alt='testimonial'
              />
            </div>
          </div>
        </div>

        {/* Right section */}
        <div className='border rounded bg-white shadow-2xl p-6'>
          <h1 className='font-bold text-2xl lg:text-3xl  mb-4'>
            Request a call back
          </h1>
          <p className='text-lg  mb-4'>
            Let's turn your curiosity into a conversation! Your journey starts
            with a click. Reach out now!
          </p>
          <form onSubmit={handleSubmit} className='space-y-4'>
            <input
              className='border-b border-black pl-3 p-2 rounded  w-full'
              type='text'
              name='name'
              placeholder='Your Name'
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              className='border-b border-black pl-3 p-2 rounded mb-3 w-full'
              type='email'
              name='email'
              placeholder='Your Email'
              value={formData.email}
              onChange={handleChange}
              required
            />
            <PhoneInput
              className='border-b border-black pl-3 p-2 rounded mb-3 w-full'
              country={'us'}
              value={formData.mobile}
              onChange={handlePhoneChange}
              inputStyle={{ width: '100%', border: '1px solid white' }}
              containerStyle={{ marginBottom: '1rem' }}
              inputProps={{
                name: 'mobile',
                required: true,
                autoFocus: false,
              }}
            />
            <div className='flex flex-col mb-3'>
              <label className='text-gray-600'>Select Courses</label>
              <div className='grid grid-cols-2 gap-2 mt-2'>
                <label className='flex items-center gap-1'>
                  <input
                    type='checkbox'
                    className='h-4 w-4'
                    name='nodeJs'
                    checked={formData.courses.nodeJs}
                    onChange={handleChange}
                  />
                  <span>Node Js</span>
                </label>
                <label className='flex items-center gap-1'>
                  <input
                    type='checkbox'
                    className='h-4 w-4'
                    name='python'
                    checked={formData.courses.python}
                    onChange={handleChange}
                  />
                  <span>Python</span>
                </label>
                <label className='flex items-center gap-1'>
                  <input
                    type='checkbox'
                    className='h-4 w-4'
                    name='reactJs'
                    checked={formData.courses.reactJs}
                    onChange={handleChange}
                  />
                  <span>React Js</span>
                </label>
                <label className='flex items-center gap-1'>
                  <input
                    type='checkbox'
                    className='h-4 w-4'
                    name='digitalMarketing'
                    checked={formData.courses.digitalMarketing}
                    onChange={handleChange}
                  />
                  <span>Digital Marketing</span>
                </label>
              </div>
            </div>
            <div className='border max-w-72 rounded bg-slate-100 flex justify-between  items-center p-2 mb-3 '>
              <label className='flex  items-center gap-1'>
                <input
                  type='checkbox'
                  className='h-8 w-8'
                  name='isRobot'
                  // checked={formData.isRobot}
                  onChange={handleChange}
                  required
                />
                <span>I'm not a robot</span>
              </label>
              <div className='flex flex-col justify-center items-center'>
                <img
                  className='h-14'
                  src='./src/assets/RecaptchaLogo.svg.png'
                  alt='reCAPTCHA'
                />
                <span className='text-[6px] '>Privacy - Terms</span>
              </div>
            </div>
            <Link to="/submit" ><button
              className='bg-red-600 text-white m-2 px-4 py-2 rounded w-full md:w-36 mx-auto hover:bg-red-700'
              type='submit'
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {isHovered ? 'Submit' : 'REGISTER'}
            </button></Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FirstCom;
