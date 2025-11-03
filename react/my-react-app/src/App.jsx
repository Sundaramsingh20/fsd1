import { useState } from 'react'  //rafc
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Car from './vehicles.jsx'; 
import Fruits from './Fruits.jsx';
import Greeting from './Greetings.jsx';


function App() {
  const [count, setCount] = useState(0)

  return (
      <> 
       <div>
        <h1>React Tutorial</h1>
        <img src="https://cloudmatetechnologies.com/wp-content/uploads/2024/06/react.js.png" alt="logo" />
       </div>
        <Car/>
       <Fruits/>
       <Greeting/>
        </>
      )
}

export default App
