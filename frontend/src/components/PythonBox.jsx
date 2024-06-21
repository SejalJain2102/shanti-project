import React, { useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

import python from "../assets/python-logo.svg";
import AOS from 'aos';
import 'aos/dist/aos.css';

const PythonBox = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div  className='flex flex-col justify-between border rounded-md p-5 h-full'>
      {/* Python Section */}
    <div className='flex items-center'>
      <img className='h-8' src={python} alt='Python Logo'/>
      <h1 className='font-bold text-2xl md:text-3xl ml-2'>Python Training & Internship</h1>
    </div>
    <div className='flex flex-wrap gap-3 mt-2 text-lg'>
      <button className='border rounded-md p-1 px-2'>12 Weeks</button>
      <button className='border rounded-md p-1 px-2'>6 Modules</button>
      <button className='border rounded-md p-1 px-2'>Live Projects</button>
    </div>
    <div className='space-y-2 mt-2 flex flex-col gap-2'>
      <p className='text-lg'>
        Unlock the world of Python at Shanti Infosoft LLP, your go-to destination for Python training, internships, and certification courses in Indore. Our Python training program is meticulously designed to provide you with a solid foundation in Python programming. Immerse yourself in real-world projects during our Python internship in Indore, where you can apply your knowledge and acquire hands-on experience.
      </p>
      <ul className='list-disc list-inside'>
        <li className='flex items-center gap-1 text-lg'><IoMdCheckmarkCircleOutline/> Python Fundamentals</li>
        <li className='flex items-center gap-1 text-lg'><IoMdCheckmarkCircleOutline/> Working With Databases</li>
        <li className='flex items-center gap-1 text-lg'><IoMdCheckmarkCircleOutline/> Web Scraping</li>
        <li className='flex items-center gap-1 text-lg'><IoMdCheckmarkCircleOutline/> Web App Development With Django</li>
      </ul>
      <Link to="/course/python">
        <button className='bg-red-600 text-white tracking-widest font-bold text-sm rounded w-full p-3 hover:bg-red-700'>
          Know More
        </button>
      </Link>
    </div>
  </div>
  )
}

export default PythonBox
