import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { SiSkypeforbusiness } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";
import Book from './Book';


const Header = () => {
  const [activeButton, setActiveButton] = useState(null);
  const [showBook, setShowBook] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const location = useLocation();
  const menuRef = useRef(null);

  // for remove menubar when we click on window
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target) && isMenuOpen) {
      setIsMenuOpen(false);
    }
  };



  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  // for active button based on location
  useEffect(() => {
    const pathMap = {
      "/home": "Home",
      "/aboutUs": "About Us",
      "/blogs": "Blogs",
      "/course": "Courses",
      "/ourPlace": "Our Placements",
      "/contactUs": "Contact Us",
    };
    setActiveButton(pathMap[location.pathname] || null);
  }, [location.pathname]);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Auto-close the menu when screen is large
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // change color of navbar when scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Top Navigation Bar */}
      <nav className='flex justify-between items-center mx-3 md:mx-6 h-12'>
        <div className='flex gap-3 items-center font-semibold text-sm'>
          <div className='border-r-2 px-2 flex items-center hover:text-orange-400'>
            <CiMail className='text-lg' />
            <a href="mailto:training@shantiinfosoft.com" className='hidden sm:inline-block ml-1'>training@shantiinfosoft.com</a >
          </div>
          {/* href="mailto:training@shantiinfosoft.com" */}
          {/* <div className='border-r-2 px-2 flex items-center hover:text-orange-400'>
            <SiSkypeforbusiness className='text-lg' />
            <span className='hidden sm:inline-block ml-1'>shanti.infotech</span>
          </div> */}
          <div className='flex items-center pl-1 hover:text-orange-400'>
            <FaWhatsapp className='text-lg' />
            <a href="tel:+918815531673" className='hidden sm:inline-block ml-1'>+91-8815531673</a>
          </div>
        </div>
        <button onClick={() => setShowBook(true)} className='bg-[#EE4F50] h-8 px-2 text-white text-sm rounded hidden md:block'>Book Free Counselling</button>
        <button onClick={() => setShowBook(true)} className='bg-[#EE4F50] h-8 px-2 text-white text-sm rounded md:hidden block'>Book</button>
      </nav>
      <hr />
      
      {/* Main Header */}
      <header className={`w-full p-2 md:p-4 h-16 flex justify-between items-center sticky top-0 z-40 shadow-2xl transition-colors duration-300 ${navbar ? 'bg-red-400 md:text-white' : 'bg-white'}`}>
        <div className='flex justify-center items-center gap-2'>
          <img className='h-16 p-1 md:w-auto' src="../src/assets/ShantiAcademyLogoS.png" alt="logo" />
          <h1 className='text-3xl font-bold md:block hidden'>Shanti</h1>
        </div>
        
        {/* Menu Button for Small screen */}
        <div className="flex items-center gap-3 md:hidden">
          <button className='text-3xl' onClick={toggleMenu}>
            {isMenuOpen ? <IoClose className='text-[#333] absolute right-3 top-4 hover:text-[#EE4F50] transition transform hover:rotate-90' /> : <IoMenu className='text-[#333] hover:text-[#EE4F50] transition' />}
          </button>
        </div>
        
        {/* Navigation Links */}
        <div ref={menuRef} className={`md:flex bg-white md:bg-transparent items-center gap-6 ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
          <ul className={`flex flex-col md:flex-row font-semibold gap-6 items-center ${isMenuOpen ? 'absolute top-16 right-0 w-full bg-white shadow-md rounded-md py-2 px-2 md:relative md:top-0 md:bg-transparent md:shadow-none md:rounded-none' : 'hidden md:flex'}`}>
            <Link to="/home" onClick={closeMenu}><li
              className={`text-nowrap ${activeButton === "Home" ? "underline decoration-[#EE4F50] underline-offset-4 text-[#501c1c]" : ""}`}
              onClick={() => handleButtonClick("Home")}>Home</li></Link>
            <Link to="/aboutUs" onClick={closeMenu}><li className={`text-nowrap ${activeButton === "About Us" ? "underline decoration-[#EE4F50] underline-offset-4 text-[#501c1c]" : ""}`}
              onClick={() => handleButtonClick("About Us")}>About Us</li></Link>
            <Link to="/blogs" onClick={closeMenu}><li className={`text-nowrap ${activeButton === "Blogs" ? "underline decoration-[#EE4F50] underline-offset-4 text-[#501c1c]" : ""}`}
              onClick={() => handleButtonClick("Blogs")}>Blogs</li></Link>
            <Link to="/course" onClick={closeMenu}><li className={`text-nowrap ${activeButton === "Courses" ? "underline decoration-[#EE4F50] underline-offset-4 text-[#501c1c]" : ""}`}
              onClick={() => handleButtonClick("Courses")}>Courses</li></Link>
            <Link to="/ourPlace" onClick={closeMenu}><li className={`text-nowrap ${activeButton === "Our Placements" ? "underline decoration-[#EE4F50] underline-offset-4 text-[#501c1c]" : ""}`}
              onClick={() => handleButtonClick("Our Placements")}>Our Placements</li></Link>
            <Link to="/contactUs" onClick={closeMenu}><button className={`text-nowrap ${activeButton === "Contact Us" ? "underline decoration-[#EE4F50] underline-offset-4 text-[#501c1c]" : ""}`}
              onClick={() => handleButtonClick("Contact Us")}>Contact Us</button></Link>
          </ul>
        </div>
      </header>
      <div>
        {showBook && <Book className='blur-lg' onClose={() => setShowBook(false)} />}
        {/* {showBook && <MyForm onClose={() => setShowBook(false)} />} */}
      </div>
    </>
  )
}

export default Header;
