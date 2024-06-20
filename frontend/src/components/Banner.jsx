import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Banner = () => {
  useEffect(() => {
    AOS.init();
}, []);
  return (
    <div data-aos="zoom-in" className="xl:grid  xl:grid-cols-2 grid-cols-1 space-y-7 xl:h-96 p-4 bg-[#FDECEA] rounded-lg mt-14 m-1 sm:mx-12 md:mx-22 lg:mx-32">
      <div style={{backgroundImage:"url('../src/assets/bgBan.png')", backgroundSize: "cover", backgroundRepeat:"no-repeat",backgroundPosition:"center",
      
      }} className="flex  flex-col  justify-center items-center gap-5 text-center">
        <h2 style={{backgroundImage:"url('https://shantiinfosoft.com/images/training/vector-img.svg')", backgroundSize: "cover", backgroundRepeat:"no-repeat",width:"100%", height:"40px", maxWidth:"450px",textAlign:"center",backgroundPosition:"center",
      
    }} className="flex  max-w-48 w-full justify-center items-center  text-white font-bold">₹ 9,999 Instead of ₹15,000</h2>
        <h1 className="font-semibold text-5xl">Shanti Academy-</h1>
        <p className="text-2xl font-semibold mb-4">Unlocking Potential, Transforming Futures!</p>
        <button className="bg-red-500 text-white tracking-widest font-bold text-sm py-4 w-fit px-4 text-center rounded-md">RESERVE YOUR FREE SPOT!</button>
      </div>

      <div style={{backgroundImage:"url('../src/assets/bgBan2.png')", backgroundSize: "cover",backgroundPosition:"center",
      
      }} className="flex    flex-col justify-center gap-4  items-center text-center">
            <img className='h-48' src="https://shantiinfosoft.com/images/training/jobsupport.svg" alt="banner" />
        <button className="bg-red-500 w-fit px-4 text-white tracking-widest font-bold text-sm py-4 text-center  rounded-md">RESERVE YOUR FREE SPOT!</button>
      </div>
    </div>
  );
};

export default Banner;
