import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Admin from './AdminCom/Admin';
import Dashboard from './AdminCom/Dashboard';
import Placements from './AdminCom/Placements';
import Review from './AdminCom/Review';
import Main from './AdminCom/Main';

const AdminRoute = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route path='/admin' element={<Admin><Main /></Admin>}></Route>
      <Route path='/dashboard' element={<Admin><Dashboard /></Admin>}></Route>
      <Route path='/placements' element={<Admin><Placements /></Admin>}></Route>
      <Route path='/review' element={<Admin><Review /></Admin>}></Route>
      {/* <Route path='/other' element={<Admin><Other /></Admin>}></Route> */}

      </Routes>
    </BrowserRouter>
    </>
  )
}

export default AdminRoute
