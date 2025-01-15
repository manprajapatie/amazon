import React from 'react'
import './HomeDetails.css'

const HomeDetails = () => {
  return (
    <div className='HomeDetails'>

      {/* ------------ first Long Card ------------*/}

      <div className='homeDetailsLongCard'>
        <div className='homeDetailLongCardTitle'>Today's Deals</div>
        <div className="homeDetailLongCardItems">

          <div className="scrollDiv">
            
            <div className='homeDetailLongCardItem'>
              <img className="homeDetailLongCardItemimg" src="https://m.media-amazon.com/images/I/51IFiSD+kCL._AC_SY200_.jpg" alt="" />
              <div className='homeDetailLongCardItemImgDetail'>

                <div className='homeDetailLongCardItemTopDetail'>
                  <div className='homeDetailpercentageoff'>
                    Up to 20% off
                  </div>

                  <div className='limitedTimeDealhomeDetail'>
                    Limited Time Deal
                  </div>
                </div>

                <div className="bottomHomeDetail">
                  iQ00 Z9 | Starting @17999 includ...
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>


    {/*------------ Second Long Card ------------*/}
      <div className='homeDetailsLongCard'>
        <div className='homeDetailLongCardTitle'>Today's Offer</div>
        <div className="homeDetailLongCardItems">

          <div className="scrollDiv">
            
            <div className='homeDetailLongCardItem'>
              <img className="homeDetailLongCardItemimg" src="https://m.media-amazon.com/images/I/51IFiSD+kCL._AC_SY200_.jpg" alt="" />
              <div className='homeDetailLongCardItemImgDetail'>

                <div className='homeDetailLongCardItemTopDetail'>
                  <div className='homeDetailpercentageoff'>
                    Up to 20% off
                  </div>

                  <div className='limitedTimeDealhomeDetail'>
                    Limited Time Deal
                  </div>
                </div>

                <div className="bottomHomeDetail">
                  iQ00 Z9 | Starting @17999 includ...
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>

    </div>
  )
}

export default HomeDetails
