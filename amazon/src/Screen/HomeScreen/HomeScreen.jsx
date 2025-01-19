import React from 'react'
import './HomeScreen.css'
import HomeBanner from './HomeBanner/HomeBanner'
import HomeDetails from './HomeDetails/HomeDetails'

function HomeScreen() {
  return (
    <div className='homeScreen'>
      <h2>Main Branch</h2>
        <HomeBanner/>
        <HomeDetails/>
      
    </div>
  )
}

export default HomeScreen
