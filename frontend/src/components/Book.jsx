import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { IoClose } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { IoIosCall } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { SiSkypeforbusiness } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";

import MyForm from './MyForm';

const Book = ({ onClose }) => {
  useEffect(() => {
    AOS.init();
  }, []);




  return (
    <div data-aos="fade-down" className=' md:p-1 flex justify-center items-center  p-2  fixed inset-0  backdrop-blur-sm z-40'>
      <div className='pt-36 md:p-1 md:flex justify-center items-center  p-2'>
      <div className='md:flex md:justify-  items-start md:bg-[#031130] bg-[#031130]  p-2 h-fit md:h-[535px] text-white'>
        
        <div className='flex flex-col gap-4 bg-[#031130] p-4'>
         <p className='flex justify-center items-start'>
         <h1 className='text-3xl font-bold'>Wanna Talk? <br />
            We would love to hear.</h1>
            <a href='' onClick={onClose} className=' md:hidden relative ml-auto  font-bold text-3xl '>
          <IoClose className=' ml-auto' />
           </a>
         </p>
          <h2 className='text-[#6f6e6e] text-sm font-semibold'>For sales queries, contact us at:</h2>
          <h6 className='text-[#626480] text-sm font-semibold'>Email</h6>
          <a className='font-semibold' href="">info@shantiinfosoft.com</a>
          <h6 className='text-[#626480] text-sm font-semibold'>Phone</h6>
          <h3 className='font-semibold'>+91-9981225000</h3>

          <div className='flex  justify-start items-center    '>
            {/* Social media links */}
            <div className='grid  grid-cols-4 pt-5 items-center justify-center sm:gap-4 gap-1 '>
              <div className='col-span-1 '>
                <div className='circle rounded-full border-r-4 border-white hover:border-red-500  h-12 w-12 transition-transform duration-1200 ease-in-out hover:rotate-360'><a href="https://www.facebook.com/shantiinfosoft"></a></div>
                <a href="https://www.facebook.com/shantiinfosoft">
                  <FaFacebookF className=' text-4xl p-1  relative -top-10 left-1 ' />
                </a>
              </div>
              <div className='col-span-1'>
                <div className='circle rounded-full border-r-4 border-white hover:border-red-500  h-12 w-12 transition-transform duration-1200 ease-in-out hover:rotate-360'></div>
                <a href="https://www.linkedin.com/company/shantiinfosoft/?originalSubdomain=in">
                  <FaLinkedinIn className=' text-4xl p-1  relative -top-10 left-1 ' />
                </a>
              </div>
              {/* <div className='col-span-1'>
                <div className='circle rounded-full border-r-4 border-white hover:border-red-500  h-12 w-12 transition-transform duration-1200 ease-in-out hover:rotate-360'></div>
                <a href="https://x.com/i/flow/login?redirect_after_login=%2Fshantiinfosoft">
                  <FaXTwitter className=' text-4xl p-1  relative -top-10 left-1 ' />
                </a>
              </div> */}
              <div className='col-span-1'>
                <div className='circle rounded-full border-r-4 border-white hover:border-red-500  h-12 w-12 transition-transform duration-1200 ease-in-out hover:rotate-360'></div>
                <a href="https://www.instagram.com/shantiinfosoftllp/">
                  <FaInstagram className=' text-4xl p-1  relative -top-10 left-1 ' />
                </a>
              </div>
              <div className='col-span-1'>
                <div className='circle rounded-full border-r-4 border-white hover:border-red-500  h-12 w-12 transition-transform duration-1200 ease-in-out hover:rotate-360'></div>
                <a href="https://api.whatsapp.com/send/?phone=9981225000&text=Hi%2C+Shantiinfosoft&type=phone_number&app_absent=0">
                  <FaWhatsapp className=' text-4xl p-1  relative -top-10 left-1 ' />
                </a>
              </div>
              {/* <div className='col-span-1'>
                <div className='circle rounded-full border-r-4 border-white hover:border-red-500  h-12 w-12 transition-transform duration-1200 ease-in-out hover:rotate-360'></div>
                <a href="skype:shanti.infotech">
                  <TiSocialSkypeOutline className=' text-4xl p-1  relative -top-10 left-1 ' />
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-col justify-start items-start md:w-[500px] h-fit md:h-[535px]  p-1 border  bg-white  shadow-2xl'>
       
        <div className=' max-w-full w-full p-4'>
          <div className='flex justify-between items-center'>
          <h1 className='font-bold text-2xl lg:text-3xl  mb-4'>
            LET'S WORK TOGETHER
          </h1>
          <a href='' onClick={onClose} className='md:block hidden relative   font-bold text-3xl right-0 -top-2'>
          <IoClose className=' ' />
          </a>
          </div>
          <MyForm/>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Book;
