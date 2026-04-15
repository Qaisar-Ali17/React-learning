import React from 'react'
import { useNavigate } from 'react-router-dom'

function About() {

  let navigate= useNavigate() // use navigate hook ka use kar ke hum navigate function ko access kar sakte hai jiska use kar ke hum programmatically navigate kar sakte hai yani code ke through navigate kar sakte hai

  // const btnclicked=()=>{    // firt method to do that
  //   navigate('/') // jab hum navigate function ko call karte hai to hum usme url pass karte hai jaha hum navigate karna chahte hai is case ma home page yani '/'
  // }
  return (
    <div>
      <h1>About page</h1>
      <button onClick={()=>{
        navigate('/')
      }} className='bg-emerald-700 m-4 px-5 py-2 rounded cursor-pointer active:scale-95'>Return to Home</button>
      <button onClick={()=>{
        window.history.back()
      }} className='bg-emerald-700 m-4 px-5 py-2 rounded cursor-pointer active:scale-95'>Back</button>
    </div>
  )
}

export default About