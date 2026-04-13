import React from 'react'
import Herotext from './Herotext'
import Arrow from './Arrow'

function Leftcontent() {
    return (
        <div className='h-screen flex-1 p-8 flex flex-col'>

           <Herotext/>
           <Arrow/>

        </div>
    )
}

export default Leftcontent