import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
  
      <div>
          <div class='nav'>
        <h1>Sheriyan Coding School</h1>


        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
       
      </div>
    </div>

  )
}

export default Navbar