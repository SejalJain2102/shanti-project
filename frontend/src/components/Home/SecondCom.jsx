import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import wallOne from "../../assets/100+1.png"
import wallTwo from "../../assets/100+2.png"

const SecondCom = () => {
  useEffect(() => {
    AOS.init();
}, []);
  return (
    <div className='my-32  px-4 sm:px-6 lg:px-8 xl:flex  m-1 sm:mx-24 md:mx-32 lg:mx-56 p-3 gap-10'>
      {/* Left Section */}
      <div className='xl:w-1/2 w-full flex flex-col justify-center'>
        <div className=' md:mb-0'>
          <img className='w-full' src={wallOne} alt="Training Image" />
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-3 mt-3 gap-3'>
          <div className='bg-slate-700 col-span-1 flex flex-col justify-center rounded-md text-white text-center p-2'>
            <p className='text-2xl'>100+</p>
            <p>Weekly Active Students</p>
          </div>
          <div className='col-span-2'>
            <img className='w-full h-32 object-cover rounded' src={wallTwo} alt="Training Image 2" />
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div   className='xl:w-1/2 flex flex-col justify-center '>
        <h1 style={{ fontFamily: 'TrumpGothicEast' }} className='font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6'>Who is this for?</h1>
        <p className='text-base lg:text-lg mb-6'>If you are a beginner and want to grow your career with React JS, Node JS, Python, and Digital Marketing, we're here to help you polish your skills. Our approach is hands-on – we believe in learning by doing, tackling real-world situations, and discussing the hows, whys, and whats of solving problems.</p>
        <p className='text-base lg:text-lg mb-6'>At our training and internship institute in Indore, we emphasize live project implementation, problem-solving skills, teaching ethical coding practices, soft skill training, and more. If you are stuck, don't worry – we have in-house trainers ready to assist you! Plus, the projects we work on are not only educational but also a lot of fun! Join us on this journey, where we focus on boosting your confidence.</p>
        <Link to="/aboutUs"><button className='p-2 px-4 text-white tracking-widest font-bold text-sm bg-red-600 rounded hover:bg-red-700 self-start'>Explore</button></Link>
      </div>
    </div>
  );
};

export default SecondCom;
