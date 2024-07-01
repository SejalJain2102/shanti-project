import React, { useEffect } from 'react'
import reactblog from "../../assets/reactblog.jpg"
import { GoDotFill } from 'react-icons/go'
import { useLocation } from 'react-router-dom';

const BlogReact = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>
      <div style={{ 
          backgroundImage: `url(${reactblog})`, 
          backgroundSize: "cover", 
          backgroundRepeat: "no-repeat", 
          backgroundPosition: "center", 
          backgroundColor: "black"
        }}
        className='lg:h-96 sm:h-72 h-60 flex flex-col justify-center items-center'>
        <div style={{ 
            backgroundColor: "rgba(0, 0, 0, 0.6)", 
            width: "100%", 
            height: "100%", 
            display: "flex", 
            flexDirection: "column", 
            justifyContent: "center", 
            alignItems: "start",
            padding:"6%" 
          }}>
          <h1 className='font-bold text-3xl sm:text-4xl text-white'>React Blog</h1>
          <h2 className='font-bold text-3xl sm:text-4xl text-white'>How are you? I'm Fine</h2>
          <h3 className='font-bold text-3xl sm:text-4xl text-white'>Just looking like a wow</h3>
          <h2 className='font-bold text-3xl sm:text-4xl text-white'>You send a reels & I send you reels</h2>
        </div>
      </div>

      <div className='mx-2 mb-4 m-4 sm:mx-24 md:mx-32 lg:mx-56 mt-20'>
        <h1 className='font-bold text-2xl sm:text-4xl'>About React</h1>
        <p className='flex justify-start items-baseline'><GoDotFill/>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus nemo ipsum adipisci harum nostrum nihil, labore cumque, quos aliquid debitis nisi quod molestias. Dolores, veniam officia eos quaerat sed tempore!</p>
        <p className='flex justify-start items-baseline'><GoDotFill/>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus nemo ipsum adipisci harum nostrum nihil,  Dolores, veniam officia eos quaerat sed tempore!</p>
        <p className='flex justify-start items-baseline'><GoDotFill/>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus nemo ipsum adipisci harum nostrum nihil,  Dolores, veniam officia eos quaerat sed tempore!</p>
        <p className='flex justify-start items-baseline'><GoDotFill/>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus nemo ipsum adipisci harum nostrum nihil,  Dolores, veniam officia eos quaerat sed tempore!</p>
        <p className='flex justify-start items-baseline'><GoDotFill/>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus nemo ipsum adipisci harum nostrum nihil,  Dolores, veniam officia eos quaerat sed tempore!</p>
        <br />
        <br />
        <h2 className='font-bold text-2xl sm:text-4xl'>Its Advantages & Use</h2>
        <p className='flex justify-start items-baseline'><GoDotFill/>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus nemo ipsum adipisci harum nostrum nihil, labore cumque, quos aliquid debitis nisi quod molestias. Dolores, veniam officia eos quaerat sed tempore!</p>
        <p className='flex justify-start items-baseline'><GoDotFill/>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus nemo ipsum adipisci harum nostrum nihil,  Dolores, veniam officia eos quaerat sed tempore!</p>
        <p className='flex justify-start items-baseline'><GoDotFill/>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus nemo ipsum adipisci harum nostrum nihil, labore cumque, quos aliquid debitis nisi quod molestias. Dolores, veniam officia eos quaerat sed tempore!</p>
        <p className='flex justify-start items-baseline'><GoDotFill/>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus nemo ipsum adipisci harum nostrum nihil,  Dolores, veniam officia eos quaerat sed tempore!</p>
        <p className='flex justify-start items-baseline'><GoDotFill/>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus nemo ipsum adipisci harum nostrum nihil,  Dolores, veniam officia eos quaerat sed tempore!</p>
        <p className='flex justify-start items-baseline'><GoDotFill/>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus nemo ipsum adipisci harum nostrum nihil, labore cumque, quos aliquid debitis nisi quod molestias. Dolores, veniam officia eos quaerat sed tempore!</p>
        <p className='flex justify-start items-baseline'><GoDotFill/>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus nemo ipsum adipisci harum nostrum nihil,  Dolores, veniam officia eos quaerat sed tempore!</p>
        <br /><br />
        <h3 className='font-bold text-2xl sm:text-4xl'>In Future Scope</h3>
        <p className='flex justify-start items-baseline'><GoDotFill/>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus nemo ipsum adipisci harum nostrum nihil, labore cumque, quos aliquid debitis nisi quod molestias. Dolores, veniam officia eos quaerat sed tempore!</p>
        <p className='flex justify-start items-baseline'><GoDotFill/>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus nemo ipsum adipisci harum nostrum nihil,  Dolores, veniam officia eos quaerat sed tempore!</p>
        <p className='flex justify-start items-baseline'><GoDotFill/>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus nemo ipsum adipisci harum nostrum nihil, labore cumque, quos aliquid debitis nisi quod molestias. Dolores, veniam officia eos quaerat sed tempore!</p>
        <p className='flex justify-start items-baseline'><GoDotFill/>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus nemo ipsum adipisci harum nostrum nihil,  Dolores, veniam officia eos quaerat sed tempore!</p>
        <p className='flex justify-start items-baseline'><GoDotFill/>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus nemo ipsum adipisci harum nostrum nihil,  Dolores, veniam officia eos quaerat sed tempore!</p>
      </div>
    </>
  )
}

export default BlogReact
