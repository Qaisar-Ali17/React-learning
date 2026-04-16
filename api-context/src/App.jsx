import React, { useState } from 'react'
import Navbar from './components/Navbar'

function App() {
  const [theme] = useState('light')
  return (
    <div>
      Api 
      
      <Navbar theme={theme}>
        <h1>this is Navbar</h1>
        <h2>This is Nvarbar too</h2>
      </Navbar>
    </div>
  )
}

export default App