import React from 'react'
import Section1 from './components/section1/Section1'
import Section2 from './components/section2/Section2'
function App() {

  const user= [
    {
      img:"https://images.unsplash.com/photo-1635766854982-fc151c6e9278?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", intro:"", tag:"Satisfied"
    },
    {
      img:"https://images.unsplash.com/photo-1521898284481-a5ec348cb555?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", intro:"", tag:"professional"
    },
    {
      img:"https://images.unsplash.com/photo-1498758536662-35b82cd15e29?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", intro:"", tag:"Unserved"
    }
  ]
  return (
    <div>
      <Section1  users={user}/>
      <Section2/>
    </div>
  )
}

export default App