import React from 'react'
import { useParams } from 'react-router-dom'

function CourseDetails() {

    const params= useParams() // hum use params hook ka use kar ke url se id ko access kar sakte hai taka pata chala user na url ma kia enter kia h 
    console.log(params.id)     
  return (
    <div>
        <h1> {params.id} Course Details Page</h1>
    </div>
  )
}

export default CourseDetails