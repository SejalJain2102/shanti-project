import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
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


const Book = ({onClose}) => {
  useEffect(() => {
    AOS.init();
}, []);
  
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
    <div data-aos="fade-down" className='pt-10 md:flex justify-center items-center  p-2  fixed inset-0  backdrop-blur-sm z-40    '>
      <div className='md:flex md:justify-center  lg:items-end md:bg-[#031130] bg-[#031130] md:py-10 p-2 md:h-[520px] text-white '>
        <h1 onClick={onClose}  className='font-bold text-3xl text-end block md:hidden m-2'>x</h1>
      <div className=' flex flex-col gap-4 bg-[#031130] p-4 '>
        <h1 className='text-3xl font-bold'>Wanna Talk? <br />
        We would love to hear.</h1>
        <h2 className='text-[#6f6e6e] text-sm font-semibold'>For sales queries, contact us at:</h2>
        <h6 className='text-[#626480] text-sm font-semibold'>Email</h6>
        <a className='font-semibold' href="">info@shantiinfosoft.com</a>
        <h6 className='text-[#626480] text-sm font-semibold'>Phone</h6>
        <h3 className='font-semibold' >+91-9981225000</h3>

        <div className='flex flex-wrap pt-5   gap-1'>

        <div className=' '>
        <div className='circle rounded-full border-r-4 border-white hover:border-red-500  h-12 w-12 transition-transform duration-1200 ease-in-out hover:rotate-360'><a href="https://www.facebook.com/shantiinfosoft"></a></div>
        <a href="https://www.facebook.com/shantiinfosoft">
        <FaFacebookF className=' text-4xl p-1  relative -top-10 left-1 '/>
        </a>
        </div>
        <div className=''>
        <div className='circle rounded-full border-r-4 border-white hover:border-red-500  h-12 w-12 transition-transform duration-1200 ease-in-out hover:rotate-360'></div>
        <a href="https://www.linkedin.com/company/shantiinfosoft/?originalSubdomain=in">
        <FaLinkedinIn className=' text-4xl p-1  relative -top-10 left-1 '/>
        </a>
        </div>
        <div className=''>
        <div className='circle rounded-full border-r-4 border-white hover:border-red-500  h-12 w-12 transition-transform duration-1200 ease-in-out hover:rotate-360'></div>
        <a href="https://x.com/i/flow/login?redirect_after_login=%2Fshantiinfosoft">
        <FaXTwitter className=' text-4xl p-1  relative -top-10 left-1 '/>
        </a>
        </div>
        <div className=''>
        <div className='circle rounded-full border-r-4 border-white hover:border-red-500  h-12 w-12 transition-transform duration-1200 ease-in-out hover:rotate-360'></div>
        <a href="https://www.instagram.com/shantiinfosoftllp/">
        <FaInstagram className=' text-4xl p-1  relative -top-10 left-1 '/>
        </a>
        </div>
        <div className=''>
        <div className='circle rounded-full border-r-4 border-white hover:border-red-500  h-12 w-12 transition-transform duration-1200 ease-in-out hover:rotate-360'></div>
        <a href="https://api.whatsapp.com/send/?phone=9981225000&text=Hi%2C+Shantiinfosoft&type=phone_number&app_absent=0">
        <FaWhatsapp className=' text-4xl p-1  relative -top-10 left-1 '/>
        </a>
        </div>
        <div className=''>
        <div className='circle rounded-full border-r-4 border-white hover:border-red-500  h-12 w-12 transition-transform duration-1200 ease-in-out hover:rotate-360'></div>
        <a href="skype:shanti.infotech">
        <TiSocialSkypeOutline className=' text-4xl p-1  relative -top-10 left-1 '/>

        </a>
        </div>

      </div>
      </div>
      </div>

      <div className='flex flex-col justify-center items-start h-[520px] pt-2 border  bg-white  shadow-2xl'>
        <a onClick={onClose} className='font-bold text-3xl text-end w-full hidden md:block'>x</a>
      <div className='max-w-full w-full p-4'>
          <h1 className='font-bold text-2xl lg:text-3xl  mb-4'>
          LET'S WORK TOGETHER
          </h1>
          <form onSubmit={handleSubmit} className='space-y-4 '>
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
              inputStyle={{ width: '50%', border: '0px solid black' }}
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
            <textarea className="form-control w-full border-b rounded p-2 border-black removeErr" id="message_one" name="message_one" placeholder="Message *" required="" rows="2" type="text" value=""></textarea>
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
            <Link to="/submit" className='' ><button
              className='bg-red-600 w-fit ml-auto tracking-widest font-bold text-sm text-white m-2 px-4 py-2 rounded md:w-36 mx-auto hover:bg-red-700'
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

export default Book
