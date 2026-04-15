import axios from 'axios'
import { useState } from 'react'

function App() {
  const [data, setdata] = useState([]) //data is the state that contains the data from the response and setdata is the function that is used to update the data state


  // Api caaling ka liya two methods h no one is fetch method and the other is axios method but here we will use fetch method to call the api and get the response
  async function api() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users') //fetch is used to call the api and get the response
    console.log(response) //response is the object that contains the response from the api

    const data = await response.json()  //response.json() is used to convert the response into json format and get the data from the response

    console.log(data)  //data is the object that contains the data from the response

  }

  // This is the other axios method to call the api and get the response but here we will use fetch method to call the api and get the response

  async function getdata() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users') //axios is used to call the api and get the response
    console.log(response) //response is the object that contains the response from the api

  }


  async function call() {
    const response = await axios.get("https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U"
    )
    setdata(response.data) //response.data is the object that contains the data from the response and setdata is the function that is used to update the data state
    console.log(response) //response.data is the object that contains the data from the response
  }
  return (
    <div>
      <button onClick={call}>Get data</button>

      {Array.isArray(data) && data.map(function (elem , indx){
        return <h2>Hello , {indx}</h2>
      })}

    </div>
  )
}

export default App