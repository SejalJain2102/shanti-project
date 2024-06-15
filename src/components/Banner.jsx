import React from 'react';

const Banner = () => {
  return (
    <div className="lg:grid  lg:grid-cols-2 grid-cols-1 space-y-7 lg:h-96 p-4 bg-[#FDECEA] rounded-lg mt-14 m-1 sm:mx-24 md:mx-32 lg:mx-56">
      <div style={{backgroundImage:"url('../src/assets/bgBan.png')", backgroundSize: "cover", backgroundRepeat:"no-repeat",backgroundPosition:"center",
      
      }} className="flex  flex-col  justify-center items-center gap-3 text-center">
        <h2 style={{backgroundImage:"url('https://shantiinfosoft.com/images/training/vector-img.svg')", backgroundSize: "cover", backgroundRepeat:"no-repeat",width:"100%", height:"40px",maxWidth:"450px",textAlign:"center",
      
    }} className="flex   justify-center items-center  text-white font-bold">₹ 9,999 Instead of ₹15,000</h2>
        <h1 className="text-4xl">Shanti Academy-</h1>
        <p className="text-xl mb-4">Unlocking Potential, Transforming Futures!</p>
        <button className="bg-red-500 text-white tracking-widest font-bold text-sm py-2 w-full text-center rounded-lg">RESERVE YOUR FREE SPOT!</button>
      </div>

      <div style={{backgroundImage:"url('../src/assets/bgBan2.png')", backgroundSize: "cover",backgroundPosition:"center",
      
      }} className="flex    flex-col justify-center gap-4  items-center text-center">
            <img className='h-48' src="https://shantiinfosoft.com/images/training/jobsupport.svg" alt="banner" />
        <button className="bg-red-500 text-white tracking-widest font-bold text-sm py-2 text-center w-full rounded-lg">RESERVE YOUR FREE SPOT!</button>
      </div>
    </div>
  );
};

export default Banner;
