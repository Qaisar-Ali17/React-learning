import React, { useState } from 'react'

function App() {

  const [title, setTitle] = useState('')
  const [phone, setPhone] = useState('')

  function formhandle(e){
    // e.preventDefault()      # ya line form submit hone ke baad page reload hone rokta hai
    e.preventDefault() 
    console.log("Form submitted", title, phone)
    setTitle('')
    setPhone('')
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        formhandle(e)
      }}>
        <input value={title} onChange={(e)=>{
          setTitle(e.target.value)
        }} type="text" placeholder='Enter Your Name' />
        <input value={phone} onChange={(e)=>{
          setPhone(e.target.value)
        }} type="text"  placeholder='Enter Your Phone Number' />
        <button >Submitt</button>
      </form>
    </div>
  )
}

export default App