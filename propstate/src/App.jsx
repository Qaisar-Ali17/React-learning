import React from 'react'
import { useState } from 'react'
import project from './project'

 function App() {

  const [a, seta] = useState(20)
  const [username, setusername] = useState('Ali')
  const [user, setuser] = useState({usernaam:"Qaisar", age:20})
  function changeval(){
    console.log(a)
    seta (30)
    setusername("Qaisar ALi")

    console.log(a)
  }

  return (
    <div>
      <h1>The value of A is {a} <br />   <br /> The value of the user {username}  <br />        <br />  <br />   The user details are {user.age}</h1>  {/* <-- ONLY CHANGED setuser.age() to user.age */}
      <button onClick={changeval}>Clicked</button>
    </div>
  )
 }

export default App

// project