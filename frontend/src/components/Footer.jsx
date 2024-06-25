import React from 'react'
import { CiMail } from "react-icons/ci";
import { SiSkypeforbusiness } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { Link } from 'react-router-dom';



const Footer = () => {
  return (
      <div className=' '>
    <div className=' bg-[#031130] grid  xl:grid-cols-4 lg:grid-cols-2 sm:grid-cols-2 mt-14 pb-4 grid-cols-1 lg:px-32 md:px-32 sm:px-24 px-10 pt-24 gap-6 text-white font-semibold '>
      <div className='flex flex-col justify-between items-start h-full col-span-1'>
        <img className='h-24 ' src="../src/assets/ShantiAcademyLogoS.png" alt="logo" />
        <h1>Let’s Flaunt Your Digital
        Appeal Worldwide!</h1>
        <p>
        <a href="#" className='flex justify-start items-center gap-2 hover:text-orange-400 '><CiMail/>training@shantiinfosoft.com</a>
        {/* <a href="#" className='flex justify-start items-center gap-2 hover:text-orange-400 '> <SiSkypeforbusiness/> shanti.infotech</a> */}
        <a href="#" className='flex justify-start items-center gap-2 hover:text-orange-400 '> <FaWhatsapp/>+91-8815531673</a>
        </p>
      </div>

      <div className='col-span-1'>
        <h1 className='mb-3 text-red-500 tracking-widest' >QUICK LINKS</h1>
        <ul>
          <Link to="/home"><li className='hover:text-red-700 hover:translate-x-3 ease-in duration-300 '>Home</li></Link>
          <Link to="/aboutUs"><li className='hover:text-red-700 hover:translate-x-3 ease-in duration-300 '>About Us</li></Link>
          <Link to="/blogs"><li className='hover:text-red-700 hover:translate-x-3 ease-in duration-300 '>Blogs</li></Link>
          <Link to="/course"><li className='hover:text-red-700 hover:translate-x-3 ease-in duration-300 '>Courses</li></Link>
          <Link to="/ourPlace"><li className='hover:text-red-700 hover:translate-x-3 ease-in duration-300 '>Our Placements</li></Link>
          <Link to="/contactUs"><li className='hover:text-red-700 hover:translate-x-3 ease-in duration-300 '>Contact Us</li></Link>
        </ul>
      </div>

      <div className='col-span-1 '>
        <h1 className='mb-3 text-red-500 text-lg tracking-widest' >TRAINING</h1>
        <ul className='flex flex-col '>
        <Link to="/course/reactjs"><li className='hover:text-red-700 hover:translate-x-3 ease-in duration-300' >  React Js Developer</li></Link>
          <Link to="/course/node"><li className='hover:text-red-700 hover:translate-x-3 ease-in duration-300 '>Node Js Developer</li></Link>
          <Link to="/course/python"><li className='hover:text-red-700 hover:translate-x-3 ease-in duration-300 '>Python Developer</li></Link>
          <Link to="/course/digitalMar"><li className='hover:text-red-700 hover:translate-x-3 ease-in duration-300 '>Digital Markinter</li></Link>
        </ul>
      </div>


      <div className='col-span-1'>
        <h1 className='mb-3 text-red-500 tracking-widest' >LEGAL</h1>
        <ul>
          <li className='hover:text-red-700 hover:translate-x-3 ease-in duration-300 '>Privacy Policy</li>
          <li className='hover:text-red-700 hover:translate-x-3 ease-in duration-300 '>Terms & Conditions</li>
          <li className='hover:text-red-700 hover:translate-x-3 ease-in duration-300 '>Privacy Practices</li>
        </ul>
      </div>
    </div>

     <hr />

    <div className='bg-[#031130] text-white lg:flex justify-between space-y-3 pt-1 items-center sm:px-32 px-10'>
      <p>Copyright © 2024 shantiinfosoft.com   |   All rights reserved.</p>

      <div className='grid  grid-cols-4 pt-5 items-center justify-center sm:gap-4 gap-1'>

        <div className='col-span-1 '>
        <div className='circle rounded-full border-r-4 border-white hover:border-red-500  h-12 w-12 transition-transform duration-1200 ease-in-out hover:rotate-360'><a href="https://www.facebook.com/shantiinfosoft"></a></div>
        <a href="https://www.facebook.com/shantiinfosoft">
        <FaFacebookF className=' text-4xl p-1  relative -top-10 left-1 '/>
        </a>
        </div>
        <div className='col-span-1'>
        <div className='circle rounded-full border-r-4 border-white hover:border-red-500  h-12 w-12 transition-transform duration-1200 ease-in-out hover:rotate-360'></div>
        <a href="https://www.linkedin.com/company/101599937/admin/dashboard/">
        <FaLinkedinIn className=' text-4xl p-1  relative -top-10 left-1 '/>
        </a>
        </div>
        {/* <div className='col-span-1'>
        <div className='circle rounded-full border-r-4 border-white hover:border-red-500  h-12 w-12 transition-transform duration-1200 ease-in-out hover:rotate-360'></div>
        <a href="https://x.com/i/flow/login?redirect_after_login=%2Fshantiinfosoft">
        <FaXTwitter className=' text-4xl p-1  relative -top-10 left-1 '/>
        </a>
        </div> */}
        <div className='col-span-1'>
        <div className='circle rounded-full border-r-4 border-white hover:border-red-500  h-12 w-12 transition-transform duration-1200 ease-in-out hover:rotate-360'></div>
        <a href=" https://www.instagram.com/shantiacademyt/">
        <FaInstagram className=' text-4xl p-1  relative -top-10 left-1 '/>
        </a>
        </div>
        <div className='col-span-1'>
        <div className='circle rounded-full border-r-4 border-white hover:border-red-500  h-12 w-12 transition-transform duration-1200 ease-in-out hover:rotate-360'></div>
        <a href="https://api.whatsapp.com/send/?phone=+91 88155 31673&text=Hi%2C+Shantiinfosoft&type=phone_number&app_absent=0">
        <FaWhatsapp className=' text-4xl p-  relative -top-10 left-1 '/>
        </a>
        </div>
        {/* <div className='col-span-1'>
        <div className='circle rounded-full border-r-4 border-white hover:border-red-500  h-12 w-12 transition-transform duration-1200 ease-in-out hover:rotate-360'></div>
        <a href="skype:shanti.infotech">
        <TiSocialSkypeOutline className=' text-4xl p-1  relative -top-10 left-1 '/>

        </a>
        </div> */}

      </div>
    </div>
    </div>
  )
}

export default Footer
