import React from 'react'
import { MdOutlineDownloadForOffline } from "react-icons/md";

import "./Demo.css"
const Demo = () => {
  return (
    <>
    {/* <div className='main-div'>
       <div className='child-div'>
         <input className='input'  type="email" placeholder='EMAIL' />
         <input className='input'  type="password" placeholder='Password' />
         <input className='input'  type="text" placeholder='Full Name' />
         <input className='input'  type="text" placeholder='Mobile' />
         <select className='input' name="" id="">
           <option className='input-option' value="">Designation</option>
           <option className='input-option' value="">L1</option>
           <option className='input-option' value="">L2</option>
           <option className='input-option' value="">L3</option>
         </select>
         <input className='input'  type="text" placeholder='Role' />
         <button className='input' >NEXT</button>
       </div>
    </div> */}


      <div className='flex flex-col sm:flex-row justify-between gap-2 lg:mx-56 md:mx-32 sm:mx-12 mx-2 mt-24'>

      <div className='border-2 text-sm p-1 flex gap-2 rounded justify-between items-center'>
        <p className='text-sm'> 
            <p>
            <strong className='text-red-300'>hello uncle</strong> Ajeet Saroj Ajeet saroj
            </p>
            <h1>june,01,12</h1>
        </p>

        <button className='bg-red-500 rounded-full flex justify-center items-center gap-1 px-1 p-1 h-fit font-seibold'>
          <h1 className='hidden md:block'>Download</h1>
          <MdOutlineDownloadForOffline className=''/>
        </button>
      </div>
      
    

      </div>
    

    </>
  )
}

export default Demo
