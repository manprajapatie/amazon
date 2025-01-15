import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import HomeScreen from './Screen/HomeScreen/HomeScreen'
import Footer from './Components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='App'>
        <Navbar/>
        <HomeScreen/>
        <Footer/>
     </div>
    </>
  )
}

export default App
