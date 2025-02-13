import React, { useEffect } from 'react'
import Frequency from './Frequency'
import Crou from './Crou'
import FirstCom from './FirstCom'
import SecondCom from './SecondCom'
import OurPlace from '../OurPlace'
import WhatOur from './WhatOur'
import Banner from './Banner'
import { useLocation } from 'react-router-dom'
import OverviewC from './OverviewC'
import OurHiring from './OurHiring'


const Home = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div className=''>
      <FirstCom/>
     <SecondCom/>
     <OurPlace/>
     <OverviewC/>
     <WhatOur/>
     <OurHiring/>
     <Banner/>
     <Crou/>
     <Frequency/>
     
    </div>
  )
}

export default Home
