import React from "react";
import './HomeBanner.css'

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
                <div className="homeBannerItemDivCard">
                    <div className="homeBannerItemDivCardTitle">
                         Title
                    </div>

                    <div className="imgHomeBannerItemDivCard">

                        <div className="imgBannerHomeDiv" >
                            <img className = "imgBannerHomeDivImg"
                                 src="https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2024/HomeLifestyle/HomeSummerFlip/Homepage/QuadCards/Home_Flip_Summer_2024_315_HP_NewArrivals_QuadCard_D_01_1x._SY116_CB555960040_.jpg"/>
                            <div className="imgBannerImgName">
                                    Ckitchen item
                            </div>
                        </div>

                        <div className="imgBannerHomeDiv" >
                            <img className = "imgBannerHomeDivImg"
                                 src="https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2024/HomeLifestyle/HomeSummerFlip/Homepage/QuadCards/Home_Flip_Summer_2024_316_HP_NewArrivals_QuadCard_D_02_1x._SY116_CB555960040_.jpg"/>
                            <div className="imgBannerImgName">
                                    Ckitchen item
                            </div>
                        </div>

                        <div className="imgBannerHomeDiv" >
                            <img className = "imgBannerHomeDivImg"
                                 src="https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2024/HomeLifestyle/HomeSummerFlip/Homepage/QuadCards/Home_Flip_Summer_2024_317_HP_NewArrivals_QuadCard_D_03_1x._SY116_CB555960040_.jpg"/>
                            <div className="imgBannerImgName">
                                    Ckitchen ite
                            </div>
                        </div>

                        <div className="imgBannerHomeDiv" >
                            <img className = "imgBannerHomeDivImg"
                                 src="https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2024/HomeLifestyle/HomeSummerFlip/Homepage/QuadCards/Home_Flip_Summer_2024_317_HP_NewArrivals_QuadCard_D_03_1x._SY116_CB555960040_.jpg"/>
                            <div className="imgBannerImgName">
                                    Ckitchen ite
                            </div>
                        </div>

                      



                    </div>

                    <div className="seeMoreHomeBanner">
                        See More 
                    </div>

                </div>
            </div>


        </div>
    )
}

export default HomeBanner;