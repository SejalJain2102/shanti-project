import React from 'react'
import { CiMail } from "react-icons/ci";
import { SiSkypeforbusiness } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";


const Footer = () => {
  return (
      <>
    <div className=' bg-[#031130] grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 lg:px-32 md:px-44 sm:px-32 px-10 pt-24 gap-10 text-white font-semibold'>
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
    <div>
      <p>Copyright © 2024 shantiinfosoft.com   |   All rights reserved.</p>
      <div className='rounded-full border-r-4 border-red-600 hover:animate-spin ease-in h-8 w-8'>
        <FaFacebookF className=' text-4xl p-2 fixed'/>
      </div>
    </div>
    </>
  )
}

export default Footer
