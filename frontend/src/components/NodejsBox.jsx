import React, { useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaNodeJs } from "react-icons/fa";

import AOS from 'aos';
import 'aos/dist/aos.css';

const NodejsBox = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div  className='flex flex-col justify-between border md:h-fit rounded-md p-5 '>
      {/* Node.js Section */}
    <div className='flex items-center'>
      <FaNodeJs className='text-green-700 text-4xl'/>
      <h1 className='font-bold text-2xl md:text-3xl ml-2'>Node.js Training & Internship</h1>
    </div>
    <div className='flex flex-wrap gap-3 mt-2 text-lg'>
      <button className='border rounded-md p-1 px-2'>12 Weeks</button>
      <button className='border rounded-md p-1 px-2'>6 Modules</button>
      <button className='border rounded-md p-1 px-2'>Live Projects</button>
    </div>
    <div className='space-y-2 mt-2 flex flex-col gap-2'>
      <p className='text-lg'>
        Embark on a transformative journey in Node.js with us, your premier destination for Node.js internship and training programs in Indore. If you are looking to delve deeper into Node.js, Join our comprehensive Node.js training in Indore, where you'll receive in-depth knowledge and hands-on training in this powerful JavaScript runtime.
      </p>
      <ul className='list-disc list-inside'>
        <li className='flex items-center gap-1 text-lg'><IoMdCheckmarkCircleOutline/> Database designing</li>
        <li className='flex items-center gap-1 text-lg'><IoMdCheckmarkCircleOutline/> Modular programming & NPM</li>
        <li className='flex items-center gap-1 text-lg'><IoMdCheckmarkCircleOutline/> MVC</li>
        <li className='flex items-center gap-1 text-lg'><IoMdCheckmarkCircleOutline/> Build reusable modules</li>
      </ul>
      <Link to="/course/node">
        <button className='bg-red-600 text-white tracking-widest font-bold text-sm rounded w-full p-3 hover:bg-red-700'>
          Know More
        </button>
      </Link>
    </div>
  </div>
  )
}

export default NodejsBox
