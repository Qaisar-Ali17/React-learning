import React from 'react'

function App() {

  localStorage.setItem('user', 'Qaisar')  // setItem() method is used to add key and value to the localStorage
  localStorage.clear()   // clear() method is used to clear all the key and value from the localStorage
  sessionStorage.setItem('user', 'Qaisar')  // setItem() method is used to add key and value to the sessionStorage
  sessionStorage.clear()   // clear() method is used to clear all the key and value from the sessionStorage

  localStorage.setItem('USER', 'QAISAR')


  const user= localStorage.getItem('USER')  // getItem() method is used to get the value of the key from the localStorage
   console.log(user)

   localStorage.removeItem('USER')

   const user1={
    username:'Qaisar Ali',
    age: 20,
    city:"Lahore",
    email:"qaisar@example.com"
   }

   localStorage.setItem('user',JSON.stringify(user1))  // setItem() method is used to add key and value to the localStorage
   console.log(user1)    // JSON.stringify() method is used to convert the JavaScript object into a JSON string

    const user2= localStorage.getItem('user') // getItem() method is used to get the value of the key from the localStorage
    console.log(typeof(user2))
  return (
    <div>App</div>
  )
}

export default App