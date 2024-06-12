import React from 'react'
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
const Why = () => {
  return (
    <div className='md:flex md:flex-cols space-y-4 mt-14 mx-20 sm:mx-22 md:mx-24 lg:mx-56 p-3 gap-10 bg-slate-950 rounded-md justify-center items-center m-3'>
        <div>
           <h1 className='font-bold text-3xl text-white leading-relaxed'> Why are We the Most
               Trusted Custom Software Development Company?</h1>
        </div>
        <div className='space-y-4 text-white '>
            <p className='leading-10'>With almost a decade of experience in the industry, we have the expertise of handling software development projects of diverse complexity levels, making Shanti Infosoft the right fit for your business needs.
             </p>
             <ul className='space-y-5'>
                <li className='flex gap-2 justify-start items-center  text-white '><IoMdCheckmarkCircleOutline/>Quality product</li>
                <li className='flex gap-2 justify-start items-center  text-white'><IoMdCheckmarkCircleOutline/>Quick development</li>
                <li className='flex gap-2 justify-start items-center  text-white'><IoMdCheckmarkCircleOutline/>Latest technology stack</li>
                <li className='flex gap-2 justify-start items-center  text-white'><IoMdCheckmarkCircleOutline/>Complete transparency</li>
             </ul>
             <button className=' text-white font-bold  bg-red-600 rounded py-1 px-2'><a href="https://shantiinfosoft.com/our_portfolio.php">View Portfolio</a></button>
        </div>
    </div>
  )
}
export default Why