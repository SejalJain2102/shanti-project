import React, { useEffect, useState } from 'react';
import { LuPlus } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Frequency = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  
  const [openIndex, setOpenIndex] = useState(null);

  const toggleMenu = (index) => {
    if (openIndex === index) {
      setOpenIndex(null); 
    } else {
      setOpenIndex(index); 
    }
  };

  return (
    <div data-aos="zoom-in-down" className='pt-10 mb-10 m-5 sm:mx-24 md:mx-32 lg:mx-56'>
      <div className='space-y-3'>
        <div className='flex flex-col justify-center items-start my-10 relative'>
          <h1 className='text-3xl md:text-4xl lg:text-6xl font-bold text-slate-200 text-start mt-10 mb-6 relative'>
            Frequently Asked Questions
          </h1>
          <h2 className='font-bold text-2xl md:text-3xl lg:text-4xl absolute mt-6 text-start'>
            <strong className='text-red-500 pr-1'>—</strong>
            Frequently Asked Questions
          </h2>
        </div>

        <div className='space-y-6'>
          <div className='border-b-2 border-gray-200'>
            <h2 
              onClick={() => toggleMenu(0)} 
              className={`hover:bg-[rgba(245,241,241,0.98)] rounded-md p-2 flex justify-between items-center text-lg md:text-xl lg:text-2xl font-bold ${openIndex === 0 ? 'text-red-500' : 'text-black'}`}
            >
              What is The Difference Between UI And UX Design?
              <button>
                {openIndex === 0 ? <IoClose className='text-2xl ml-auto' /> : <LuPlus />}
              </button>
            </h2>
            <div className={`py-4 ${openIndex === 0 ? 'block ' : 'hidden'}`}>
              <p className='text-sm md:text-base lg:text-lg'>
                UX stands for User Experience. It involves analyzing and understanding the user interaction with the features of an app. The aim of UX app design is to turn users into loyal customers by providing a splendid visual journey. On the other hand, UI is the acronym for User Interface. It is all about the actual presentation of the app while determining how every element in the app will align on the page in relation to one another. This particularly includes things like - icons, colours, buttons, fonts, images, etc. The primary goal of UI design is to provide the best interaction possible.
              </p>
            </div>
          </div>

          <div className='border-b-2 border-gray-200'>
            <h2 
              onClick={() => toggleMenu(1)} 
              className={`hover:bg-[rgba(245,241,241,0.98)] rounded-md p-2 flex justify-between items-center text-lg md:text-xl lg:text-2xl font-bold ${openIndex === 1 ? 'text-red-500' : 'text-black'}`}
            >
              What Are The Expected UX Deliverables?
              <button>
                {openIndex === 1 ? <IoClose className='text-2xl ml-auto' /> : <LuPlus />}
              </button>
            </h2>
            <div className={`py-4 ${openIndex === 1 ? 'block' : 'hidden'}`}>
              <p className='text-sm md:text-base lg:text-lg'>
                UX Design works on the premise of design thinking and generates a set of deliverables. Through the various stages of the design process, UX practitioners empathize with end-users, identify their unique needs, brainstorm creative ideas, create rapid prototypes, and validate the end designs. UX deliverables are the output generated at the end of the design process which helps designers communicate with stakeholders, key executives, and team members. The timeless list of UX deliverables involves user personas, empathy maps, paper sketches, wireframes, clickable prototypes, and more.
              </p>
            </div>
          </div>

          <div className='border-b-2 border-gray-200'>
            <h2 
              onClick={() => toggleMenu(2)} 
              className={`hover:bg-[rgba(245,241,241,0.98)] rounded-md p-2 flex justify-between items-center text-lg md:text-xl lg:text-2xl font-bold ${openIndex === 2 ? 'text-red-500' : 'text-black'}`}
            >
              How Important Is UX And What Are The Basics Of UX Design?
              <button>
                {openIndex === 2 ? <IoClose className='text-2xl ml-auto' /> : <LuPlus />}
              </button>
            </h2>
            <div className={`py-4 ${openIndex === 2 ? 'block' : 'hidden'}`}>
              <p className='text-sm md:text-base lg:text-lg'>
                User experience plays a fundamental role in an app’s success. The majority of users prefer simple and minimal design with added ease in navigation. To deliver an astounding experience, UX strategists must focus on behavioral patterns, align business and customer goals, craft designs that guarantee usability, accessibility, and excite users to take action. We follow a step-by-step process to craft meaningful experiences and make everything look wonderful around us.
              </p>
            </div>
          </div>

          <div className='border-b-2 border-gray-200'>
            <h2 
              onClick={() => toggleMenu(3)} 
              className={`hover:bg-[rgba(245,241,241,0.98)] rounded-md p-2 flex justify-between items-center text-lg md:text-xl lg:text-2xl font-bold ${openIndex === 3 ? 'text-red-500' : 'text-black'}`}
            >
              How To Create An Enticing User Experience?
              <button>
                {openIndex === 3 ? <IoClose className='text-2xl ml-auto' /> : <LuPlus />}
              </button>
            </h2>
            <div className={`py-4 ${openIndex === 3 ? 'block' : 'hidden'}`}>
              <p className='text-sm md:text-base lg:text-lg'>
                A comprehensive understanding of Design thinking coupled with UX design process is not enough to create meaningful experiences. More often than not, UX designers make common mistakes that deter the success of the app. Besides following a user-centric approach every step of the way, one should also master the art of visual storytelling. With a plethora of options, available customers look forward to interacting with applications that not only serve them with the finest of services but also gives them a story to live.
              </p>
            </div>
          </div>

          <div className='border-b-2 border-gray-200'>
            <h2 
              onClick={() => toggleMenu(4)} 
              className={`hover:bg-[rgba(245,241,241,0.98)] rounded-md p-2 flex justify-between items-center text-lg md:text-xl lg:text-2xl font-bold ${openIndex === 4 ? 'text-red-500' : 'text-black'}`}
            >
              What UI/UX Design Services Does Shanti Infosoft Offer?
              <button>
                {openIndex === 4 ? <IoClose className='text-2xl ml-auto' /> : <LuPlus />}
              </button>
            </h2>
            <div className={`py-4 ${openIndex === 4 ? 'block' : 'hidden'}`}>
              <p className='text-sm md:text-base lg:text-lg'>
                As a top-notch UI/UX design company, we offer many product design services. Our range of product design services includes design consultancy, product design, wireframing, prototyping, MVP development, etc.
              </p>
            </div>
          </div>

          <div className='border-b-2 border-gray-200'>
            <h2 
              onClick={() => toggleMenu(5)} 
              className={`hover:bg-[rgba(245,241,241,0.98)] rounded-md p-2 flex justify-between items-center text-lg md:text-xl lg:text-2xl font-bold ${openIndex === 5 ? 'text-red-500' : 'text-black'}`}
            >
              What Are The Three Stages Of The Product Ideation Process That Shanti Infosoft Follows?
              <button>
                {openIndex === 5 ? <IoClose className='text-2xl ml-auto' /> : <LuPlus />}
              </button>
            </h2>
            <div className={`py-4 ${openIndex === 5 ? 'block' : 'hidden'}`}>
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
