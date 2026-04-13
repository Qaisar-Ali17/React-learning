import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  function btnclicked(){
    console.log("Button is clicked")
  }

  function inputchanging(){
    console.log("User is Typing....")
  }

  function inputchanging2(val){
    console.log(val)
  }

  return (
    <>
     <h1>Hello Guys</h1>
     <button onClick={btnclicked}>Clicked Here</button> <br />

     <input onChange={inputchanging} type="text" placeholder='Enter Your Name' />
     <input onChange={function(elem){
      inputchanging2(elem.target.value)
     }}  type="text"  placeholder='Enter Your Address' />
    </>
  )
}

export default App
