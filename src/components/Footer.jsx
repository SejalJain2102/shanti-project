import React from 'react'
import { CiMail } from "react-icons/ci";
import { SiSkypeforbusiness } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { TiSocialSkypeOutline } from "react-icons/ti";



const Footer = () => {
  return (
      <>
    <div className=' bg-[#031130] grid lg:grid-cols-6 md:grid-cols-4 mt-7 grid-cols-2 lg:px-32 md:px-44 sm:px-32 px-10 pt-24 gap-10 text-white font-semibold'>
      <div className='flex flex-col justify-between items-start h-full col-span-2'>
        <img src="../src/assets/footer-logo.svg" alt="logo" />
        <h1>Let’s Flaunt Your Digital
        Appeal Worldwide!</h1>
        <p>
        <a href="#" className='flex justify-start items-center gap-2 hover:text-orange-400 '><CiMail/>info@shantiinfosoft.com</a>
        <a href="#" className='flex justify-start items-center gap-2 hover:text-orange-400 '> <SiSkypeforbusiness/> shanti.infotech</a>
        <a href="#" className='flex justify-start items-center gap-2 hover:text-orange-400 '> <FaWhatsapp/> +91-9981225000</a>
        </p>
      </div>

      <div className='col-span-2 '>
        <h1 className='mb-3 text-red-500' >SERVICES</h1>
        <ul>
          <li className='flex hover:text-red-700' >  <h1 className='hover:text-red-700 hover:translate-x-3 ease-in duration-300 '>UI-UX Design</h1></li>
          <li className='hover:text-red-700 hover:translate-x-3 ease-in duration-300 '>Blockchain Development</li>
          <li className='hover:text-red-700 hover:translate-x-3 ease-in duration-300 '>Devops Development</li>
          <li className='hover:text-red-700 hover:translate-x-3 ease-in duration-300 '>Web App Development</li>
          <li className='hover:text-red-700 hover:translate-x-3 ease-in duration-300 '>Cloud Consulting</li>
          <li className='hover:text-red-700 hover:translate-x-3 ease-in duration-300 '>Mobile App Development</li>
          <li className='hover:text-red-700 hover:translate-x-3 ease-in duration-300 '>React Native Development</li>
        </ul>
      </div>

      <div className='col-span-1'>
        <h1 className='mb-3 text-red-500' >QUICK LINKS</h1>
        <ul>
          <li className='hover:text-red-700 hover:translate-x-3 ease-in duration-300 '>About Us</li>
          <li className='hover:text-red-700 hover:translate-x-3 ease-in duration-300 '>Careers</li>
          <li className='hover:text-red-700 hover:translate-x-3 ease-in duration-300 '>Contact Us</li>
          <li className='hover:text-red-700 hover:translate-x-3 ease-in duration-300 '>Portfolio</li>
          <li className='hover:text-red-700 hover:translate-x-3 ease-in duration-300 '>Training</li>
          <li className='hover:text-red-700 hover:translate-x-3 ease-in duration-300 '>Our Team</li>
        </ul>
      </div>

      <div className='col-span-1'>
        <h1 className='mb-3 text-red-500' >LEGAL</h1>
        <ul>
          <li className='hover:text-red-700 hover:translate-x-3 ease-in duration-300 '>Privacy Policy</li>
          <li className='hover:text-red-700 hover:translate-x-3 ease-in duration-300 '>Terms & Conditions</li>
          <li className='hover:text-red-700 hover:translate-x-3 ease-in duration-300 '>Privacy Practices</li>
        </ul>
      </div>
    </div>
    <div className='bg-[#031130] text-white lg:flex justify-between space-y-3 pt-3 items-center sm:px-32 px-10'>
      <p>Copyright © 2024 shantiinfosoft.com   |   All rights reserved.</p>

      <div className='grid sm:grid-cols-6 grid-cols-3 pt-5 items-center justify-center sm:gap-4 gap-1'>

        <div className='col-span-1 '>
        <div className='circle rounded-full border-r-4 border-white hover:border-red-500  h-12 w-12 transition-transform duration-1200 ease-in-out hover:rotate-360'><a href="https://www.facebook.com/shantiinfosoft"></a></div>
        <a href="https://www.facebook.com/shantiinfosoft">
        <FaFacebookF className=' text-4xl p-1  relative -top-10 left-1 '/>
        </a>
        </div>
        <div className='col-span-1'>
        <div className='circle rounded-full border-r-4 border-white hover:border-red-500  h-12 w-12 transition-transform duration-1200 ease-in-out hover:rotate-360'></div>
        <a href="https://www.linkedin.com/company/shantiinfosoft/?originalSubdomain=in">
        <FaLinkedinIn className=' text-4xl p-1  relative -top-10 left-1 '/>
        </a>
        </div>
        <div className='col-span-1'>
        <div className='circle rounded-full border-r-4 border-white hover:border-red-500  h-12 w-12 transition-transform duration-1200 ease-in-out hover:rotate-360'></div>
        <a href="https://x.com/i/flow/login?redirect_after_login=%2Fshantiinfosoft">
        <FaXTwitter className=' text-4xl p-1  relative -top-10 left-1 '/>
        </a>
        </div>
        <div className='col-span-1'>
        <div className='circle rounded-full border-r-4 border-white hover:border-red-500  h-12 w-12 transition-transform duration-1200 ease-in-out hover:rotate-360'></div>
        <a href="https://www.instagram.com/shantiinfosoftllp/">
        <FaInstagram className=' text-4xl p-1  relative -top-10 left-1 '/>
        </a>
        </div>
        <div className='col-span-1'>
        <div className='circle rounded-full border-r-4 border-white hover:border-red-500  h-12 w-12 transition-transform duration-1200 ease-in-out hover:rotate-360'></div>
        <a href="https://api.whatsapp.com/send/?phone=9981225000&text=Hi%2C+Shantiinfosoft&type=phone_number&app_absent=0">
        <FaWhatsapp className=' text-4xl p-1  relative -top-10 left-1 '/>
        </a>
        </div>
        <div className='col-span-1'>
        <div className='circle rounded-full border-r-4 border-white hover:border-red-500  h-12 w-12 transition-transform duration-1200 ease-in-out hover:rotate-360'></div>
        <a href="skype:shanti.infotech">
        <TiSocialSkypeOutline className=' text-4xl p-1  relative -top-10 left-1 '/>

        </a>
        </div>

      </div>
    </div>
    </>
  )
}

export default Footer
