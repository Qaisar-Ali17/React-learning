import React from 'react'

function Card(props) {  /* this is props component jisme hum props ko receive kar rahe hain aur usko use kar rahe hain */

    console.log(props)
  return (
    <div>
      <div className='parent'>

        <div className='card'>
          <img src="https://images.unsplash.com/photo-1774286111329-3bdddc7d730e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          <h1>{props.user}, {props.age}</h1>
          {/*  whaya pa hum na proprs ki values ko app jsx ma di thi is ko import kiya h and is ko use kiya h is sa card ki values change ho rahi h jese ke user aur age ki values change ho rahi hain jese ke Qaisar Ali, 20 aur Ahmad Ali, 22 */}
          <p>Software Engineer</p>
          <button>View Profile</button>
        </div>
      </div></div>
  )
}

export default Card