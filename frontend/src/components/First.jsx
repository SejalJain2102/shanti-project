import React from 'react'
import FirstCom from './FirstCom'
import Form from './Form'

const First = () => {
  return (
    <div style={{backgroundImage:"url('https://shantiinfosoft.com/images/training/banner-bg.svg')", backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center"}} className='sm:flex m-14  p-3 gap-10 '>
      <div className='sm:mx-22 md:mx-24 lg:mx-56 grid grid-cols-2 gap-28'>
      <FirstCom/>
      <Form/>
      </div>
  </div>
  )
}

export default First
