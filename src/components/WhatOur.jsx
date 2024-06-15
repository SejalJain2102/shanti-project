import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Crou.css"; // Ensure this file contains the custom CSS

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
    breakpoint: { max: 767, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const sliderItems = [
  {
    quaUrl: "../src/assets/quotes.svg",
    heading2: "⭐⭐⭐⭐⭐",
    heading3: "MERN Stack ",
    paragraph:  `Thank you for the valuable content in the MERN Developer training program at ShantInfosoft. While the materials have been informative, I've noticed that the learning environment lacks energy. I appreciate the effort put into organizing the program and look forward to contributing to its success.`,
    mainUrl: "../src/assets/PoojaVishwakarma.png",
    heading4: "Pooja Vishwakarma  ",
  },
  {
    quaUrl: "../src/assets/quotes.svg",
    heading2: "⭐⭐⭐⭐⭐",
    heading3: "MERN Stack ",
    paragraph: "Gain real-world experience through our extensive internship opportunities.",
    mainUrl: "../src/assets/AjeetSaroj.png",
    heading4: " Ajeet Saroj ",
  },
  {
    quaUrl: "../src/assets/quotes.svg",
    heading2: "⭐⭐⭐⭐⭐",
    heading3: "MERN Stack ",
    paragraph: `Shanti Infosoft internship has been an amazing learning experience! Hands-on projects with MERN stack technologies (MongoDB, Express.js, React, Node.js) deepened my understanding and challenged dme in a collaborative environment. The supportive culture and mentorship fostered significant growth. Grateful for the opportunity!`,
    mainUrl: "../src/assets/abhinay.jpeg",
    heading4: " Abhinay Kushwaha ",
  },
  {
    quaUrl: "../src/assets/quotes.svg",
    heading2: "⭐⭐⭐⭐⭐",
    heading3: "MERN Stack ",
    paragraph: ` Their teaching style and course structure makes web development easy and enjoyable. The hands-on approach and collaborative projects helped me grasp concepts effectively. I feel confident to apply my skills  in real-world projects. Looking forward to more learning opportunities.`,
    mainUrl: "../src/assets/AshishKumarSrivastava.png",
    heading4: " Ashish Kumar Srivastava",
  },
  {
    quaUrl: "../src/assets/quotes.svg",
    heading2: "⭐⭐⭐⭐⭐",
    heading3: "MERN Stack ",
    paragraph: `This place is really very good It was my pleasure to work with such a  wonderful organization like Shanti Infosoft LLP. I have learned so many  things here. Earlier I was not able to crack interviews now I am able to  crack Interviews. On the other hand the environment is also very good ef and everyone has helping nature.`,
    mainUrl: "../src/assets/RaghavMaheshwari.png",
    heading4: " Raghav Maheshwari ",
  },
  {
    quaUrl: "../src/assets/quotes.svg",
    heading2: "⭐⭐⭐⭐⭐",
    heading3: "MERN Stack ",
    paragraph: `Their teaching style and course structure makes web development easy and enjoyable. The hands-on approach and collaborative projects helped me grasp concepts effectively.  I feel confident to apply my skills in real-world projects. Looking forwardme to more learning opportunities.`,
    mainUrl: "../src/assets/lavisha.jpg",
    heading4: " Lavisha Jain ",
  },
  {
    quaUrl: "../src/assets/quotes.svg",
    heading2: "⭐⭐⭐⭐⭐",
    heading3: "MERN Stack ",
    paragraph: `Internship at Shanti Infosoft as a MERN stack developer has been an enriching experience. Structured projects, valuable feedback, and mentorship have strengthened my MERN skills and problem-solving abilities. I'm gaining confidence to tackle complex tasks and contribute meaningfully. Grateful for the opportunity and excited to keep learning!`,
    mainUrl: "../src/assets/Sejal-Jain.png",
    heading4: " Sejal Jain ",
  },
];

const WhatOur = () => {
  return (
    <>
      <div className='pt-10 m-1 sm:mx-24 md:mx-32 lg:mx-56'>
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
          showDots={true}
          infinite={true}
          partialVisible={false}
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          arrows={false}
        >
          {sliderItems.map((item, index) => {
            return (
              <div
                className={`slider  flex flex-col justify-between gap-4 border h-full p-4 rounded-lg shadow-lg`}
                key={index}
                style={{ margin: '0 10px' }} // Adding margin to create gap between items
              >
                <img src={item.quaUrl} alt={`Image ${index}`} className="align-left relative -top-6  h-16"/>
                <h2 className="text-start  font-semibold ">
                  {item.heading2}
                </h2>
                <h3 className="text-start font-semibold text-lg  ">
                  {item.heading3}
                </h3>
                <p className="text-start leading-10 font-thin  text-sm sm:text-base lg:text-lg">
                  {item.paragraph}
                </p>
                <div className="flex justify-start items-center gap-2  ">
                <img src={item.mainUrl} alt={`Image ${index}`} className=" w-8 h-8 rounded-full border border-red-500"/>
                <h4 className="text-start font-semilight  text-lg">
                  {item.heading4}
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
