import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import HomeScreen from './Screen/HomeScreen/HomeScreen'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='App'>
        <Navbar/>
        <HomeScreen/>
     </div>
    </>
  )
}

export default App
