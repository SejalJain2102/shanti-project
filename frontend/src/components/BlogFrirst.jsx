import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';
import './Shadow.css';

const BlogFrirst = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;
  const location = useLocation();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('http://localhost:5000/get-blogs');
        console.log(response.data); 
        setBlogs(response.data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, [location]);

  // Get current blogs
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Next page
  const nextPage = () => {
    if (currentPage < Math.ceil(blogs.length / blogsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Previous page
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className='mx-2 mb-10 m-4 sm:mx-24 md:mx-32 lg:mx-44 mt-6'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center gap-5'>
        {currentBlogs.map((blog) => (
          <div key={blog._id} className='shadow-1 h-full flex flex-col justify-between pb-2 gap-3'>
            <img className='w-full h-44 xl:h-60 object-cover' src={`http://localhost:5000${blog.image}`} alt='front image' />
            <h1 className='text-start font-semibold text-xl px-6'>{blog.heading}</h1>
            <p className='px-6 font-normal text-justify indent-5'>
              {blog.paragraph.slice(0, 100)}...
              <Link to={`/blogs/${blog._id}`}>
                <span className='text-red-400 text-sm'>Read More</span>
              </Link>
            </p>
            <p className='px-6 pb-3 flex justify-between items-center'>
              <h3>{new Date(blog.date).toLocaleDateString()}</h3>
              <h4>{blog.createdby}</h4>
            </p>
          </div>
        ))}
      </div>
      <Pagination
        blogsPerPage={blogsPerPage}
        totalBlogs={blogs.length}
        paginate={paginate}
        currentPage={currentPage}
        nextPage={nextPage}
        prevPage={prevPage}
      />
    </div>
  );
};

const Pagination = ({ blogsPerPage, totalBlogs, paginate, currentPage, nextPage, prevPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalBlogs / blogsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className='flex justify-center mt-4'>
      <ul className='pagination flex gap-3  '>
        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
          <button onClick={prevPage} className='page-link bg-red-400 p-1 px-2 rounded text-white'>
            Previous
          </button>
        </li>
        {pageNumbers.map(number => (
          <li key={number} className={`page-item ${number === currentPage ? 'active' : ''}`}>
            <button onClick={() => paginate(number)} className='page-link bg-red-400 p-1 px-2 rounded text-white'>
              {number}
            </button>
          </li>
        ))}
        <li className={`page-item ${currentPage === Math.ceil(totalBlogs / blogsPerPage) ? 'disabled' : ''}`}>
          <button onClick={nextPage} className='page-link bg-red-400 p-1 px-2 rounded text-white'>
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default BlogFrirst;
