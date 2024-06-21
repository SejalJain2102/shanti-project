import React, { useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import {  FaReact } from "react-icons/fa";

import AOS from 'aos';
import 'aos/dist/aos.css';

const ReactjsBox = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div  className='flex flex-col justify-between border rounded-md p-5 h-full'>
     {/* React.js Section */}
   <div className='flex items-center'>
     <FaReact className='text-blue-500 text-4xl'/>
     <h1 className='font-bold text-2xl md:text-3xl ml-2'>React.js Training & Internship</h1>
   </div>
   <div className='flex flex-wrap gap-3 mt-2 text-lg'>
     <button className='border rounded-md p-1 px-2'>12 Weeks</button>
     <button className='border rounded-md p-1 px-2'>6 Modules</button>
     <button className='border rounded-md p-1 px-2'>Live Projects</button>
   </div>
   <div className='space-y-2 mt-2 flex flex-col gap-2'>
     <p className='text-lg'>
       Elevate your React JS skills with Shanti Infosoft, the ultimate destination for React JS training and internship programs in Indore. Immerse yourself in real-world projects during our React JS internship in Indore, gaining practical insights and honing your skills under the guidance of industry experts. If you are ready to validate your expertise, Enroll in our React JS certification course in Indore, where you'll receive a recognized certification, showcasing your proficiency in React JS development.
     </p>
     <ul className='list-disc list-inside'>
       <li className='flex items-center gap-1 text-lg'><IoMdCheckmarkCircleOutline/> Build Single Apps</li>
       <li className='flex items-center gap-1 text-lg'><IoMdCheckmarkCircleOutline/> Interactive forms Setup and use the create react app</li>
       <li className='flex items-center gap-1 text-lg'><IoMdCheckmarkCircleOutline/> React Testing Library</li>
       <li className='flex items-center gap-1 text-lg'><IoMdCheckmarkCircleOutline/> Code Splitting</li>
     </ul>
     <Link to="/course/reactjs">
       <button className='bg-red-600 text-white tracking-widest font-bold text-sm rounded w-full p-3 hover:bg-red-700'>
         Know More
       </button>
     </Link>
   </div>
 </div>
  )
}

export default ReactjsBox
