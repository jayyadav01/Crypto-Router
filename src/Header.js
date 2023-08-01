import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
      <div className='header'>
            <h1><Link to='/'>Site Name</Link></h1>
            <ul>
                <li><Link to='/Top-10'>Top 10</Link></li>
                <li><Link to='/Contact'>Contact</Link></li>
            </ul>
      </div>
    </>
  )
}

export default Header
