import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header'
import Training from './components/Training';
import Node from './components/Node';
import Reactjs from './components/Reactjs';
import Python from './components/Python';
import DigitalMar from './components/DigitalMar';
import Footer from './components/Footer'
import Submit from './components/Submit';

function App() {

  return (
    <>
     

     <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/training" element={<Training />} />
        <Route path="/submit" element={<Submit />} />
        <Route path="/reactjs" element={<Reactjs />} />
        <Route path="/node" element={<Node />} />
        <Route path="/python" element={<Python />} />
        <Route path="/digitalMar" element={<DigitalMar />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
