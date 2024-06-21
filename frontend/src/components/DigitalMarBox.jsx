import React, { useEffect } from 'react';
import { Link,  } from "react-router-dom";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import mark from "../assets/marketing-logo.svg";
import AOS from 'aos';
import 'aos/dist/aos.css';

const DigitalMarBox = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div  className='flex flex-col justify-between border rounded-md p-5 h-full'>
      {/* Digital Marketing Section */}
    <div className='flex items-center'>
      <img className='h-8' src={mark} alt='Digital Marketing Logo'/>
      <h1 className='font-bold text-2xl md:text-3xl ml-2'>Digital Marketing Training & Internship</h1>
    </div>
    <div className='flex flex-wrap gap-3 mt-2 text-lg'>
      <button className='border rounded-md p-1 px-2'>12 Weeks</button>
      <button className='border rounded-md p-1 px-2'>6 Modules</button>
      <button className='border rounded-md p-1 px-2'>Live Projects</button>
    </div>
    <div className='space-y-2 mt-2 flex flex-col gap-2'>
      <p className='text-lg'>
        Embark on a transformative journey in Digital Marketing with Shanti Infosoft LLP, your premier destination for Digital Marketing internship and training programs in Indore. Gain expertise in Search Engine Optimization (SEO), Social Media Marketing (SMM), Pay Per Click (PPC), and App Store Optimization (ASO) through our comprehensive training curriculum.
      </p>
      <ul className='list-disc list-inside'>
        <li className='flex items-center gap-1 text-lg'><IoMdCheckmarkCircleOutline/> Search Engine Optimization</li>
        <li className='flex items-center gap-1 text-lg'><IoMdCheckmarkCircleOutline/> Social Media Marketing</li>
        <li className='flex items-center gap-1 text-lg'><IoMdCheckmarkCircleOutline/> Pay Per Click</li>
        <li className='flex items-center gap-1 text-lg'><IoMdCheckmarkCircleOutline/> App Store Optimization</li>
      </ul>
      <Link to="/course/digitalMar">
        <button className='bg-red-600 text-white tracking-widest font-bold text-sm rounded w-full p-3 hover:bg-red-700'>
          Know More
        </button>
      </Link>
    </div>
  </div>
  )
}

export default DigitalMarBox
