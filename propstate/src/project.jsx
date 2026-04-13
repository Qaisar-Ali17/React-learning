import React from 'react'
import { useState } from 'react'

function project() {
    const [Num, setNum] = useState(0)

    function increaseNum(){
        console.log("The value of the Num is increasing...", Num)
        setNum(Num+1)
        console.log(Num)
    }

    function decreaseNum(){
        console.log("The value of the Num is Decreasing...", Num)
        setNum(Num-1)
        console.log(Num)
    }

    function jump5(){
        setNum(Num+5)
    }

  return (
    <div>
        <h1>{Num}</h1>
        <button onClick={increaseNum} id='btn'>
            increase
        </button>

       
        <button  id='btn1' onClick={jump5}>Increase By 5</button>
         <button onClick={decreaseNum} id='btn'>
            Decrease
        </button >
    </div>
  )
}

export default project