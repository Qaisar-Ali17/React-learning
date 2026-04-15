import React, { useEffect, useState } from 'react'

function App() {
  const [Num, setNum] = useState(0)

  useEffect(function () {   // useeeft hook ko hum is tara likhta h and jo array h aghar aisa ni likha to useefct har br chala ga and aghar empty array da ga to sirf ek br chala ga and hum kaisi variables ka reference ko bi da sakta h is sa sirf is varibale ki value change ho gi 
    console.log("use Effect is running.....")
  }, [])  // ya wali array 

  
  return (

    <div>
      
      <button onClick={function(){
      setNum(Num+1)

    }}>

      Click</button>
      {Num}</div>
  )
}

export default App