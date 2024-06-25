import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header'
import Home from './components/Home';
import Node from './components/Node';
import Reactjs from './components/Reactjs';
import Python from './components/Python';
import DigitalMar from './components/DigitalMar';
import Footer from './components/Footer'
import Submit from './components/Submit';
import Course from './components/Course';
import OurPlace from './components/OurPlace';
import ContactUs from './components/ContactUs';
import Book from './components/Book';
import AboutUs from './components/AboutUs';
import Blogs from './components/Blogs';

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
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default PublicRoute
