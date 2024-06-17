import React, { useState } from 'react';
import { LuPlus } from "react-icons/lu";

import { IoClose } from "react-icons/io5";

const Frequency = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [isMenuOpen1, setIsMenuOpen1] = useState(false);
  const toggleMenu1 = () => {
    setIsMenuOpen1(!isMenuOpen1);
  };

  const [isMenuOpen2, setIsMenuOpen2] = useState(false);
  const toggleMenu2 = () => {
    setIsMenuOpen2(!isMenuOpen2);
  };

  const [isMenuOpen22, setIsMenuOpen22] = useState(false);
  const toggleMenu22 = () => {
    setIsMenuOpen22(!isMenuOpen22);
  };

  const [isMenuOpen3, setIsMenuOpen3] = useState(false);
  const toggleMenu3 = () => {
    setIsMenuOpen3(!isMenuOpen3);
  };

  const [isMenuOpen4, setIsMenuOpen4] = useState(false);
  const toggleMenu4 = () => {
    setIsMenuOpen4(!isMenuOpen4);
  };

  return (
    <div className='pt-10   m-1 sm:mx-24 md:mx-32 lg:mx-56'>
      <div className=' space-y-3  '>
      <div className='flex flex-col justify-center items-start my-10 relative'>
        <h1 className='text-3xl  md:text-4xl lg:text-6xl font-bold text-slate-200 text-start mt-10 mb-6 relative'>
          Frequently Asked Questions
        </h1>
        <h2 className='font-bold text-2xl md:text-3xl lg:text-4xl absolute  mt-6 text-start'>
          <strong className='text-red-500 pr-1'>—</strong>
          Frequently Asked Questions
        </h2>
      </div>


        <div className='space-y-6'>
          <div className='border-b-2 border-gray-200'>
            <h2 onClick={toggleMenu} className='hover:bg-[rgba(245,241,241,0.98)] rounded-md p-2  flex justify-between items-center text-lg md:text-xl lg:text-2xl font-bold'>
              What is The Difference Between UI And UX Design?
              <button className='' >
                {isMenuOpen ? <IoClose className='text-2xl ml-auto' /> : <LuPlus className='' />}
              </button>
            </h2>
            <div className={`py-4 ${isMenuOpen ? 'block' : 'hidden'}`}>
              <p className='text-sm md:text-base lg:text-lg'>
                UX stands for User Experience. It involves analyzing and understanding the user interaction with the features of an app. The aim of UX app design is to turn users into loyal customers by providing a splendid visual journey. On the other hand, UI is the acronym for User Interface. It is all about the actual presentation of the app while determining how every element in the app will align on the page in relation to one another. This particularly includes things like - icons, colours, buttons, fonts, images, etc. The primary goal of UI design is to provide the best interaction possible.
              </p>
            </div>
          </div>

          <div className='border-b-2 border-gray-200'>
            <h2 onClick={toggleMenu1} className='hover:bg-[rgba(245,241,241,0.98)] rounded-md p-2  flex justify-between items-center text-lg md:text-xl lg:text-2xl font-bold'>
              What Are The Expected UX Deliverables?
              <button className='' >
                {isMenuOpen1 ? <IoClose className='text-2xl ml-auto' /> : <LuPlus className='' />}
              </button>
            </h2>
            <div className={`py-4 ${isMenuOpen1 ? 'block' : 'hidden'}`}>
              <p className='text-sm md:text-base lg:text-lg'>
                UX Design works on the premise of design thinking and generates a set of deliverables. Through the various stages of the design process, UX practitioners empathize with end-users, identify their unique needs, brainstorm creative ideas, create rapid prototypes, and validate the end designs. UX deliverables are the output generated at the end of the design process which helps designers communicate with stakeholders, key executives, and team members. The timeless list of UX deliverables involves user personas, empathy maps, paper sketches, wireframes, clickable prototypes, and more.
              </p>
            </div>
          </div>

          <div className='border-b-2 border-gray-200'>
            <h2 onClick={toggleMenu2} className='hover:bg-[rgba(245,241,241,0.98)] rounded-md p-2  flex justify-between items-center text-lg md:text-xl lg:text-2xl font-bold'>
              How Important Is UX And What Are The Basics Of UX Design?
              <button className='' >
                {isMenuOpen2 ? <IoClose className='text-2xl ml-auto' /> : <LuPlus className='' />}
              </button>
            </h2>
            <div className={`py-4 ${isMenuOpen2 ? 'block' : 'hidden'}`}>
              <p className='text-sm md:text-base lg:text-lg'>
                User experience plays a fundamental role in an app’s success. The majority of users prefer simple and minimal design with added ease in navigation. To deliver an astounding experience, UX strategists must focus on behavioral patterns, align business and customer goals, craft designs that guarantee usability, accessibility, and excite users to take action. We follow a step-by-step process to craft meaningful experiences and make everything look wonderful around us.
              </p>
            </div>
          </div>

          <div className='border-b-2 border-gray-200'>
            <h2 onClick={toggleMenu22} className='hover:bg-[rgba(245,241,241,0.98)] rounded-md p-2  flex justify-between items-center text-lg md:text-xl lg:text-2xl font-bold'>
              How To Create An Enticing User Experience?
              <button className='' >
                {isMenuOpen22 ? <IoClose className='text-2xl ml-auto' /> : <LuPlus className='' />}
              </button>
            </h2>
            <div className={`py-4 ${isMenuOpen22 ? 'block' : 'hidden'}`}>
              <p className='text-sm md:text-base lg:text-lg'>
                A comprehensive understanding of Design thinking coupled with UX design process is not enough to create meaningful experiences. More often than not, UX designers make common mistakes that deter the success of the app. Besides following a user-centric approach every step of the way, one should also master the art of visual storytelling. With a plethora of options, available customers look forward to interacting with applications that not only serve them with the finest of services but also gives them a story to live.
              </p>
            </div>
          </div>

          <div className='border-b-2 border-gray-200'>
            <h2 onClick={toggleMenu3} className='hover:bg-[rgba(245,241,241,0.98)] rounded-md p-2  flex justify-between items-center text-lg md:text-xl lg:text-2xl font-bold'>
              What UI/UX Design Services Does Shanti Infosoft Offer?
              <button className='' >
                {isMenuOpen3 ? <IoClose className='text-2xl ml-auto' /> : <LuPlus className='' />}
              </button>
            </h2>
            <div className={`py-4 ${isMenuOpen3 ? 'block' : 'hidden'}`}>
              <p className='text-sm md:text-base lg:text-lg'>
                As a top-notch UI/UX design company, we offer many product design services. Our range of product design services includes design consultancy, product design, wireframing, prototyping, MVP development, etc.
              </p>
            </div>
          </div>

          <div className='border-b-2 border-gray-200'>
            <h2 onClick={toggleMenu4} className='hover:bg-[rgba(245,241,241,0.98)] rounded-md p-2  flex justify-between items-center text-lg md:text-xl lg:text-2xl font-bold'>
              What Are The Three Stages Of The Product Ideation Process That Shanti Infosoft Follows?
              <button className='' >
                {isMenuOpen4 ? <IoClose className='text-2xl ml-auto' /> : <LuPlus className='' />}
              </button>
            </h2>
            <div className={`py-4 ${isMenuOpen4 ? 'block' : 'hidden'}`}>
              <p className='text-sm md:text-base lg:text-lg'>
                The three stages of product ideation begin with generating ideas. This is done through brainstorming sessions noting down as many ideas as possible. Following this, we filter out the relevant ones that will ultimately be developed in your app and product idea. As the last stage of the ideation process, we document the finalized features and ideas that will be designed and developed later.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frequency;
