import React, { useEffect } from 'react';
import './Shadow.css'
import { TiTick } from "react-icons/ti";
import { MdComputer } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { ImPower } from "react-icons/im";
import { HiMiniUserGroup } from "react-icons/hi2";
import { RiMedal2Fill } from "react-icons/ri";
import { IoMdPerson } from "react-icons/io";
import { FaRegAddressCard } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";
import { GiPublicSpeaker } from "react-icons/gi";
import { RiContactsFill } from "react-icons/ri";
import { IoVideocam } from "react-icons/io5";
import { SiAuthelia } from "react-icons/si";

import { useLocation } from 'react-router-dom';
import { HiUserGroup } from "react-icons/hi2";
import Tools from './Tools';


const python = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  

  return (
    <>
      <div className='flex justify-evenly items-center gap-3 p-3  m-1  bg-cover bg-no-repeat text-white' style={{ backgroundImage: "url(../src/assets/contactBgBan.jpg)", backgroundPosition:"center" }}>
        <div className='flex flex-col justify-center items-center gap-2 mt-6 mb-6 p-4'>
          <p className='sm:text-4xl text-2xl font-bold mb-6 text-center'>Become a Python Developer</p>
          <p className='font-bold text-md flex justify-center items-center gap-2'><TiTick className='text-green-500 border border-black rounded-full' /> No prior coding experience required</p>
          <p className='font-bold text-md flex justify-center items-center gap-2'><TiTick className='text-green-500 border border-black rounded-full' /> 30 weeks full-time program with offline classes</p>
          <p className='font-bold text-md flex justify-center items-center gap-2'><TiTick className='text-green-500 border border-black rounded-full' /> Top recruiters from PayTM, Walmart, Amazon</p>
        </div>
        <img  className='hidden md:block' src="../src/assets/contactBan.png" alt="" />
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-3 mt-14 m-1 sm:mx-24 md:mx-32 lg:mx-56 gap-4'>
        <div  className='flex flex-col gap-3 items-center m-1 p-4 rounded-lg shadow-1 '>
          <MdComputer className='text-3xl' />
          <h1 className='text-center'>Batch Starting</h1>
          <p className='text-center'>17 June, 2024</p>
        </div>
        <div className='flex flex-col gap-3 items-center m-1 p-4 rounded-lg shadow-1 '>
          <SlCalender className='text-3xl' />
          <h1 className='text-center'>Duration</h1>
          <p className='text-center'>30 weeks</p>
        </div>
        <div className='flex flex-col gap-3 items-center m-1 p-4 rounded-lg shadow-1 '>
          <ImPower className='text-3xl' />
          <h1 className='text-center'>Timings</h1>
          <p className='text-center'>*11 am to 11 pm<br />Monday to Saturday</p>
        </div>
        <div className='flex flex-col gap-3 items-center m-1 p-4 rounded-lg shadow-1 '>
          <SiAuthelia className='text-3xl' />
          <h1 className='text-center'>Eligibility</h1>
          <p className='text-center'>12th Pass, Diploma & College Graduates,<br />18 - 28 years</p>
        </div>
      </div>

      <div className='flex flex-col items-center gap-2 p-4 mt-14 m-1 sm:mx-24 md:mx-32 lg:mx-56'>
        <h1 className='sm:text-4xl text-2xl font-bold text-center'>Minimum criteria</h1>
        <h1 className='sm:text-4xl text-2xl font-bold text-center'>for Python Developer Program</h1>
        <p className='sm:text-2xl text-xl text-center'>You should meet the following requirements to be eligible for this course.</p>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3  rounded-lg'>
          <div className='flex flex-col justify-center items-center m-1 p-4 shadow-1'>
            <RiMedal2Fill className='text-3xl' />
            <h1 className='text-center'>Qualification</h1>
            <p className='text-center'>12th Pass, Diploma & College Graduates</p>
          </div>
          <div className='flex flex-col justify-center items-center m-1 p-4 shadow-1'>
            <IoMdPerson className='text-3xl' />
            <h1 className='text-center'>Age</h1>
            <p className='text-center'>18 - 28 years</p>
          </div>
          <div className='flex flex-col justify-center items-center m-1 p-4 shadow-1'>
            <FaRegAddressCard className='text-3xl' />
            <h1 className='text-center'>ID</h1>
            <p className='text-center'>Valid Aadhaar Card</p>
          </div>
          <div className='flex flex-col justify-center items-center m-1 p-4 shadow-1'>
            <TbWorld className='text-3xl' />
            <h1 className='text-center'>Internet</h1>
            <p className='text-center'>A desktop or laptop with an uninterrupted service connection.</p>
          </div>
          <div className='flex flex-col justify-center items-center m-1 p-4 shadow-1'>
            <GiPublicSpeaker className='text-3xl' />
            <h1 className='text-center'>Communication Skills</h1>
            <p className='text-center'>Basic English - speaking, reading and writing</p>
          </div>
          <div className='flex flex-col justify-center items-center m-1 p-4 shadow-1'>
            <h1 className='text-3xl font-bold'>+1</h1>
            <h1 className='text-center'>CIBIL Score</h1>
            <p className='text-center'>650+</p>
          </div>
        </div>
      </div>

      <div className='flex flex-col items-center gap-2 p-3 mt-14 m-1 sm:mx-24 md:mx-32 lg:mx-56'>
        <h1 className='sm:text-4xl text-2xl font-bold text-center'>Admission Process for Python Developer Program</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
          <div className='flex flex-col justify-start items-center m-3 p-4 shadow-1'>
            <RiContactsFill className='text-3xl' />
            <h1 className='text-center'>Crack the Admissions Test (MSAT)</h1>
          </div>
          <div className='flex flex-col justify-start items-center m-3 p-4 shadow-1'>
            <MdComputer className='text-3xl' />
            <h1 className='text-center'>Choose a course</h1>
          </div>
          <div className='flex flex-col justify-start items-center m-3 p-4 shadow-1'>
            <TiTick className='text-3xl' />
            <h1 className='text-center'>Complete KYC</h1>
          </div>
          <div className='flex flex-col justify-start items-center m-3 p-4 shadow-1'>
            <HiUserGroup className='text-3xl' />
            <h1 className='text-center'>You are ready to join the batch</h1>
          </div>
        </div>
      </div>
      <Tools/>
    </>
  );
};

export default python;
