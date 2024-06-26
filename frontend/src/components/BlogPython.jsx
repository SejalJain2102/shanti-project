import React, { useEffect } from 'react'
import pythonblog from "../assets/pythonblog.jpg"
import { GoDotFill } from 'react-icons/go'
import { useLocation } from 'react-router-dom';
const BlogPython = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>
      <div  style={{ backgroundImage: `url(${pythonblog})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}
      className='lg:h-96 sm:h-72 h-60 flex flex-col justify-center items-center'>
      <h1 className='font-bold text-3xl sm:text-5xl text-purple-500'>Python Blog</h1>
        <h2 className='font-bold text-3xl sm:text-5xl text-purple-500'>How are you ? I'm Fine</h2>
        <h3 className='font-bold text-3xl sm:text-5xl text-purple-500'>Just looking like a wow</h3>
        <h2 className='font-bold text-3xl sm:text-5xl text-purple-500'>You Send a reels & i send you reels</h2>
      </div>

      <div className='mx-2 mb-4 m-4 sm:mx-24 md:mx-32 lg:mx-56 mt-20'>
        <h1 className='font-bold text-2xl sm:text-4xl'>About Python</h1>
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

export default BlogPython
