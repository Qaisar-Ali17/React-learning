import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/card'

function App() {   /* props kia hota h props ka maltab hota h properties yani ke hum apne component ko data pass kr skty hain jese ke humne card component ko user aur age pass kiya hai jese ke <Card user="Qaisar Ali" age={20} /> isme user aur age props hain jese ke humne card component me props ko receive kiya hai function card(props) { console.log(props) is se hume console me props ka data milega yani ke {user: "Qaisar Ali", age: 20} aur humne card component me props.user aur props.age ko use kiya hai jese ke <h1>{props.user}, {props.age}</h1> is se hume h1 tag me user aur age ka data show hoga yani ke Qaisar Ali, 20 */  
  return (
    <>
      <Card user="Qaisar Ali" age={20} />
      <Card user="Ahmad Ali" age={22} />
    </>
  )
}

export default App