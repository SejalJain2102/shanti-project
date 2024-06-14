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
    heading3: "Expert-Led Classes",
    paragraph: "Our programs cover a wide range of topics to ensure you get a well-rounded education.",
    mainUrl: "../src/assets/PoojaVishwakarma.png",
    heading4: "Pooja Vishwakarma  ",
  },
  {
    quaUrl: "../src/assets/quotes.svg",
    heading2: "⭐⭐⭐⭐⭐",
    heading3: "Real-World Experience",
    paragraph: "Gain real-world experience through our extensive internship opportunities.",
    mainUrl: "../src/assets/AjeetSaroj.png",
    heading4: " Ajeet Saroj ",
  },
  {
    quaUrl: "../src/assets/quotes.svg",
    heading2: "⭐⭐⭐⭐⭐",
    heading3: "Learn from the Best",
    paragraph: `During my internship at Shanti Infosoft LLP, I learned a lot about the IT industry. I got to work on different projects that used what I learned in school. This company is great for interns because there are lots of chances to grow, and they care about keeping a good balance between work and life.`,
    mainUrl: "../src/assets/abhinay.jpeg",
    heading4: " Abhinay Kushwaha ",
  },
  {
    quaUrl: "../src/assets/quotes.svg",
    heading2: "⭐⭐⭐⭐⭐",
    heading3: "Job Placement Assistance",
    paragraph: ` Working at Shanti Infosoft LLP as an intern has been an incredible journey for me.  The supportive atmosphere and hands-on training have truly accelerated my growth in the IT industry. At Shanti Infosoft LLP, every day brings new challenges and opportunities for growth. The transparent communication and culture of continuous improvement create an environment where creativity thrives. I'm grateful for the chance to work on meaningful projects alongside talented colleagues who share my passion for excellence.
Choosing Shanti Infosoft LLP for my internship has been one of the best decisions I've made for my career. I'm proud to be a part of this organization and excited to see where my journey here takes me.`,
    mainUrl: "../src/assets/AshishKumarSrivastava.png",
    heading4: " Ashish Kumar Srivastava",
  },
  {
    quaUrl: "../src/assets/quotes.svg",
    heading2: "⭐⭐⭐⭐⭐",
    heading3: "Study at Your Pace",
    paragraph: `As an intern at [Shanti infosoft], I had the opportunity to gain valuable insights into the workings of the IT industry. During my internship, I was exposed to a wide range of projects and tasks that allowed me to apply the knowledge gained from my academic studies. The company provided comprehensive training and mentorship, which greatly enhanced my technical skills and understanding of IT concepts. I am sure its a wonderful place to land your carrier in IT industry`,
    mainUrl: "../src/assets/RaghavMaheshwari.png",
    heading4: " Raghav Maheshwari ",
  },
  {
    quaUrl: "../src/assets/quotes.svg",
    heading2: "⭐⭐⭐⭐⭐",
    heading3: "Study at Your Pace",
    paragraph: "Choose from a variety of learning formats that fit your schedule and learning style.",
    mainUrl: "../src/assets/lavisha.jpg",
    heading4: " Lavisha Jain ",
  },
  {
    quaUrl: "../src/assets/quotes.svg",
    heading2: "⭐⭐⭐⭐⭐",
    heading3: "Study at Your Pace",
    paragraph: "Choose from a variety of learning formats that fit your schedule and learning style.",
    mainUrl: "../src/assets/Sejal-Jain.png",
    heading4: " Sejal Jain ",
  },
];

const WhatOur = () => {
  return (
    <>
      <div className='pt-10 m-1 sm:mx-22 md:mx-24 lg:mx-56'>
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
            return (
              <div
                className={`slider flex flex-col justify-between border sm:h-96 p-4 rounded-lg shadow-lg`}
                key={index}
                style={{ margin: '0 10px' }} // Adding margin to create gap between items
              >
                <img src={item.quaUrl} alt={`Image ${index}`} className="align-left relative -top-6  h-16"/>
                <h2 className="text-start  font-bold ">
                  {item.heading2}
                </h2>
                <h3 className="text-start font-semibold text-lg sm:text-xl ">
                  {item.heading3}
                </h3>
                <p className="text-start text-sm sm:text-base lg:text-lg">
                  {item.paragraph}
                </p>
                <div className="flex justify-start items-start gap-2  ">
                <img src={item.mainUrl} alt={`Image ${index}`} className=" w-8 h-8 rounded-full border border-red-500"/>
                <h4 className="text-start font-semibold text-lg sm:text-xl">
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
