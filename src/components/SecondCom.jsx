import React from 'react'
const SecondCom = () => {
  return (
    <div className='sm:flex m-14 sm:mx-22 md:mx-24 lg:mx-56 p-3 gap-10 '>
    <div className='sm:w-[50%] w-full'>
        <div className=''>
        <img  className=''src="https://shantiinfosoft.com/images/training/training-img.png"></img>
        </div>
        <div className='lg:grid grid-cols-3 gap-3'>
        <div className='bg-slate-700 my-4 font-bold text-white  col-span-1 rounded-md'>
            <p className='text-center p-2 '><span class='text-xl'>100+</span><br></br>
            Weekly Active <br></br>Student</p>
        </div>
        <div className='sm:my-4  w-full col-span-2'>
            <img className='w-full' src="https://shantiinfosoft.com/images/training/training-img-2.png"></img>
        </div>
        </div>
    </div>
   <div className='sm:w-[50%]   '>
    <h1 className='font-bold text-4xl '>Who is this for?</h1>
    <br></br>
    <p className='text-sm'>If you are a beginner and want to grow your career with React JS, Node JS, Python, and Digital Marketing, we're here to help you polish your skills. Our approach is hands-on – we believe in learning by doing, tackling real-world situations, and discussing the hows, whys, and whats of solving problems.<br></br>
<br></br>
At our training and internship institute in Indore, we emphasize live project implementation, problem-solving skills, teaching ethical coding practices, soft skill training, and more. If you are stuck, don't worry – we have in-house trainers ready to assist you! Plus, the projects we work on are not only educational but also a lot of fun! Join us on this journey, where we focus on boosting your confidence.
</p>
<br></br>
<button className=' p-2 px-4 text-white font-bold  bg-red-600  rounded' >Explore</button>
   </div>
   </div>
  )
}
export default SecondCom