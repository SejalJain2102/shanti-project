import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import BlogFrirst from './BlogFrirst';

const Blogs = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div>
      <h1 className='text-center font-bold sm:text-5xl text-3xl m-3'>Popular Blogs</h1>
      <BlogFrirst/>
    </div>
  )
}

export default Blogs
