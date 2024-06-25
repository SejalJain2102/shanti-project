import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import slack from "../assets/slack.png"
import vscode from "../assets/vscode1.png"
import postman from "../assets/postman1.png"
import github from "../assets/github1.png"
import './Shadow.css'; //  custom styles for hover effect

const Tools = () => {
  // Settings for the carousel
  const settings = {
    autoplay: true,
    arrows: true,
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1324,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className='mt-14 m-1 sm:mx-24 md:mx-32 lg:mx-56'>
      <h1 className='text-3xl md:text-4xl lg:text-6xl font-bold text-center p-10'>Tools</h1>

      {/* Carousel */}
      <Slider {...settings} className="flex justify-between items-center">
        {/* Postman */}
        <div className="relative shadow-carousel hover:shadow-lg">
          <img
            className='hover:scale-110 ease-in-out duration-300 h-44 md:h-36 w-full'
            src={postman}
            alt="postman"
          />
        </div>
        {/* VS Code */}
        <div className="relative shadow-carousel hover:shadow-lg">
          <img
            className='hover:scale-110 ease-in-out duration-300  h-44 md:h-36 w-full'
            src={vscode}
            alt="vs code"
          />
        </div>
        {/* GitHub */}
        <div className="relative shadow-carousel hover:shadow-lg">
          <img
            className='hover:scale-110 ease-in-out duration-300 py-4  h-44 md:h-36 w-full'
            src={github}
            alt="github"
          />
        </div>
        {/* Slack */}
        <div className="relative shadow-carousel hover:shadow-lg">
          <img
            className='hover:scale-110 ease-in-out duration-300  h-44 md:h-36 w-full'
            src={slack}
            alt="slack"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Tools;
