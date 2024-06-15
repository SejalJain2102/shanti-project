import React from 'react';
import { Link } from "react-router-dom";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaNodeJs, FaReact, FaPython } from "react-icons/fa";
import mark from "../assets/marketing-logo.svg";
import python from "../assets/python-logo.svg";

const Explore = () => {
  return (
    <>
    <h1 className='text-3xl md:text-4xl lg:text-6xl font-bold mt-14 m-1 sm:mx-24 md:mx-32 lg:mx-56'>Explore Diverse Tech Avenues</h1>
    <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-10 mt-10 m-1 sm:mx-24 md:mx-32 lg:mx-56'>
      {/* Node.js Section */}
      <div className='border rounded-md p-5 space-y-4 h-fit'>
        <div className='flex items-center'>
          <FaNodeJs className='text-green-700 text-2xl'/>
          <h1 className='font-bold text-lg ml-2'>Node.js Training & Internship</h1>
        </div>
        <div className='flex flex-wrap gap-3 mt-2'>
          <button className='border rounded-md p-1 px-2'>12 Weeks</button>
          <button className='border rounded-md p-1 px-2'>6 Modules</button>
          <button className='border rounded-md p-1 px-2'>Live Projects</button>
        </div>
        <div className='space-y-2 mt-2 flex flex-col gap-2'>
          <p>Embark on a transformative journey in Node.js with us, your premier destination for Node.js internship and training programs in Indore. If you are looking to delve deeper into Node.js, Join our comprehensive Node.js training in Indore, where you'll receive in-depth knowledge and hands-on training in this powerful JavaScript runtime.</p>
          <ul className='list-disc list-inside'>
            <li className='flex items-center'><IoMdCheckmarkCircleOutline/> Database designing</li>
            <li className='flex items-center'><IoMdCheckmarkCircleOutline/> Modular programming & NPM</li>
            <li className='flex items-center'><IoMdCheckmarkCircleOutline/> MVC</li>
            <li className='flex items-center'><IoMdCheckmarkCircleOutline/> Build reusable modules</li>
          </ul>
          <Link to="/node"><button className='bg-red-600 text-white tracking-widest font-bold text-sm rounded w-full py-1 hover:bg-red-700'>Know More</button></Link>
        </div>
      </div>

      {/* React.js Section */}
      <div className='border rounded-md p-5 space-y-4 lg:mt-6'>
        <div className='flex items-center'>
          <FaReact className='text-blue-500 text-2xl'/>
          <h1 className='font-bold text-lg ml-2'>React.js Training & Internship</h1>
        </div>
        <div className='flex flex-wrap gap-3 mt-2'>
          <button className='border rounded-md p-1 px-2'>12 Weeks</button>
          <button className='border rounded-md p-1 px-2'>6 Modules</button>
          <button className='border rounded-md p-1 px-2'>Live Projects</button>
        </div>
        <div className='space-y-2 mt-2 flex flex-col gap-2'>
          <p>Elevate your React JS skills with Shanti Infosoft, the ultimate destination for React JS training and internship programs in Indore. Immerse yourself in real-world projects during our React JS internship in Indore, gaining practical insights and honing your skills under the guidance of industry experts. If you are ready to validate your expertise, Enroll in our React JS certification course in Indore, where you'll receive a recognized certification, showcasing your proficiency in React JS development.</p>
          <ul className='list-disc list-inside'>
            <li className='flex items-center'><IoMdCheckmarkCircleOutline/> Build Single Apps</li>
            <li className='flex items-center'><IoMdCheckmarkCircleOutline/> Interactive forms Setup and use the create react app</li>
            <li className='flex items-center'><IoMdCheckmarkCircleOutline/> React Testing Library</li>
            <li className='flex items-center'><IoMdCheckmarkCircleOutline/> Code Splitting</li>
          </ul>
          <Link to="/reactjs"><button className='bg-red-600 text-white tracking-widest font-bold text-sm rounded w-full py-1 hover:bg-red-700'>Know More</button></Link>
        </div>
      </div>

      {/* Python Section */}
      <div className='border rounded-md p-5 space-y-4 h-fit'>
        <div className='flex items-center'>
          <img className='h-6' src={python} alt='Python Logo'/>
          <h1 className='font-bold text-lg ml-2'>Python Training & Internship</h1>
        </div>
        <div className='flex flex-wrap gap-3 mt-2'>
          <button className='border rounded-md p-1 px-2'>12 Weeks</button>
          <button className='border rounded-md p-1 px-2'>6 Modules</button>
          <button className='border rounded-md p-1 px-2'>Live Projects</button>
        </div>
        <div className='space-y-2 mt-2 flex flex-col gap-2'>
          <p>Unlock the world of Python at Shanti Infosoft LLP, your go-to destination for Python training, internships, and certification courses in Indore. Our Python training program is meticulously designed to provide you with a solid foundation in Python programming. Immerse yourself in real-world projects during our Python internship in Indore, where you can apply your knowledge and acquire hands-on experience.</p>
          <ul className='list-disc list-inside'>
            <li className='flex items-center'><IoMdCheckmarkCircleOutline/> Python Fundamentals</li>
            <li className='flex items-center'><IoMdCheckmarkCircleOutline/> Working With Databases</li>
            <li className='flex items-center'><IoMdCheckmarkCircleOutline/> Web Scraping</li>
            <li className='flex items-center'><IoMdCheckmarkCircleOutline/> Web App Development With Django</li>
          </ul>
          <Link to="/python"><button className='bg-red-600 text-white tracking-widest font-bold text-sm rounded w-full py-1 hover:bg-red-700'>Know More</button></Link>
        </div>
      </div>

      {/* Digital Marketing Section */}
      <div className='border rounded-md p-5 space-y-4 lg:mt-10'>
        <div className='flex items-center'>
          <img className='h-7' src={mark} alt='Digital Marketing Logo'/>
          <h1 className='font-bold text-lg ml-2'>Digital Marketing Training & Internship</h1>
        </div>
        <div className='flex flex-wrap gap-3 mt-2'>
          <button className='border rounded-md p-1 px-2'>12 Weeks</button>
          <button className='border rounded-md p-1 px-2'>6 Modules</button>
          <button className='border rounded-md p-1 px-2'>Live Projects</button>
        </div>
        <div className='space-y-2 mt-2 flex flex-col gap-2'>
          <p>Embark on a transformative journey in Digital Marketing with Shanti Infosoft LLP, your premier destination for Digital Marketing internship and training programs in Indore. Gain expertise in Search Engine Optimization (SEO), Social Media Marketing (SMM), Pay Per Click (PPC), and App Store Optimization (ASO) through our comprehensive training curriculum.</p>
          <ul className='list-disc list-inside'>
            <li className='flex items-center'><IoMdCheckmarkCircleOutline/> Search Engine Optimization</li>
            <li className='flex items-center'><IoMdCheckmarkCircleOutline/> Social Media Marketing</li>
            <li className='flex items-center'><IoMdCheckmarkCircleOutline/> Pay Per Click</li>
            <li className='flex items-center'><IoMdCheckmarkCircleOutline/> App Store Optimization</li>
          </ul>
          <Link to="/digitalMar"><button className='bg-red-600 text-white tracking-widest font-bold text-sm rounded w-full py-1 hover:bg-red-700'>Know More</button></Link>
        </div>
      </div>
    </div>
    </>
  );
};

export default Explore;
