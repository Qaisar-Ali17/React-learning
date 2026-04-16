import React, { useContext } from 'react'
import Navbar2 from './Navbar2'
import { ThemeDataContext } from '../context/themeDataContext'

function Navbar(props) {
  
    const data = useContext(ThemeDataContext)
    console.log(data)
  return (
    <div className='nav'>
      <h1>{data}</h1>
      {props.children}
      <Navbar2 theme={props.theme} />
    </div>
  )
}

export default Navbar