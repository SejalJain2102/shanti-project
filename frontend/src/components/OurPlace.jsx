import React, { useState, useEffect } from 'react';
import "./Crou.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useLocation } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 
  }
};

const OurPlace = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  // API data
  const [placements, setPlacements] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/get-ourPlacements')
      .then(response => response.json())
      .then(data => setPlacements(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <>
      <h1 data-aos="fade-down" className='text-3xl md:text-4xl lg:text-6xl font-bold mt-14 m-2 sm:mx-24 md:mx-32 lg:mx-56'>Our Placements</h1>
      <Carousel
        autoPlaySpeed={2000}
        responsive={responsive}
        infinite={true}
        containerClass="carousel-container"
        removeArrowOnDeviceType={['tablet', 'mobile',"desktop"]}
        itemClass="carousel-item"
        className='mt-10 m-10 mb-10 sm:mx-24 md:mx-32 lg:mx-56'
      >
        {placements.map((placement) => (
          <div key={placement.id} className='z-20 bg-[#FDECEA]   m-3 py-12 border-b-8 border-red-500 rounded-lg'>
            <h2 style={{ backgroundImage: "url('../src/assets/pack.png')", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}
              className='place text-sm rounded-s-full rounded-t-full  h-8 w-44 transition-transform -rotate-45 relative -left-11 -top-5 flex justify-center items-center font-semibold text-white '>
              Package : {placement.package}
            </h2>
            <div className='flex flex-col justify-between items-center gap-3'>
              <img className='z-20' src={placement.image} alt={placement.name} />
              <h1 className='font-bold text-2xl'>{placement.name}</h1>
              <p className='text-lg font-extralight '>{placement.position}</p>
              <img src={placement.companyLogo} alt={placement.name} />
            </div>
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default OurPlace;
