import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import HomeScreen from './Screen/HomeScreen/HomeScreen'
import Footer from './Components/Footer/Footer'
import { Routes, Route } from 'react-router-dom'
import Products from './Screen/Products/Products'
import Cart from './Screen/Cart/Cart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomeScreen/>} />
          <Route path='/Products' element={<Products/>} />
          <Route path='/Cart' element={<Cart/>} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
