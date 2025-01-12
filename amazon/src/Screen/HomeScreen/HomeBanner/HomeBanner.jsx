import React from "react";
import './HomeBanner.css'
import homebanneritemproduct from '../../../HomeProduct.json'

function HomeBanner() {
    return (
        <div className="homeBanner">
            <img className="homeBannerImg"
                src="https://m.media-amazon.com/images/I/61zAjw4bqPL._SX3000_.jpg"
                alt="amazon Image" />

            <div className="grayBackgroundHomeBanner">
            </div>

            {/* ---------- Home Banner Item  --------- */}
            <div className="homeBanneritemDiv">

                {
                    homebanneritemproduct.product.map((item, ind) => {
                        return (
                            <div className="homeBannerItemDivCard">
                                <div className="homeBannerItemDivCardTitle">
                                    {item.itemTitle}
                                </div>

                                <div className="imgHomeBannerItemDivCard">
                                    {
                                        item.imgs.map((it, ind) => {
                                            return (
                                                <div className="imgBannerHomeDiv" >
                                                    <img className="imgBannerHomeDivImg"
                                                        src={it}/>
                                                    <div className="imgBannerImgName"> kitchen item </div>
                                                </div> 
                                            )
                                        })
                                    }


                                </div>

                                <div className="seeMoreHomeBanner">
                                    See More
                                </div>

                            </div>
                        )
                    }
                    )
                }


            </div>


        </div>
    )
}

export default HomeBanner;