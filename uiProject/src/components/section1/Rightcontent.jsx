import React from 'react'
import 'remixicon/fonts/remixicon.css'
import Rightcardcontent from './RightcradContent'
import Rightcard from './Rightcard'

function Rightcontent(props) {
  console.log(props.users)
  return (
    <div id='right' className='h-full flex flex-nowrap gap-2 p-6 w-2/3'>
      {props.users.map(function(elem){
        return <Rightcard user={elem}/>
      })}
    </div>
  )
}

export default Rightcontent