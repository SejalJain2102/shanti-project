import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header'
import Home from './components/Home/Home';
import Node from './components/Course/Node';
import Reactjs from './components/Course/Reactjs';
import Python from './components/Course/Python';
import DigitalMar from './components/Course/DigitalMar';
import Footer from './components/Footer'
import Submit from './components/Submit';
import Course from './components/Course/Course';
import OurPlace from './components/OurPlace';
import ContactUs from './components/ContactUs';
import Book from './components/Book';
import AboutUs from './components/AboutUs/AboutUs';
import Blogs from './components/Blogs/Blogs';
import BlogOffline from './components/Blogs/BlogOffline';
import BlogReact from './components/Blogs/BlogReact';
import BlogNode from './components/Blogs/BlogNode';
import BlogPython from './components/Blogs/BlogPython';
import BlogDigital from './components/Blogs/BlogDigital';

const PublicRoute = () => {
  return (
    <>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/course" element={<Course />} />
        <Route path="/ourPlace" element={<OurPlace />} />
        <Route path="/contactUs" element={<ContactUs />} />

        <Route path="/book" element={<Book />} />
        <Route path="/submit" element={<Submit />} />

        <Route path="/course/reactjs" element={<Reactjs />} />
        <Route path="/course/node" element={<Node />} />
        <Route path="/course/python" element={<Python />} />
        <Route path="/course/digitalMar" element={<DigitalMar />} />
        
        <Route path="/blogs/offline-classes" element={<BlogOffline />} />
        <Route path="/blogs/react-js" element={<BlogReact />} />
        <Route path="/blogs/node-js" element={<BlogNode />} />
        <Route path="/blogs/python" element={<BlogPython />} />
        <Route path="/blogs/digital-marketing" element={<BlogDigital />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default PublicRoute
