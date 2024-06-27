import React, { useEffect } from 'react'
import AboutCom from './AboutCom'
import AboutBanner from './AboutBanner'
import { useLocation } from 'react-router-dom';
import VipinSir from './VipinSir';
import OurVision from './OurVision';

const AboutUs = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div>
      <AboutBanner/>
      <AboutCom/>
      <VipinSir/>
      <OurVision/>
    </div>
  )
}

export default AboutUs
