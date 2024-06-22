import React, { useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaNodeJs, FaReact } from "react-icons/fa";
import mark from "../assets/marketing-logo.svg";
import python from "../assets/python-logo.svg";
import AOS from 'aos';
import 'aos/dist/aos.css';
import NodejsBox from './NodejsBox';
import ReactjsBox from './ReactjsBox';
import PythonBox from './PythonBox';
import DigitalMarBox from './DigitalMarBox';
import Tools from './Tools';

const Course = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <h1 data-aos="fade-down" data-aos-duration="1000" className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mt-14 mx-4 sm:mx-8 md:mx-12 lg:mx-20 xl:mx-32'>
        Explore Diverse Tech Avenues
      </h1>
      <div  className='md:hidden space-y-4 mt-10 mx-4 sm:mx-8 md:mx-12 lg:mx-20 xl:mx-32'>
        {/* Node.js Section */}
        <NodejsBox/>
        {/* React.js Section */}
        <ReactjsBox/>
        {/* Python Section */}
        <PythonBox/>
        {/* Digital Marketing Section */}
        <DigitalMarBox/>
      </div>

      <div className='grid md:grid-cols-2 gap-4 lg:gap-7   mt-10 mx-4 sm:mx-8 md:mx-12 lg:mx-20 xl:mx-32'>
        <div className='flex flex-col gap-4 lg:gap-7'>
        {/* Node.js Section */}
        <NodejsBox/>
        {/* React.js Section */}
        <ReactjsBox/>
        </div>


        <div className='flex flex-col gap-4 lg:gap-7'>
        {/* Python Section */}
        <PythonBox/>
        {/* Digital Marketing Section */}
        <DigitalMarBox/>
        </div>

      </div>

      <Tools/>
    </>
  );
};

export default Course;
