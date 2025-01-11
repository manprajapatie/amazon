import React from 'react'
import './NavbarBanner.css'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

function NavbarBanner() {

  const option = [
      {name: "Fresh"},
      {name: "Amazon miniT"},
      {name: "Sell"},
      {name: "Best Sellers"},
      {name: "Today's Deals"},
      {name: "Mobiles"},
      {name: "Electronics"},
      {name: "Prime"},
      {name: "Customer Service"},
      {name: "Fashion"},
      {name: "Home & Kitchen"}
      
    ]

  return (
  <div className="NavbarBanner">

    {/*--------------- Left Side Navbar ---------------*/}
    <div className="navbarBannerOptionsLeft">

        <div className="optionNavbarBanner">
          <MenuOutlinedIcon sx = {{fontSize : "24px"}}/>
          <div className='allOptionNavbarBanner'> All </div>
        </div>
      {
        option.map((item, ind)=>{
          return(
           <div className="optionNavbarBanner" key={ind}>
             <div className='allOptionNavbarBanner'>
                {item.name}
             </div>
           </div>
         )
        })
      }
        
      
        
      
    </div>

    <div className="navbarBannerRightside">
      {/* <img src="" alt="" /> */}
      <h2>AmazonPrime-Section</h2>
    </div>
  </div>

  )
}

export default NavbarBanner
