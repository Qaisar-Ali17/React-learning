import React from 'react'
import { ThemeDataContext } from './themeDataContext'


function Themecontext(props) {
  return (
    <div>
      <ThemeDataContext.Provider value='Qaisar'>
        {props.children}
      </ThemeDataContext.Provider>
    </div>
  )
}

export default Themecontext