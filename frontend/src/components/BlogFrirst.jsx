import React, { useEffect } from 'react'
import digital from "../assets/digital-logo.png";
import offline from "../assets/offline.jpg";
import react from "../assets/react1.jpg";
import node from "../assets/node-logo.avif";
import python from "../assets/Python-logo.png";
import { Link, useLocation } from 'react-router-dom';
import "./Shadow.css"
const BlogFrirst = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div className='mx-2 mb-10 m-4 sm:mx-24 md:mx-32 lg:mx-44 mt-6  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center gap-5 '>

      <div className='shadow-1 h-full flex flex-col justify-between  pb-2 gap-3'>
        <img className='w-full h-44 xl:h-60 object-cover' src={offline} alt="Classes" />
        <h1 className='text-start font-semibold text-xl px-6 '>Discription Lorem ipsum dolor sit amet.</h1>
        <p className='px-6 font-normal text-justify indent-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus aperiam molestiae magni, ex quis consequuntur mollitia.......<Link to="/blogs/offline-classes"><span className='text-red-400 text-sm'>Read More</span></Link></p>
        <p className='px-6 pb-3 flex justify-between items-center'>
          <h3>27-06-2024</h3>
          <h4>Abhinay Kushwaha</h4>
        </p>
      </div>

      <div className='shadow-1 h-full flex flex-col justify-between  pb-2 gap-3 '>
        <img className='w-full h-44 xl:h-60 object-cover' src={react} alt="React" />
        <h1 className='text-start font-semibold text-xl px-6 '>Discription Lorem ipsum dolor sit amet.</h1>
        <p className='px-6 font-normal text-justify indent-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus aperiam molestiae magni, ex quis consequuntur mollitia.......<Link to="/blogs/react-js"><span className='text-red-400 text-sm'>Read More</span></Link></p>
        <p className='px-6 pb-3 flex justify-between items-center'>
          <h3>27-06-2024</h3>
          <h4>Abhinay Kushwaha</h4>
        </p>
      </div>

      <div className='shadow-1 h-full flex flex-col justify-between  pb-2 gap-3 '>
        <img className='w-full h-44 xl:h-60 object-cover' src={node} alt="Node" />
        <h1 className='text-start font-semibold text-xl px-6 '>Discription Lorem ipsum dolor sit amet.</h1>
        <p className='px-6 font-normal text-justify indent-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus aperiam molestiae magni, ex quis consequuntur mollitia.......<Link to="/blogs/node-js"><span className='text-red-400 text-sm'>Read More</span></Link></p>
        <p className='px-6 pb-3 flex justify-between items-center'>
          <h3>27-06-2024</h3>
          <h4>Abhinay Kushwaha</h4>
        </p>
      </div>

      <div className='shadow-1 h-full flex flex-col justify-between  pb-2 gap-3 '>
        <img className='w-full h-44 xl:h-60 object-cover' src={python} alt="Python" />
        <h1 className='text-start font-semibold text-xl px-6 '>Discription Lorem ipsum dolor sit amet.</h1>
        <p className='px-6 font-normal text-justify indent-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus aperiam molestiae magni, ex quis consequuntur mollitia.......<Link to="/blogs/python"><span className='text-red-400 text-sm'>Read More</span></Link></p>
        <p className='px-6 pb-3 flex justify-between items-center'>
          <h3>27-06-2024</h3>
          <h4>Abhinay Kushwaha</h4>
        </p>
      </div>

      <div className='shadow-1 h-full flex flex-col justify-between  pb-2 gap-3 '>
        <img className='w-full h-44 xl:h-60 object-cover' src={digital} alt="Digital Marketing" />
        <h1 className='text-start font-semibold text-xl px-6 '>Discription Lorem ipsum dolor sit amet.</h1>
        <p className='px-6 font-normal text-justify indent-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus aperiam molestiae magni, ex quis consequuntur mollitia.......<Link to="/blogs/digital-marketing"><span className='text-red-400 text-sm'>Read More</span></Link></p>
        <p className='px-6 pb-3 flex justify-between items-center'>
          <h3>27-06-2024</h3>
          <h4>Abhinay Kushwaha</h4>
        </p>
      </div>



    </div>
  )
}

export default BlogFrirst
