import React from 'react'
import img from "../../assets/offline.jpg"

const OurVision = () => {
  return (
    <>
    <div className='md:m-10 sm:m-5 m-2 sm:mx-12 md:mx-24 lg:mx-32 flex flex-col justify-start items-center border-4 pb-3 border-black rounded-xl p-3'>
      <h1 className='font-bold text-2xl sm:text-4xl'>Our Vision</h1>
      <p className='text-indent text-justify px-2 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ullam, dolorem temporibus nisi quaerat rerum nesciunt voluptatibus a vel officia accusantium eius placeat praesentium accusamus, itaque ratione veritatis, fuga incidunt!</p>
    </div>


    <div className='bg-gray-200 grid gap-3 grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
      <div className='flex items-center'>
        <h1 className='font-bold text-2xl sm:text-4xl sm:border-l-4 m-5 p-2 h-32 w-32 flex justify-center items-center col-span-1'>Our <br />Values</h1>
      </div>

      <div className='col-span-1 md:col-span-2 lg:col-span-3 grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-4'>
        <div className='flex flex-col justify-between items-center border pb-3 h-fit border-white rounded-xl m-2  bg-white '>
          <img src={img} alt="img" className='object-cover rounded-md w-full' />
          <h1 className='font-semibold mt-3 px-2'>Ahbdhubdh</h1>
          <p className='text-justify px-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus voluptatem delectus ullam optio amet assumenda veritatis odit culpa, consectetur asperiores!</p>
        </div>
        <div className='flex flex-col justify-between items-center border pb-3 h-fit border-white rounded-xl m-2  bg-white '>
          <img src={img} alt="img" className='object-cover rounded-md w-full' />
          <h1 className='font-semibold mt-3 px-2'>Ahbdhubdh</h1>
          <p className='text-justify px-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus voluptatem delectus ullam optio amet assumenda veritatis odit culpa, consectetur asperiores!</p>
        </div>
        <div className='flex flex-col justify-between items-center border pb-3 h-fit border-white rounded-xl m-2  bg-white '>
          <img src={img} alt="img" className='object-cover rounded-md w-full' />
          <h1 className='font-semibold mt-3 px-2'>Ahbdhubdh</h1>
          <p className='text-justify px-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus voluptatem delectus ullam optio amet assumenda veritatis odit culpa, consectetur asperiores!</p>
        </div>
        <div className='flex flex-col justify-between items-center border pb-3 h-fit border-white rounded-xl m-2  bg-white '>
          <img src={img} alt="img" className='object-cover rounded-md w-full' />
      <h1 className='font-semibold mt-3 px-2'>Ahbdhubdh</h1>
      <p className='text-justify px-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus voluptatem delectus ullam optio amet assumenda veritatis odit culpa, consectetur asperiores!</p>
    </div>
  </div>
    </div>

    </>
  )
}

export default OurVision
