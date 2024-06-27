import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import digital from "../assets/digital-logo.png";
import react from "../assets/react1.jpg";
import node from "../assets/node-logo.avif";
import python from "../assets/Python-logo.png";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { Link } from 'react-router-dom';

const Overview = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  // Settings for the carousel
  const settings = {
    arrows:false,
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div data-aos="zoom-in" className="grid grid-flow-row 2xl:grid-flow-col grid-cols-1 lg:grid-cols-4 items-center m-4">
      <div className="col-span-1 bg-orange-200 h-full w-full flex flex-col justify-center items-center py-10 p-4 rounded-e-xl">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4">
          Courses
        </h1>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4">
          Overview
        </h1>
       
      </div>

      {/* Carousel */}
      <Slider {...settings} className=" col-span-1 lg:col-span-3 h-96 flex justify-center items-center">
        {/* React.js Developer */}
        <div className="relative">
           <Link to="/course/reactjs"><div className="flex flex-col justify-start items-center gap-3 m-2 p-2 shadow-2xl bg-white rounded-xl ">
            <img className="w-full h-56 md:h-44 object-cover" src={react} alt="profile" />
            <h1 className="font-bold text-center text-lg sm:text-xl">React.js Developer</h1>
          <div className='flex justify-between gap-3 mt-2 text-lg'>
            <h2 className='border rounded-md p-1 px-2'>12 Weeks</h2>
            <h2 className='border rounded-md p-1 px-2'>6 Modules</h2>
            <h2 className='border rounded-md p-1 px-2'>Live Projects</h2>
          </div>
          </div></Link>
        </div>
        {/* Node.js Developer */}
        <div className="relative">
           <Link to="/course/node"><div className="flex flex-col justify-start items-center gap-3 m-2 p-2 shadow-2xl bg-white rounded-xl ">
            <img className="w-full h-56 md:h-44 object-cover" src={node} alt="profile" />
            <h1 className="font-bold text-center text-lg sm:text-xl">Node.js Developer</h1>
          <div className='flex justify-between gap-3 mt-2 text-lg'>
            <h2 className='border rounded-md p-1 px-2'>12 Weeks</h2>
            <h2 className='border rounded-md p-1 px-2'>6 Modules</h2>
            <h2 className='border rounded-md p-1 px-2'>Live Projects</h2>
          </div>
          </div></Link>
        </div>
        {/* Python Developer */}
        <div className="relative">
           <Link to="/course/python"><div className="flex flex-col justify-start items-center gap-3 m-2 p-2 shadow-2xl bg-white rounded-xl ">
            <img className="w-full h-56 md:h-44 object-cover" src={python} alt="profile" />
            <h1 className="font-bold text-center text-lg sm:text-xl">Python Developer</h1>
          <div className='flex justify-between gap-3 mt-2 text-lg'>
            <h2 className='border rounded-md p-1 px-2'>12 Weeks</h2>
            <h2 className='border rounded-md p-1 px-2'>6 Modules</h2>
            <h2 className='border rounded-md p-1 px-2'>Live Projects</h2>
          </div>
          </div></Link>
        </div>
        {/* Digital Marketing */}
        <div className="relative ">
          <Link to="/course/digitalMar"><div className="flex flex-col justify-start items-center gap-3 m-2 p-2 shadow-2xl bg-white rounded-xl ">
            <img className=" w-full h-56 md:h-44 object-cover" src={digital} alt="profile" />
            <h1 className="font-bold text-center text-lg sm:text-xl">Digital Marketing</h1>
          <div className='flex justify-between gap-3 mt-2 text-lg'>
            <h2 className='border rounded-md p-1 px-2'>12 Weeks</h2>
            <h2 className='border rounded-md p-1 px-2'>6 Modules</h2>
            <h2 className='border rounded-md p-1 px-2'>Live Projects</h2>
          </div>
          </div></Link>
        </div>
      </Slider>
    </div>
  );
};

export default Overview;
