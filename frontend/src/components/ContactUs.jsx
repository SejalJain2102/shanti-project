import React, { useEffect, useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import { CiMail } from "react-icons/ci";
import { IoIosCall } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import AOS from 'aos';
import 'aos/dist/aos.css';
import MyForm from './MyForm';

const ContactUs = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  

  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  




  return (
    <div style={{ backgroundImage: "url('../src/assets/map.svg')", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center" }} className='grid grid-cols-1 lg:grid-cols-2 justify-evenly gap-5 lg:gap-0 items-center mt-3 mb-10'>
      <div className='flex justify-center items-center p-3'>
        <div  className='max-w-96 space-y-5'>
          <p className='border-l-4 border-red-500 p-4'>
            <h1 className='text-4xl font-bold'>Let’s Talk</h1><br />
            Looking for a website design company ? <br /><br />
            Look no further than Shanti Infosoft. We specialize in creating user-centric websites that not only look great but also deliver powerful results. We are best Website development company ensure your website functions flawlessly. <br /><br />
            Contact Shanti Infosoft for a free consultation!
          </p>
          <div className='grid grid-cols-6'>
            <CiMail className='col-span-1 text-4xl  text-red-500 ' />
            <p className='col-span-5 flex flex-col'>
              <label className='text-xs font-semibold' htmlFor="">Email</label>
              <a href="mailto:training@shantiinfosoft.com" className='font-normal hover:text-red-500' >training@shantiinfosoft.com</a>
            </p>
          </div>
          <div className='grid grid-cols-6 '>
            <IoIosCall className='col-span-1 text-4xl  text-red-500 ' />
            <p className='col-span-5 flex flex-col'>
              <label className='text-xs font-semibold' htmlFor="">Phone</label>
              <a href="tel:+918815531673" className='font-normal hover:text-red-500'> +91-8815531673</a>
            </p>
          </div>
          <div className='grid grid-cols-6'>
            <FaLocationDot className='col-span-1 text-4xl  text-red-500 ' />
            <p className='col-span-5 flex flex-col'>
              <label className='text-xs font-semibold' htmlFor="">Address</label>
              <a className='hover:text-red-500' href="">Plot no 70 1st & 3rd floor PU 4 Scheme, No.54, Vijay Nagar Square, Behind C21 Mall, Indore, Madhya Pradesh</a>
            </p>
          </div>

          <div className='hidden lg:block'>
            <div className='grid  grid-cols-4 pt-5 items-center justify-center sm:gap-4 gap-1 '>
              <div className='col-span-1 '>
                <div className='circle rounded-full border-r-4 border-black hover:border-red-500  h-12 w-12 transition-transform duration-1200 ease-in-out hover:rotate-360'><a href="https://www.facebook.com/shantiinfosoft"></a></div>
                <a href=" https://www.facebook.com/profile.php?id=61556123675098">
                  <FaFacebookF className=' text-4xl p-1  relative -top-10 left-1 ' />
                </a>
              </div>
              <div className='col-span-1'>
                <div className='circle rounded-full border-r-4 border-black hover:border-red-500  h-12 w-12 transition-transform duration-1200 ease-in-out hover:rotate-360'></div>
                <a href="https://www.linkedin.com/company/101599937/admin/dashboard/">
                  <FaLinkedinIn className=' text-4xl p-1  relative -top-10 left-1 ' />
                </a>
              </div>
              {/* <div className='col-span-1'>
                <div className='circle rounded-full border-r-4 border-black hover:border-red-500  h-12 w-12 transition-transform duration-1200 ease-in-out hover:rotate-360'></div>
                <a href="https://x.com/i/flow/login?redirect_after_login=%2Fshantiinfosoft">
                  <FaXTwitter className=' text-4xl p-1  relative -top-10 left-1 ' />
                </a>
              </div> */}
              <div className='col-span-1'>
                <div className='circle rounded-full border-r-4 border-black hover:border-red-500  h-12 w-12 transition-transform duration-1200 ease-in-out hover:rotate-360'></div>
                <a href="https://www.instagram.com/shantiacademyt/">
                  <FaInstagram className=' text-4xl p-1  relative -top-10 left-1 ' />
                </a>
              </div>
              <div className='col-span-1'>
                <div className='circle rounded-full border-r-4 border-black hover:border-red-500  h-12 w-12 transition-transform duration-1200 ease-in-out hover:rotate-360'></div>
                <a href="https://api.whatsapp.com/send/?phone=9981225000&text=Hi%2C+Shantiinfosoft&type=phone_number&app_absent=0">
                  <FaWhatsapp className=' text-4xl p-1  relative -top-10 left-1 ' />
                </a>
              </div>
              {/* <div className='col-span-1'>
                <div className='circle rounded-full border-r-4 border-black hover:border-red-500  h-12 w-12 transition-transform duration-1200 ease-in-out hover:rotate-360'></div>
                <a href="skype:shanti.infotech">
                  <TiSocialSkypeOutline className=' text-4xl p-1  relative -top-10 left-1 ' />
                </a>
              </div> */}
            </div>
          </div>

        </div>
      </div>
      <div  className='flex justify-center items-start'>
        <div className='border rounded-lg bg-white max-w-96 shadow-2xl p-6'>
          <h1 className='font-bold text-2xl lg:text-3xl  mb-4'>
            LET'S WORK TOGETHER
          </h1>
          <MyForm/>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
