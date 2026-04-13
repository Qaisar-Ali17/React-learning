import React from 'react'
import Leftcontent from './Leftcontent'
import Rightcontent from './Rightcontent'

function Page1(props ) {
  return (
    <div className='py-10 flex gap-10 h-[90vh] items-center '>
        <Leftcontent/>
        <Rightcontent users={props.users}/>

    </div>
  )
}

export default Page1