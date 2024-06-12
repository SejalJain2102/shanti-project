import React, { useState } from 'react';
import { Link } from "react-router-dom"; 
import { IoMenu, IoClose } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { SiSkypeforbusiness } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
    <nav className='flex justify-between  w-auto mx-3  md:mx-6 h-12'>
    <div className='flex justify-start items-center sm:gap-1 font-semibold text-xs sm:text-sm md:text-md' >
      <p className='border-r-2 px-2 flex justify-center items-center   hover:text-orange-400  '><CiMail className=' text-lg'/><span className='hidden sm:block'>info@shantiinfosoft.com</span></p>
      <p className='border-r-2 px-2 flex justify-center items-center   hover:text-orange-400  '><SiSkypeforbusiness className=' text-lg'/><span className='hidden sm:block'>shanti.infotech</span></p>
      <p className='flex justify-center items-center  pl-1 hover:text-orange-400'><FaWhatsapp className=' text-lg'/><span className='hidden sm:block'>+91-9981225000</span></p>
    </div>
    <div className='flex justify-end items-center'>
    <button className=' bg-[#EE4F50] h-8 px-2 text-white text-sm rounded'>Book Free Consultation</button>
    </div>
    </nav>
    <hr />
    <header className='mx-8 p-2 md:p-4 h-16 flex justify-between items-center sticky top-0 bg-white'>
          <img className='hidden sm:block w-40 md:w-auto' src="../src/assets/shanti_academy-logo.png" alt="logo" />
          <img className='sm:hidden block w-16' src="../src/assets/shanti_academy_small-logo.png" alt="logo" />
      
        <div className="flex items-center gap-3 font-thin">
          <ul className={`md:flex md:justify-between md:items-center md:gap-6 ${isMenuOpen ? 'flex relative top-16  flex-col  items-center' : 'hidden'}`}>
            <li className='hover:border-orange-500 hover:border-b-2' >Services</li>
            <li className='hover:border-orange-500 hover:border-b-2' >Our Portfolio</li>
            <li className='hover:border-orange-500 hover:border-b-2' >About Us</li>
            <li className='hover:border-orange-500 hover:border-b-2' >Training</li>
            <button className=' border border-black p-2 px-4 rounded'>
            Contact Us
          </button>
          </ul>
        </div>
      </header>
          <div className='flex justify-end '>
          <button className='md:hidden' onClick={toggleMenu}>
            {isMenuOpen ? <IoMenu className='text-3xl relative -top-12 right-4 hover:rotate-90' /> : <IoMenu className='text-3xl relative -top-12 right-4' />}
          </button>
          </div>
    </>
  )
}

export default Header
