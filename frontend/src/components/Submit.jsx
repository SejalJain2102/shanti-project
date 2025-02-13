import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { IoMdClose } from "react-icons/io";

const Submit = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const handleClose = () => {
    navigate('/'); 
  };

  return (
    <div className='flex flex-col justify-center items-center w-full'>
      <div className='w-full'>
        <IoMdClose className='relative ml-auto right-10 top-10 text-3xl' onClick={handleClose} />
      </div>
      <div className='flex p-10 gap-2 sm:w-1/2 flex-col justify-center items-center'>
        <img data-aos="zoom-in" data-aos-duration="2000" src="../src/assets/sucessful.png" alt="successful" />
        <h2 className='font-bold text-3xl sm:text-5xl '>Thank you!</h2>
        <h3 className='font-bold text-xl sm:text-2xl'>We Have Received Your Request</h3>
        <p className='text-center'>Thank you for your application for the Internship/Training program at <strong>Shanti Infosoft</strong>. We appreciate your interest in joining our team and for taking the time to apply.</p>
        <p className='text-center'>We have received your application and will review it carefully. Our team will be in touch with you shortly regarding the next steps in the application process.</p>
        <p className='text-center'>If you have any questions or need further information, please feel free to contact us at <a href="mailto:training@shantiinfosoft.com"><strong>training@shantiinfosoft.com</strong></a> or <a href="tel:+918815531673"><strong>+91-8815531673</strong></a></p>
        <p className='text-center'>Thank you again for your interest in <strong>Shanti Infosoft</strong>. We look forward to the possibility of working with you.</p>
      </div>
    </div>
  );
};

export default Submit;
