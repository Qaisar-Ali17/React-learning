import React from 'react'

function Rightcard({user}) {
  return (
    <div className='h-full  w-full relative overflow-hidden object-cover rounded-4xl'>
        <img src={user.img} alt={user.tag} /> 
    </div>
    
  )
}

export default Rightcard