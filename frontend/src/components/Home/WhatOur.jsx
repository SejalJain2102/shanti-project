import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../Crou.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const WhatOur = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/get-reviews")
      .then((response) => response.json())
      .then((data) => setReviews(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      <div className='pt-10 m-4 sm:mx-24 md:mx-32 lg:mx-56'>
        <div className='flex flex-col justify-center items-start my-10 relative'>
          <h1 className='text-3xl md:text-4xl lg:text-6xl font-bold text-slate-200 text-start mt-10 mb-6 relative'>
            What our Student say
          </h1>
          <h2 className='font-bold text-2xl md:text-3xl lg:text-4xl absolute mt-6 text-start'>
            <strong className='text-red-500 pr-1'>—</strong>
            What our Student say
          </h2>
        </div>
      </div>
      <div className="parent mx-2 mb-4 m-1 sm:mx-24 md:mx-32 lg:mx-56 mt-10 space-y-5">
        <Carousel
          responsive={responsive}
          autoPlay={true}
          swipeable={true}
          draggable={true}
          showDots={false}
          infinite={true}
          partialVisible={false}
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          arrows={false}
        >
          {reviews.map((item, index) => {
            return (
              <div
                className={`slider  flex flex-col justify-between gap-4 border h-full p-4 rounded-lg shadow-lg`}
                key={item.id}
                style={{ margin: '0 10px' }} 
              >
                <img src="../src/assets/quotes.svg" alt="" className="align-left   h-16 w-16"/>
                <h2 className="text-start  font-semibold ">
                  {item.star}
                </h2>
                <h3 className="text-start font-semibold text-lg  ">
                  {item.position}
                </h3>
                <p className="text-start leading-10 font-semilight  text-sm sm:text-base lg:text-lg">
                  {item.comment}
                </p>
                <div className="flex justify-start items-center gap-2  ">
                  <img src={`http://localhost:5000${item.image}`} alt={`Image ${index}`} className=" w-8 h-8 rounded-full border border-red-500"/>
                  <h4 className="text-start font-semilight  text-lg">
                    {item.name}
                  </h4>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </>
  );
};

export default WhatOur;
