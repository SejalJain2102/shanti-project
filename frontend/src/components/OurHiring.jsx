import React, { useEffect } from 'react';
import ozone from "../assets/ozonsoft-logo.png";
import accenture from "../assets/accen.png";
import amazon from "../assets/amazon.png";
import flipkart from "../assets/flipkart.png";
import ibm from "../assets/ibm.png";
import infosys from "../assets/infosys.png";
import tcs from "../assets/tcs.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const OurHiring = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1624 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 1624, min: 1024 },
      items: 4
    },
    laptop: {
      breakpoint: { max: 1024, min: 768 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <>
      <h1 className='text-3xl md:text-4xl lg:text-6xl font-bold mt-32 m-4 sm:mx-24 md:mx-32 lg:mx-56 text-center'>Our Hiring Partners</h1>
      <div className='mx-4 sm:mx-24 md:mx-32 lg:mx-56'>
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          showDots={true}
          arrows={false}
        >
          {[ozone, accenture, amazon, flipkart, ibm, infosys, tcs].map((src, index) => (
            <div key={index}  className='flex justify-center items-center p-16 '>
              <img className=' object-cover ' src={src} alt="hiring partner" />
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
}

export default OurHiring;
