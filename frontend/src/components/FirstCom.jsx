import React, { useEffect } from 'react';
import '../App.css';
import 'react-phone-input-2/lib/style.css';
import './FirstCom.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import MyForm from './MyForm';
import { Link } from 'react-router-dom';

const FirstCom = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      style={{
        backgroundImage: "url('https://shantiinfosoft.com/images/training/banner-bg.svg')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
      }}
      className='container mx-auto px-4 pt-6 sm:px-8 md:px-16 lg:px-32 xl:px-40'
    >
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10'>
        {/* Left section */}
        <div data-aos='fade-right' className='flex justify-start items-start'>
          <div className='p-7 flex flex-col gap-5'>
            <h1 style={{ fontFamily: 'TrumpGothicEast' }} className='custom-font font-bold text-5xl lg:text-7xl'>
              Level Up Your Tech Game <br />
              With Our{' '}
              <span style={{ fontFamily: 'TrumpGothicEast' }} className='underline text-rose-600'>
                Internships &{' '}
              </span>
              <br />
              <span style={{ fontFamily: 'TrumpGothicEast' }} className='underline text-rose-600'>
                Training
              </span>{' '}
              Programs.
            </h1>
            <p className='text-lg'>
              Gain valuable experience working on real-world projects <br />
              with leading IT companies in Indore.
            </p>
            {/* <div className='flex gap-4 items-center justify-start'>
            <Link to="/aboutUs"><button className='px-4 py-2 tracking-widest font-bold text-sm text-white bg-red-600 rounded hover:bg-red-700'>
                Explore
              </button></Link>
              <img
                className='h-8'
                src='https://shantiinfosoft.com/images/training/testimonial.png'
                alt='testimonial'
              />
            </div> */}
          </div>
        </div>

        {/* Right section */}
        <div data-aos='fade-left' className='border rounded-2lg bg-white 2xl:ml-20 shadow-2xl p-6'>
          <h1 className='font-bold text-2xl lg:text-3xl mb-4'>Request a call back</h1>
          <p className='text-lg mb-4'>
            Let's turn your curiosity into a conversation! Your journey starts with a click. Reach
            out now!
          </p>
          <MyForm />
        </div>
      </div>
    </div>

  );
};

export default FirstCom;
