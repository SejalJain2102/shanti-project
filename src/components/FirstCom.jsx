import React from 'react'
const FirstCom = () => {
  return (
    <div className= 'h-58 m-1 sm:mx-24 md:mx-24 lg:mx-52 p-3 md:flex justify-evenly items-center'>
      <div className='w-full flex justify-center items-center'>
        <div>
        <h1 className='font-bold text-4xl  '>Level Up Your Tech Game <br></br>With Our <span class=" decoration-8 underline decoration-rose-600">Internships & </span><br></br><span class=" decoration-8 underline decoration-rose-600">Training</span> Programs.</h1>
        <br></br>
        <h5 className='text-lg'>Gain valuable experience working on real-world projects <br></br>with leading IT companies in Indore.</h5>
        <br></br>
        <div className="flex justify-start items-center gap-4">
        <button className=' p-2 px-4 text-white font-bold  bg-red-600 rounded ' >Explore</button>
        <img className='h-8 ' src="https://shantiinfosoft.com/images/training/testimonial.png"></img>
        </div>
        </div>
    </div>

    <div className='border-4 w-full'>

    </div>
    </div>
  )
}
export default FirstCom