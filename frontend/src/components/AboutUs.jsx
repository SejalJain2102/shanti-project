import React, { useEffect } from 'react'
import AboutCom from './AboutCom'
import AboutBanner from './AboutBanner'
import { useLocation } from 'react-router-dom';
import VipinSir from './VipinSir';

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
    </div>
  )
}

export default AboutUs
