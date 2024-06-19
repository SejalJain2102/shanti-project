import React, { useState, useEffect } from 'react';
import "./Crou.css";
import { useLocation } from 'react-router-dom';

const OurPlace = () => {
  const [placements, setPlacements] = useState([]);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    fetch('http://localhost:3000/our-placements')
      .then(response => response.json())
      .then(data => setPlacements(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <>
      <h1 className='text-3xl md:text-4xl lg:text-6xl font-bold mt-14 m-1 sm:mx-24 md:mx-32 lg:mx-56 '>Our Placements</h1>
      <div className='grid lg:grid-cols-2 grid-cols-1 xl:grid-cols-3 gap-5 mt-10 m-10 sm:mx-24 md:mx-32 lg:mx-56 '>
        {placements.map((placement) => (
          <div key={placement.id} className='z-20 bg-[#FDECEA] py-12 border-b-8 border-red-500 rounded-lg'>
            <h2 style={{ backgroundImage: "url('../src/assets/pack.png')", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}
              className='place text-xs rounded-s-full rounded-t-full  h-6 w-36 transition-transform -rotate-45 relative -left-9 -top-6 flex justify-center items-center font-semibold text-white '>
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
