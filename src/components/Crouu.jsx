import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Crou.css"; // Ensure this file contains the custom CSS

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 767, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const sliderItems = [
  {
    heading1: "01",
    heading2: "Expert-Led Classes",
    paragraph:
      "Our programs cover a wide range of topics to ensure you get a well-rounded education.",
  },
  {
    heading1: "02",
    heading2: "Real-World Experience",
    paragraph:
      "Gain real-world experience through our extensive internship opportunities.",
  },
  {
    heading1: "03",
    heading2: "Learn from the Best",
    paragraph:
      "Learn from industry experts who bring their knowledge and experience to the classroom.",
  },
  {
    heading1: "04",
    heading2: "Job Placement Assistance",
    paragraph:
      "We offer career services to help you find the job that's right for you.",
  },
  {
    heading1: "05",
    heading2: "Study at Your Pace",
    paragraph:
      "Choose from a variety of learning formats that fit your schedule and learning style.",
  },
  {
    heading1: "06",
    heading2: "Stay Ahead of the Curve",
    paragraph:
      "Stay ahead of the curve with our up-to-date curriculum designed by industry professionals.",
  },
  {
    heading1: "07",
    heading2: "Join a Vibrant Community",
    paragraph:
      "Join a vibrant community of learners and professionals and expand your network.",
  },
  {
    heading1: "08",
    heading2: "Alumni Achievements",
    paragraph:
      "Hear from our successful alumni and see where their education has taken them.",
  },
];

const Crou = () => {
  return (
    <>
    <div className='pt-10   m-1 sm:mx-22 md:mx-24 lg:mx-56'>
      <div className='flex flex-col justify-center items-start my-10 relative'>
        <h1 className='text-3xl  md:text-4xl lg:text-6xl font-bold text-slate-200 text-start mt-10 mb-6 relative'>
          What our Student say
        </h1>
        <h2 className='font-bold text-2xl md:text-3xl lg:text-4xl absolute  mt-6 text-start'>
          <strong className='text-red-500 pr-1'>—</strong>
          What our Student say
        </h2>
      </div>
    </div>
    <div className="parent mx-2 mb-4 m-1 sm:mx-22 md:mx-24 lg:mx-56 mt-10 space-y-5">
      
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        partialVisible={false}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        arrows={false}
      >
        {sliderItems.map((item, index) => {
          const bgColor = index % 2 === 0 ? "bg-[#FFEDEB]" : "bg-[#E8F0FE]";
          return (
            <div
              className={`slider h-full p-4 rounded-lg ${bgColor} shadow-lg`}
              key={index}
              style={{ margin: '0 10px' }} // Adding margin to create gap between items
            >
              <h2 className="text-end font-bold text-3xl sm:text-4xl lg:text-6xl mb-2">
                {item.heading1}
              </h2>
              <h3 className="text-start font-semibold text-lg sm:text-xl mb-2">
                {item.heading2}
              </h3>
              <p className="text-start text-sm sm:text-base lg:text-lg">
                {item.paragraph}
              </p>
            </div>
          );
        })}
      </Carousel>
    </div>
    </>
  );
};

export default Crou;
