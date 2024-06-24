import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Shadow.css'; //  custom styles for hover effect

const Tools = () => {
  // Settings for the carousel
  const settings = {
    autoplay: true,
    arrows: true,
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
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
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
            src="https://mms.businesswire.com/media/20230322005274/en/761650/23/postman-logo-vert-2018.jpg"
            alt="postman"
          />
        </div>
        {/* VS Code */}
        <div className="relative shadow-carousel hover:shadow-lg">
          <img
            className='hover:scale-110 ease-in-out duration-300  h-44 md:h-36 w-full'
            src="https://miro.medium.com/v2/resize:fit:1358/1*0LS0sRb2kjHtIIWtKAt-iw.png"
            alt="vs code"
          />
        </div>
        {/* GitHub */}
        <div className="relative shadow-carousel hover:shadow-lg">
          <img
            className='hover:scale-110 ease-in-out duration-300  h-44 md:h-36 w-full'
            src="https://www.webfx.com/wp-content/uploads/2022/08/github-logo.png"
            alt="github"
          />
        </div>
        {/* Slack */}
        <div className="relative shadow-carousel hover:shadow-lg">
          <img
            className='hover:scale-110 ease-in-out duration-300  h-44 md:h-36 w-full'
            src="https://image.cnbcfm.com/api/v1/image/105684220-1547727181154mb_slack_01.jpg?v=1547727329&w=929&h=523&vtcrop=y"
            alt="slack"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Tools;
