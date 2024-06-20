import React, { useEffect } from 'react'
import Frequency from './Frequency'
import Crou from './Crou'
import FirstCom from './FirstCom'
import SecondCom from './SecondCom'
import Explore from './Course'
import OurPlace from './OurPlace'
import WhatOur from './WhatOur'
import Banner from './Banner'
import { useLocation } from 'react-router-dom'
// import Crouu from './Crouu'
// import Why from './Why'

const Home = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div>
      <FirstCom/>
     <SecondCom/>
     <OurPlace/>
     <Explore/>
     <WhatOur/>
     {/* <Why/> */}
     <Banner/>
     <Frequency/>
     <Crou/>
     
     {/* <Crouu/> */}
    </div>
  )
}

export default Home
