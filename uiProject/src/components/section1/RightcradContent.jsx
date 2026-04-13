import React from 'react'

function Rightcard() {
  return (
    <div className='h-full  w-full relative overflow-hidden object-cover rounded-4xl'>
        
        <img 
          className="w-full h-full shrink-0 object-cover"
          src="https://images.unsplash.com/photo-1635766854982-fc151c6e9278?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="" 
        /> 

        <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between bg-black/10'>
            <h2 className='bg-white text-2xl font-bold rounded-full h-15 w-15 flex justify-center items-center'>1</h2>
            <img src="" alt="" />

            <div>
               <p className='text-lg leading-normal text-white mb-10 drop-shadow-md'>
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, aspernatur provident esse ipsum sapiente corporis.
               </p>
            </div>

            <div className='flex justify-between'>
                <button className='bg-blue-500 text-white font-semibold px-7 py-3 rounded-full text-lg'>
                  Satisfied
                </button>
            </div>
        </div>
    </div>
    
  )
}

export default Rightcard