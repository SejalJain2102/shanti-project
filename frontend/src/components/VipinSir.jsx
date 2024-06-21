import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { GoDotFill } from "react-icons/go";


const VipinSir = () => {
  useEffect(() => {
    AOS.init();
  }, []);  return (
    <div className='mt-32'>
    <div  className='lg:grid grid-cols-3 grid-flow-col justify-center  gap-16 md:m-10 sm:m-5 m-2 sm:mx-12 md:mx-24 lg:mx-32'>
      <div data-aos="fade-right" className='col-span-2 flex flex-col gap-4'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt corrupti, quisquam laboriosam praesentium, quo totam fuga aspernatur voluptates expedita saepe illo itaque architecto vero fugiat! Assumenda corrupti esse dolorem quibusdam velit commodi saepe ducimus, quas inventore autem distinctio optio molestias?</p>
        <p className='flex gap-2 items-center'><GoDotFill/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, tempora!</p>
        <p className='flex gap-2 items-center'><GoDotFill/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, voluptatum atque ipsam inventore voluptatem saepe!</p>
        <p className='flex gap-2 items-center'><GoDotFill/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, tempora!</p>
        <p className='flex gap-2 items-center'><GoDotFill/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, voluptatum atque ipsam inventore voluptatem saepe!</p>
        <p className='flex gap-2 items-center'><GoDotFill/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, tempora!</p>
      </div>


      <div className='col-span-1'>
        <img  data-aos="fade-left" src="../src/assets/VipinSir.jpeg" alt="" />
        <h1 className='font-bold flex justify-center gap-3 text-2xl'>Vipin Jain <span style={{ fontFamily: 'TrumpGothicEast' }} className='font-bold ml-2 text-2xl border-b-2 border-red-500'>Ex. IBM</span> </h1>
      </div>
    </div>
    </div>
  )
}

export default VipinSir
