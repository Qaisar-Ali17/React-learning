import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='flex py-4 px-8 items-center justify-between bg-cyan-900  '>
        <h2 className='text-2xl font-bold'>Sheriyan</h2>
        <div className='flex gap-10 '>
            <Link className='text-lg font-bold' to="/">Home</Link>
            <Link className='text-lg font-bold' to="/about">About</Link>
            <Link className='text-lg font-bold' to="/product">Products</Link>
            <Link className='text-lg font-bold'  to='/courses'>Courses</Link>
        </div>
    </div>
  )
}

export default Navbar