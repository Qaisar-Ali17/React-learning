import React from 'react'
import axios from 'axios'

function App() {

const getdata=async function(){
  
  const response= await axios.get('https://dummyjson.com/users?limit=20')
  console.log(response.data.users) // ✅ correct data
}

  return (
    <div className='bg-black h-screen text-white'>

      <button
      
      onClick={getdata}
      className='px-5 bg-green-400 mb-3 active:scale-90 py-2 text-white rounded'>
        Get Data
      </button>
    </div>
  )
}

export default App