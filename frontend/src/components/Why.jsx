import React from 'react';
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const Why = () => {
  return (
    <div className='md:flex  space-y-4 mt-20 m-1 sm:mx-22 md:mx-24 lg:mx-56 p-3 bg-slate-950 rounded-md'>
      <div className='flex justify-center items-center'>
        <h1 className='font-bold text-3xl text-white leading-relaxed'>Why are We the Most Trusted Custom Software Development Company?</h1>
      </div>
      <div className='space-y-4 text-white'>
        <p className=''>
          With almost a decade of experience in the industry, we have the expertise of handling software development projects of diverse complexity levels, making Shanti Infosoft the right fit for your business needs.
        </p>
        <ul className='space-y-5'>
          <li className='flex items-center text-white'>
            <IoMdCheckmarkCircleOutline className='text-green-500 mr-2' />
            Quality product
          </li>
          <li className='flex items-center text-white'>
            <IoMdCheckmarkCircleOutline className='text-green-500 mr-2' />
            Quick development
          </li>
          <li className='flex items-center text-white'>
            <IoMdCheckmarkCircleOutline className='text-green-500 mr-2' />
            Latest technology stack
          </li>
          <li className='flex items-center text-white'>
            <IoMdCheckmarkCircleOutline className='text-green-500 mr-2' />
            Complete transparency
          </li>
        </ul>
        <button className='text-white font-bold bg-red-600 rounded py-2 px-4 hover:bg-red-700'>
          <a href="https://shantiinfosoft.com/our_portfolio.php" target="_blank" rel="noopener noreferrer">View Portfolio</a>
        </button>
      </div>
    </div>
  );
};

export default Why;
