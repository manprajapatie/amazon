import React from "react";
import './Navbarbelt.css';
import amazonLogo from '../../../assets/amazon.png'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

function Navbarbelt() {
  return (
    <div className="navbarBelt">


    {/*------------ left side nav ------------*/}
      <div className="leftNavBelt">
        
        <div className="leftNavBeltLogo">

            <img  className="amazonLogoNavbar"
                  src={amazonLogo}
                  alt="amazonLogo" />

            <span className="Navbar_inLogo">.in</span>

        </div>

        {/*------------ left side nav LOCATION ------------*/}
          <div className="navbarBeltLocation">
              <div className="navbarBeltLocationImg">

                <LocationOnOutlinedIcon
                  className="navbarBeltLocationImgIcon"
                  sx={{ fontSize : "22px" }}
                  />
              </div>

             <div className="navbarBeltLocationPlace">
              <div className="navbarBeltLocationTop">Delivering to pune</div>
              <div className="navbarBeltLocationBottom">Update Location</div>
          </div>


          </div>
        

      </div>
        {/*------------ Search Box ------------*/}
        
      <div className="navbarBeltSearchBox">

          <div className="navbarBeltSearchDiv">
            <div className="navbarBeltSearchBoxAll">
            
              <div className="navbarBeltSearchBoxAllText">All</div>
              <ArrowDropDownOutlinedIcon sx={{fontSize : "20px"}}/>

          </div>

                <input
                type="text"
                className="navbarBeltInputSearchBox"
                placeholder="Search Amazon.in"/>

        {/*------------ Search Icon ------------*/}

                  <div className="searchIconNavbarBelt">
                    
                    <SearchOutlinedIcon
                    sx = {{fontSize: "26px"}}
                    className="searchIconNavbarBeltIcon"/>

                  </div>

            </div>

      </div>


      <div className="rightSideNavbarBelt"></div>
    </div>
  );
}

export default Navbarbelt;