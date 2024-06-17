import React, { useState } from 'react';
import { Link } from "react-router-dom"; 
import { IoMenu, IoClose } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { SiSkypeforbusiness } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";
import Book from './Book';

const Header = () => {
  const[showBook,setShowBook] = useState(false);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
    
      {/* Top Navigation Bar */}
      <nav className='flex justify-between items-center mx-3 md:mx-6 h-12'>
        <div className='flex gap-3 items-center font-semibold text-sm'>
          <div className='border-r-2 px-2 flex items-center hover:text-orange-400'>
            <CiMail className='text-lg' />
            <span className='hidden sm:inline-block ml-1'>info@shantiinfosoft.com</span>
          </div>
          <div className='border-r-2 px-2 flex items-center hover:text-orange-400'>
            <SiSkypeforbusiness className='text-lg' />
            <span className='hidden sm:inline-block ml-1'>shanti.infotech</span>
          </div>
          <div className='flex items-center pl-1 hover:text-orange-400'>
            <FaWhatsapp className='text-lg' />
            <span className='hidden sm:inline-block ml-1'>+91-9981225000</span>
          </div>
        </div>
        <button onClick={() => setShowBook(true)} className='bg-[#EE4F50] h-8 px-2 text-white text-sm rounded hidden md:block'>Book Free Consultation</button>
      </nav>
      <hr />
      
      {/* Main Header */}
      <header className=' w-full  p-2 md:p-4 h-16 flex justify-between items-center sticky top-0 z-40 bg-white shadow-2xl'>
        <img className='hidden sm:block h-14 p-1 md:w-auto' src="../src/assets/ShantiAcademyLogo.png" alt="logo" />
        <img className='sm:hidden block h-14 p-1' src="../src/assets/ShantiAcademyLogo.png" alt="logo" />
        
        {/* Menu Button for Mobile */}
        <div className="flex items-center gap-3 md:hidden">
       <button className='text-3xl' onClick={toggleMenu}>
            {isMenuOpen ? <IoClose className='text-[#333] hidden hover:text-[#EE4F50] transition transform hover:rotate-90' /> : <IoMenu className='text-[#333] hover:text-[#EE4F50]  transition' />}
          </button>
        </div>
        
        {/* Navigation Links */}
        <div className={`md:flex  bg-white items-center gap-6 ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
          <ul className={`flex flex-col md:flex-row gap-6 items-center ${isMenuOpen ? 'absolute top-16 right-0 w-full bg-white shadow-md rounded-md py-2 px-2 md:relative md:top-0 md:bg-transparent md:shadow-none md:rounded-none' : 'hidden md:flex'}`}>
            <Link to="/home"><li className='hover:text-[#EE4F50] cursor-pointer'>Home</li></Link>
            <Link to="/course"><li className='hover:text-[#EE4F50] cursor-pointer'>Cources</li></Link>
            <Link to="/ourPlace"><li className='hover:text-[#EE4F50] cursor-pointer'>Our Placements</li></Link>
            <Link to="/"><li className='hover:text-[#EE4F50] cursor-pointer'>About Us</li></Link>
          </ul>
          <Link to="/contactUs"><button className='border border-black p-2 px-4 rounded hidden md:block'>Contact Us</button></Link>
        </div>
      </header>
      <div>
      { showBook &&  <Book className='blur-lg'  onClose={()=> setShowBook(false) }/>}
      </div>
    </>
  )
}

export default Header;
