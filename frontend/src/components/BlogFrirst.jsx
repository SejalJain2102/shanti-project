import React, { useEffect } from 'react'
import digital from "../assets/digital-logo.png";
import offline from "../assets/offline.jpg";
import react from "../assets/react1.jpg";
import node from "../assets/node-logo.avif";
import python from "../assets/Python-logo.png";
import { Link, useLocation } from 'react-router-dom';

const BlogFrirst = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div className='mx-2 mb-4 m-4 sm:mx-24 md:mx-32 lg:mx-44 mt-6  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center gap-5 font-semibold'>
      <div className='border-2 h-full border-slate-400 rounded-xl flex flex-col justify-between items-center  pb-2 gap-6'>
        <img className='rounded-xl w-full h-40 xl:h-52 object-cover' src={offline} alt="Classes" />
        <h1 className='text-center px-2 '>Offline classes & it's Advantages</h1>
        <Link to="/blogs/offline-classes"><button className='bg-red-400 text-white p-1 w-fit px-3 rounded-full '>Read More</button></Link>
      </div>
      <div className='border-2 h-full border-slate-400 rounded-xl flex flex-col justify-between items-center pb-2 gap-6 '>
        <img className='rounded-xl w-full h-40 xl:h-52 object-cover' src={react} alt="React" />
        <h1 className='text-center px-2 '>React Js </h1>
        <Link to="/blogs/react-js"><button className='bg-red-400 text-white p-1 w-fit px-3 rounded-full '>Read More</button></Link>
      </div>
      <div className='border-2 h-full border-slate-400 rounded-xl flex flex-col justify-between items-center pb-2 gap-6 '>
        <img className='rounded-xl w-full h-40 xl:h-52 object-cover' src={node} alt="Node" />
        <h1 className='text-center px-2 '>Node Js</h1>
        <Link to="/blogs/node-js"><button className='bg-red-400 text-white p-1 w-fit px-3 rounded-full '>Read More</button></Link>
      </div>
      <div className='border-2 h-full border-slate-400 rounded-xl flex flex-col justify-between items-center pb-2 gap-6 '>
        <img className='rounded-xl w-full h-40 xl:h-52 object-cover' src={python} alt="Python" />
        <h1 className='text-center px-2 '>Python</h1>
        <Link to="/blogs/python"><button className='bg-red-400 text-white p-1 w-fit px-3 rounded-full '>Read More</button></Link>
      </div>
      <div className='border-2 h-full border-slate-400 rounded-xl flex flex-col justify-between items-center pb-2 gap-6 '>
        <img className='rounded-xl w-full h-40 xl:h-52 object-cover' src={digital} alt="Digital Marketing" />
        <h1 className='text-center px-2 '>Digital Marketing</h1>
        <Link to="/blogs/digital-marketing"><button className='bg-red-400 text-white p-1 w-fit px-3 rounded-full '>Read More</button></Link>
      </div>



    </div>
  )
}

export default BlogFrirst
