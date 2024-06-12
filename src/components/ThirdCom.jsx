import React from 'react'
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import mark from "../assets/marketing-logo.svg"
import python from "../assets/python-logo.svg"
const ThirdCom = () => {
  return (
    <div className='grid lg:grid-cols-2 sm:grid-cols-1 mt-14 sm:mx-22 md:mx-24 lg:mx-56 p-3 gap-10 '>
        <div className='border-inherit border rounded-md  p-5 space-y-4 h-fit'>
            <div className='flex gap-2 justify-start items-center'>
            <FaNodeJs className='text-green-700 text-2xl'/>
            <h1 className='font-bold text-lg'> Node.js Training & Internship</h1>
            </div>
            <div className='flex flex-row gap-3'>
            <button className='border-inherit border rounded-md p-1 px-2 gap-3'>12 Weeks</button>
            <button className='border-inherit border rounded-md p-1 px-2 gap-3'>6 Module</button>
            <button className='border-inherit border rounded-md p-1 px-2 gap-3'>Live Projects</button>
            </div>
            <div className='space-y-2'>
                <p>Embark on a transformative journey in Node.js with us, your premier destination for Node.js internship and training programs in Indore. If you are looking to delve deeper into Node.js, Join our comprehensive Node.js training in Indore, where you'll receive in-depth knowledge and hands-on training in this powerful JavaScript runtime. </p>
                <ul className=''>
                    <li className='flex gap-2 justify-start items-center'> <IoMdCheckmarkCircleOutline/>Database designing</li>
                    <li className='flex gap-2 justify-start items-center'><IoMdCheckmarkCircleOutline />Modular programming & NPM</li>
                    <li className='flex gap-2 justify-start items-center'><IoMdCheckmarkCircleOutline />MVC</li>
                    <li className='flex gap-2 justify-start items-center'><IoMdCheckmarkCircleOutline />Build reusable modules</li>
                </ul>
                <button className=' text-white font-bold rounded bg-red-600 w-full py-1 ' >Know More</button>
            </div>
        </div>
        <div className='border-inherit border rounded-md  p-5 space-y-4 h-fit'>
            <div className='flex gap-2 justify-start items-center'>
            <FaReact  className='text-blue-500 text-2xl'/>
                <h1 className='font-bold text-lg'>React.js Training & Internship</h1>
            </div>
            <div className='flex flex-row gap-3'>
            <button className='border-inherit border rounded-md p-1 px-2 gap-3'>12 Weeks</button>
            <button className='border-inherit border rounded-md p-1 px-2 gap-3'>6 Module</button>
            <button className='border-inherit border rounded-md p-1 px-2 gap-3'>Live Projects</button>
            </div>
            <div  className='space-y-2'>
                <p>Elevate your React JS skills with Shanti Infosoft, the ultimate destination for React JS training and internship programs in Indore. Immerse yourself in real-world projects during our React JS internship in Indore, gaining practical insights and honing your skills under the guidance of industry experts. If you are ready to validate your expertise, Enroll in our React JS certification course in Indore, where you'll receive a recognized certification, showcasing your proficiency in React JS development.</p>
                <ul>
                    <li className='flex gap-2 justify-start items-center'> <IoMdCheckmarkCircleOutline/>Build Single Apps</li>
                    <li className='flex gap-2 justify-start items-center'> <IoMdCheckmarkCircleOutline/>Interactive forms Setup and use the create react app</li>
                    <li className='flex gap-2 justify-start items-center'><IoMdCheckmarkCircleOutline/>React Testing Library</li>
                    <li className='flex gap-2 justify-start items-center'> <IoMdCheckmarkCircleOutline/>Code Splitting</li>
                </ul>
                <button className=' text-white font-bold  bg-red-600  w-full py-1 rounded' >Know More</button>
            </div>
        </div>
        <div className='border-inherit border rounded-md  p-5 space-y-4 h-fit lg:relative -top-16'>
            <div className='flex gap-2 justify-start items-center'>
            <img className='h-6'src={python}></img>
                <h1 className='font-bold text-lg'>Python Training & Internship</h1>
            </div>
            <div className='flex flex-row gap-3'>
            <button className='border-inherit border rounded-md p-1 px-2 gap-3'>12 Weeks</button>
            <button className='border-inherit border rounded-md p-1 px-2 gap-3'>6 Module</button>
            <button className='border-inherit border rounded-md p-1 px-2 gap-3'>Live Projects</button>
            </div>
            <div className='space-y-2'>
                <p  >Unlock the world of Python at Shanti Infosoft LLP, your go-to destination for Python training, internships, and certification courses in Indore. Our Python training program is meticulously designed to provide you with a solid foundation in Python programming. Immerse yourself in real-world projects during our Python internship in Indore, where you can apply your knowledge and acquire hands-on experience</p>
                <ul>
                    <li className='flex gap-2 justify-start items-center'><IoMdCheckmarkCircleOutline/>Python Fundamentals</li>
                    <li className='flex gap-2 justify-start items-center'><IoMdCheckmarkCircleOutline/>Working With Database</li>
                    <li className='flex gap-2 justify-start items-center'><IoMdCheckmarkCircleOutline/>Web Scraping</li>
                    <li className='flex gap-2 justify-start items-center'><IoMdCheckmarkCircleOutline/>Web App Development With Django</li>
                </ul>
                <button className=' text-white font-bold  bg-red-600  w-full py-1 rounded' >Know More</button>
            </div>
        </div>
        <div className='border-inherit border rounded-md  p-5 space-y-4 h-fit relative -top-4'>
            <div className='flex gap-2 justify-start items-center'>
                <img  className='h-7'src={mark} alt='logo'></img>
                <h1 className='font-bold text-lg'>Digital Marketing Training & Internship</h1>
            </div>
            <div className='flex flex-row gap-3'>
            <button className='border-inherit border rounded-md p-1 px-2 gap-3'>12 Weeks</button>
            <button className='border-inherit border rounded-md p-1 px-2 gap-3'>6 Module</button>
            <button className='border-inherit border rounded-md p-1 px-2 gap-3'>Live Projects</button>
            </div>
            <div className='space-y-2'>
                <p  >Embark on a transformative journey in Node.js with us, your premier destination for Node.js internship and training programs in Indore. If you are looking to delve deeper into Node.js, Join our comprehensive Node.js training in Indore, where you'll receive in-depth knowledge and hands-on training in this powerful JavaScript runtime. </p>
                <ul>
                    <li className='flex gap-2 justify-start items-center'><IoMdCheckmarkCircleOutline/>Search Engine Optimization</li>
                    <li className='flex gap-2 justify-start items-center'><IoMdCheckmarkCircleOutline/>Social Media Marketing</li>
                    <li className='flex gap-2 justify-start items-center'><IoMdCheckmarkCircleOutline/>Pay Per Click</li>
                    <li className='flex gap-2 justify-start items-center'><IoMdCheckmarkCircleOutline/>App Store Optimization</li>
                </ul>
                <button className=' text-white font-bold  bg-red-600  w-full py-1 rounded' >Know More</button>
            </div>
        </div>
    </div>
  )
}
export default ThirdCom