import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <>
      <ul>
        <Link to="/dashboard"><li>Dashboard</li></Link>
        <Link to="/placements"><li>Placements</li></Link>
        <Link to="/review"><li>Review</li></Link>
        <Link to="/other"><li>Other</li></Link>
      </ul>
    </>
  )
}

export default Sidebar
