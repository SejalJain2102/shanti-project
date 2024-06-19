import React, { useState } from 'react';
import { Link } from "react-router-dom";
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';
import { CiMail } from "react-icons/ci";
import { IoIosCall } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

import { SiSkypeforbusiness } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { TiSocialSkypeOutline } from "react-icons/ti";

const ContactUs = () => {
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
    <div style={{backgroundImage:"url('../src/assets/map.svg')", backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center"}} className='grid grid-cols-1 lg:grid-cols-2 justify-evenly items-center mt-3'>
     <div className='flex justify-center items-center '>
     <div className='max-w-96 space-y-5'>
        <p className='border-l-4 border-red-500 p-4'>
        <h1 className='text-4xl font-bold'>Let’s Talk</h1><br />
        Looking for a website design company ? <br /><br />

        Look no further than Shanti Infosoft. We specialize in creating user-centric websites that not only look great but also deliver powerful results. We are best Website development company ensure your website functions flawlessly. <br /><br />

        Contact Shanti Infosoft for a free consultation!
        </p>
        <div className='grid grid-cols-6'>
          <CiMail className='col-span-1 text-4xl  text-red-500 '/>
          <p className='col-span-5 flex flex-col'>
            <label className='text-xs font-semibold' htmlFor="">Email</label>
            <span className='font-semibold'>Sales:<a className='font-normal hover:text-red-500' href="info@shantiinfosoft.com">info@shantiinfosoft.com
            </a></span>
            <span className='font-semibold'>Career:<a className='font-normal hover:text-red-500' href="hr@shantiinfosoft.com">hr@shantiinfosoft.com</a></span>
          </p>
        </div>
        <div className='grid grid-cols-6 '>
          <IoIosCall className='col-span-1 text-4xl  text-red-500 '/>
          <p className='col-span-5 flex flex-col'>
            <label className='text-xs font-semibold' htmlFor="">Phone</label>
           
            <span className='font-semibold'>Sales:<span className='font-normal hover:text-red-500'> +91 9981225000</span></span>
            <span className='font-semibold '>Career:<span className='font-normal hover:text-red-500'>+91 8319974229</span></span>
          
          </p>
        </div>
        <div className='grid grid-cols-6'>
          <FaLocationDot className='col-span-1 text-4xl  text-red-500 '/>
          <p className='col-span-5 flex flex-col'>
            <label className='text-xs font-semibold' htmlFor="">Address</label>
            <a className='hover:text-red-500' href="">Plot no 70 1st & 3rd floor PU 4 Scheme, No.54, Vijay Nagar Square, Behind C21 Mall, Indore, Madhya Pradesh</a>
          </p>
        </div>
        <div className='grid sm:grid-cols-6 grid-cols-3 pt-5 items-center justify-center sm:gap-4 gap-1'>

      <div className='col-span-1 '>
      <div className='circle rounded-full border-r-4 border-black hover:border-red-500  h-12 w-12 transition-transform duration-1200 ease-in-out hover:rotate-360'><a href="https://www.facebook.com/shantiinfosoft"></a></div>
      <a href="https://www.facebook.com/shantiinfosoft">
      <FaFacebookF className=' text-4xl p-1  relative -top-10 left-1 '/>
      </a>
      </div>
      <div className='col-span-1'>
      <div className='circle rounded-full border-r-4 border-black hover:border-red-500  h-12 w-12 transition-transform duration-1200 ease-in-out hover:rotate-360'></div>
      <a href="https://www.linkedin.com/company/shantiinfosoft/?originalSubdomain=in">
      <FaLinkedinIn className=' text-4xl p-1  relative -top-10 left-1 '/>
      </a>
      </div>
      <div className='col-span-1'>
      <div className='circle rounded-full border-r-4 border-black hover:border-red-500  h-12 w-12 transition-transform duration-1200 ease-in-out hover:rotate-360'></div>
      <a href="https://x.com/i/flow/login?redirect_after_login=%2Fshantiinfosoft">
      <FaXTwitter className=' text-4xl p-1  relative -top-10 left-1 '/>
      </a>
      </div>
      <div className='col-span-1'>
      <div className='circle rounded-full border-r-4 border-black hover:border-red-500  h-12 w-12 transition-transform duration-1200 ease-in-out hover:rotate-360'></div>
      <a href="https://www.instagram.com/shantiinfosoftllp/">
      <FaInstagram className=' text-4xl p-1  relative -top-10 left-1 '/>
      </a>
      </div>
      <div className='col-span-1'>
      <div className='circle rounded-full border-r-4 border-black hover:border-red-500  h-12 w-12 transition-transform duration-1200 ease-in-out hover:rotate-360'></div>
      <a href="https://api.whatsapp.com/send/?phone=9981225000&text=Hi%2C+Shantiinfosoft&type=phone_number&app_absent=0">
      <FaWhatsapp className=' text-4xl p-1  relative -top-10 left-1 '/>
      </a>
      </div>
      <div className='col-span-1'>
      <div className='circle rounded-full border-r-4 border-black hover:border-red-500  h-12 w-12 transition-transform duration-1200 ease-in-out hover:rotate-360'></div>
      <a href="skype:shanti.infotech">
      <TiSocialSkypeOutline className=' text-4xl p-1  relative -top-10 left-1 '/>

      </a>
      </div>

      </div>
      </div>
     </div>

      <div className='flex justify-center items-start'>
      <div className='border rounded-lg bg-white max-w-96 shadow-2xl p-6'>
          <h1 className='font-bold text-2xl lg:text-3xl  mb-4'>
          LET'S WORK TOGETHER
          </h1>
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
              <input
                className='border-b border-black pl-3 p-2 rounded mb-3 w-full'
                type='email'
                name='email'
                placeholder='Your Email'
                value={formData.email}
                onChange={handleChange}
                required
              />
            <textarea className="form-control w-full border-b rounded p-2 border-black removeErr" id="message_one" name="message_one" placeholder="Message *" required="" rows="5" type="text" value=""></textarea>
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
              className='bg-red-600 tracking-widest font-bold text-sm text-white m-2 px-4 py-2 rounded w-full md:w-36 mx-auto hover:bg-red-700'
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
  )
}

export default ContactUs
