import React from 'react'

function App() {
  return (
    <div className='h-screen bg-black text-white'>
      <form className='flex justify-between items-start p-10 ' >
        <div className='flex flex-col w-1/2 items-start gap-4'>
          <input

            className='px-5 py-2 w-full rounded-2 h-20 font-medium border-2 outline-none'
            type="text" placeholder='Enter Notes Details' />
          <input className='px-5 py-2 flex items-start flex-row w-full h-35 font-medium rounded-2 border-2 outline-none' type="text" placeholder='Write Board Notes' /> <br />

          <button className='px-5 py-2 w-full bg-blue-500 text-black rounded-2 border-2 outline-none'>Add Note</button>
        </div>
        <img className='h-60' src="https://png.pngtree.com/png-vector/20221128/ourmid/pngtree-cream-sticky-notes-paper-illustration-with-clip-white-transparent-background-png-image_6484210.png" alt="" />

      </form>
    </div>

  )
}

export default App