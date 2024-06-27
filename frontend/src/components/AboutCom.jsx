import React, { useEffect } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import first from "../assets/PoojaVishwakarma.png"
import second from "../assets/AjeetSaroj.png"
import third from "../assets/abhinay.jpeg"
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { GoDotFill } from "react-icons/go";


const AboutCom = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className='mt-24'>
    
    <div className='lg:grid grid-cols-3 grid-flow-col justify-center items-center gap-16 md:m-10 sm:m-5 m-2 sm:mx-12 md:mx-24 lg:mx-32 space-y-10'>
      <div className='ease-in-out  duration-300 hover:scale-110 col-span-1 flex items-center justify-center' style={{width:"100%"}}>
      <Carousel
      className='w-96 lg:w-auto'
      autoPlay={true}
      infiniteLoop
      interval={3000}
      showStatus={false}
      showThumbs={false}
      >
                <div>
                    <img className='' src={first} />
                </div>
                <div>
                    <img className='' src={second} />
                </div>
                <div>
                    <img className='' src={third} />
                </div>
            </Carousel>
      </div>

      <div  className='col-span-2'>
      <h1 style={{ fontFamily: 'TrumpGothicEast' }} className='text-3xl md:text-4xl lg:text-6xl font-bold  text-start  '>About Shanti!</h1>
         <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta ex omnis veniam est eius non eveniet magni animi unde, dolores quibusdam alias similique accusamus illo expedita sunt? Doloribus, beatae illum enim neque repellat totam iste necessitatibus fugit quis porro sit earum omnis facere id cumque nesciunt ducimus rerum laudantium facilis.
         </p>
         <br />
         <p className='flex items-center gap-2' ><GoDotFill/>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam pariatur deserunt, reiciendis beatae inventore similique esse blanditiis quis iusto ad!
         </p> <br />
         <p className='flex items-center gap-2'><GoDotFill/>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, necessitatibus!</p> <br />
         <p className='flex items-center gap-2'><GoDotFill/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid enim, omnis labore veritatis ad obcaecati!</p> <br />
         <p className='flex items-center gap-2'><GoDotFill/>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam pariatur deserunt, reiciendis beatae inventore similique esse blanditiis quis iusto ad!
         </p> <br />
         <p className='flex items-center gap-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, necessitatibus!</p> <br />
         <p className='flex items-center gap-2'><GoDotFill/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid enim, omnis labore veritatis ad obcaecati!</p>
      </div>
    </div>
    </div>
  )
}

export default AboutCom
