import React from 'react'
import {Link, Outlet} from 'react-router-dom'
function Product() {
  return (
    <div>
      <h1>Product page</h1>

      <div className='flex justify-center py-4 gap-8 text-2xl'>
        <Link to='/product/men'>Men</Link>
      <Link to='/product/women'>Women</Link>
      </div>

      <Outlet/>
      
    </div>
  )
}

export default Product