import React, { useState } from 'react';
import { FaPlus } from "react-icons/fa";
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
    <div className='mb-4 w-full  flex  justify-center items-center'>
      <div className='w-[70%] space-y-3'>
      <p className=''>
        <p className='flex justify-start items-center text-4xl relative top-14 mx-4 font-bold'><h1 className='w-4 h-1 border-t border-4 border-red-500 '></h1> Frequently Asked Questions</p>
        <h1 className='text-6xl font-bold text-slate-200'>Frequently Asked Questions</h1>
      </p>
      <h1 className='flex justify-between font-bold'>
        What is The Difference Between UI And UX Design?
        <button className='' onClick={toggleMenu}>
            {isMenuOpen ? <IoClose className='text-2xl ml-auto' /> : <FaPlus className='' />}
          </button>
      </h1>
          <div className={`    flex justify-center items-center ${isMenuOpen ? 'flex justify-center items-center' : 'hidden'}`}>
          <p>
          UX stands for User Experience. It involves analyzing and understanding the user interaction with the features of an app. The aim of UX app design is to turn users into loyal customers by providing a splendid visual journey.On the other hand, UI is the acronym for User Interface. It is all about the actual presentation of the app while determining how every element in the app will align on the page in relation to one another. This particularly includes things like- icons, colours, buttons, fonts, images, etc. The primary goal of UI design is to provide the best interaction possible.
          </p>
          </div>
      <h1 className='flex justify-between font-bold'>
        What Are The Expected UX Deliverables?
        <button className='' onClick={toggleMenu1}>
            {isMenuOpen1 ? <IoClose className='text-2xl ml-auto' /> : <FaPlus className='' />}
          </button>
      </h1>
      <div className={`    flex justify-center items-center ${isMenuOpen1 ? 'flex justify-center items-center' : 'hidden'}`}>
          <p>
          UX Design works on the premise of design thinking and generates a set of deliverables. Through the various stages of design process, UX practitioners empathise with end-users, identify their unique needs, brainstorm creative ideas, create rapid prototypes and validate the end designs. UX deliverables are the output generated at the end of the design process which helps designers communicate with stakeholders, key executives and team members. The timeless list of UX deliverables involves user persona, empathy maps, paper sketches, wireframes, clickable prototypes and more.
          </p>
          </div>
      <h1 className='flex justify-between font-bold'>
      How Important Is UX And What Are The Basics Of UX Design?
        <button className='' onClick={toggleMenu2}>
            {isMenuOpen2 ? <IoClose className='text-2xl ml-auto' /> : <FaPlus className='' />}
          </button>
      </h1>
      <div className={`    flex justify-center items-center ${isMenuOpen2 ? 'flex justify-center items-center' : 'hidden'}`}>
          <p>
          User experience plays a fundamental role in an app’s success. Majority of users prefer simple and minimal design with an added ease in navigation. To deliver an astounding experience, UX strategists must focus on behavioural patterns, align business and customer goals, craft designs that guarantee usability, accessibility and excite users to take action. We follow a step by step process to craft meaningful experiences and make everything look wonderful around us
          </p>
          </div>
      <h1 className='flex justify-between font-bold'>
      How To Create An Enticing User Experience?
        <button className='' onClick={toggleMenu22}>
            {isMenuOpen22 ? <IoClose className='text-2xl ml-auto' /> : <FaPlus className='' />}
          </button>
      </h1>
      <div className={`    flex justify-center items-center ${isMenuOpen22 ? 'flex justify-center items-center' : 'hidden'}`}>
          <p>
          A comprehensive understanding of Design thinking coupled with UX design process is not enough to create meaningful experiences. More often than not, UX designers make common mistakes that deter the success of the app. Besides following a user-centric approach every step of the way, one should also master the art of visual storytelling. With a plethora of options, available customers look forward to interacting with applications that not only serve them with the finest of services but also gives them a story to live.
          </p>
          </div>
      <h1 className='flex justify-between font-bold'>
        Whast UI/UX DEsign Services Does Shanti Infosoft Offer?
        <button className='' onClick={toggleMenu3}>
            {isMenuOpen3 ? <IoClose className='text-2xl ml-auto' /> : <FaPlus className='' />}
          </button>
      </h1>
      <div className={`    flex justify-center items-center ${isMenuOpen3 ? 'flex justify-center items-center' : 'hidden'}`}>
          <p>
          As a top-notch UI/UX design company, we offer many product design services. Our range of product design services includes design consultancy, product design, wireframing, prototyping, MVP development, etc.
          </p>
          </div>
      <h1 className='flex justify-between font-bold'>
        What Are The Three Stages Of The Product Ideation Process That Shanti Infosoft Follows?
        <button className='' onClick={toggleMenu4}>
            {isMenuOpen4 ? <IoClose className='text-2xl ml-auto' /> : <FaPlus className='' />}
          </button>
      </h1>
      <div className={`    flex justify-center items-center ${isMenuOpen4 ? 'flex justify-center items-center' : 'hidden'}`}>
          <p>
          The three stages of product ideation begin with generating ideas. This is done through brainstorming sessions noting down as many ideas as possible. Following this, we filter out the relevant ones that will ultimately be developed in your app and product idea. As the last stage of the ideation process, we document the finalized features and ideas that will be designed and developed later.
          </p>
          </div>
      </div>
    </div>
  )
}

export default Frequency
