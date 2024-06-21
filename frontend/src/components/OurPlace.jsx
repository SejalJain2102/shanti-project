import React, { useState, useEffect } from 'react';
import "./Crou.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useLocation } from 'react-router-dom';

const OurPlace = () => {
  useEffect(() => {
    AOS.init();
}, []);
  
const location = useLocation();

useEffect(() => {
  window.scrollTo(0, 0);
}, [location]);

// api 
  const [placements, setPlacements] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/our-placements')
      .then(response => response.json())
      .then(data => setPlacements(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <>
      <h1 data-aos="fade-down"  className='text-3xl md:text-4xl lg:text-6xl font-bold mt-14 m-1 sm:mx-24 md:mx-32 lg:mx-56 '>Our Placements</h1>
      <div data-aos="zoom-in"  className=' grid lg:grid-cols-2 grid-cols-1 xl:grid-cols-3 gap-5 mt-10 m-10 sm:mx-24 md:mx-32 lg:mx-56 '>
        {placements.map((placement) => (
          <div key={placement.id} className='z-20 bg-[#FDECEA] m-2 py-12 border-b-8 border-red-500 rounded-lg'>
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
      </div>
    </>
  );
};

export default OurPlace;
