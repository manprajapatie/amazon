import React from 'react'
import './Products.css'
import StarRateIcon from '@mui/icons-material/StarRate';
import StarOutlineIcon from '@mui/icons-material/StarOutline';

const Products = () => {
    return (
        <div className='productsPage'>

            {/* ---------- Top Product Navigation ----------*/}
            <div className='productTopBanner'>
                <div className='productTopBannerItems'>
                    Electronics
                </div>

                <div className='productTopBanneritemsSubMenu'>
                    Mobile & Accessories
                </div>
                <div className='productTopBanneritemsSubMenu'>
                    Laptop & Accessories
                </div>
                <div className='productTopBanneritemsSubMenu'>
                    TV & Home Entertainment
                </div>
                <div className='productTopBanneritemsSubMenu'>
                    Audio
                </div>
                <div className='productTopBanneritemsSubMenu'>
                    Cameras
                </div>
                <div className='productTopBanneritemsSubMenu'>
                    Computer Peripherals
                </div>
                <div className='productTopBanneritemsSubMenu'>
                    Smart Technology
                </div>
                <div className='productTopBanneritemsSubMenu'>
                    Musical Instrument
                </div>
                <div className='productTopBanneritemsSubMenu'>
                    Office & Stationary
                </div>

            </div>

            {/* ---------- Product Main Page ----------*/}
            <div className='productPageMain'>
                {/* ---------- Product Main Page Left ----------*/}
                <div className='productPageMainLeftCategory'>
                    <div className='productsPageMainLeftCategoryTitle'>
                        Category
                    </div>
                    <div className='productPageMainLeftCategoryContent'>
                        <div className="productsPageMainLeftCategoryContentTitle">
                            Computers & Accessories
                        </div>

                        <div className="productsPageMainLeftCategoryContentSub">
                            MacBooks
                        </div>
                        <div className="productsPageMainLeftCategoryContentSub">
                            Amazon Prime
                        </div>
                        <div className="productsPageMainLeftCategoryContentSub">
                            Average Customer Review
                        </div>

                        <div className="ratingLeftBox">
                            <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                            <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                            <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                            <StarOutlineIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                            <div className="andUp">and up</div>
                        </div>
                        <div className="ratingLeftBox">
                            <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                            <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                            <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                            <StarOutlineIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                            <div className="andUp">and up</div>
                        </div>
                        <div className="ratingLeftBox">
                            <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                            <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                            <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                            <StarOutlineIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                            <div className="andUp">and up</div>
                        </div>
                        <div className="ratingLeftBox">
                            <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                            <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                            <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                            <StarOutlineIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                            <div className="andUp">and up</div>
                        </div>

                        <div className="productsPageMainLeftCategoryContentSub">
                            Amazon Prime
                        </div>
                        <div className="productsPageMainLeftCategoryContentSub">
                            Avarage Customer Review
                        </div>
                        <div className="productsPageMainLeftCategoryContentSub">
                            Amazon Prime
                        </div>
                        <div className="productsPageMainLeftCategoryContentSub">
                            Avarage Customer Review
                        </div>
                        <div className="productsPageMainLeftCategoryContentSub">
                            Amazon Prime
                        </div>
                        <div className="productsPageMainLeftCategoryContentSub">
                            Avarage Customer Review
                        </div>
                        <div className="productsPageMainLeftCategoryContentSub">
                            Amazon Prime
                        </div>
                        <div className="productsPageMainLeftCategoryContentSub">
                            Avarage Customer Review
                        </div>


                    </div>
                </div>



                {/* ---------- Product Main Page Right ----------*/}
                <div className="productsPageMainRight">

                    {/* ---------- Right Page qty Detail ----------*/}
                    <div className="productsPageMainRightTopBanner">
                        1 - 5 of 5  results for <span className='ProductsPageMainRightTopBannerSpan'>MacBooks</span>
                    </div>

                    {/* ---------- Right Page Product Card ----------*/}
                    <div className='itemsImageProductPage'>
                        <div className="itemsImageProductPageone">
                            <div className='imgBlockitemsImageProductPageOne'>
                                {/* ---------------- img --------------*/}
                                <img src={"https://m.media-amazon.com/images/I/6190zcm9RVL._AC_SX679_.jpg"} className="productImageProduct" />
                            </div>
                            <div className='productNameProduc'>
                                {/* -------------- Name -------------- */}
                                <div>
                                    {"CASABREWS Espresso Machine 20 Bar, Professional Espresso Maker with Milk Frother Steam Wand, Compact Espresso Coffee Machine with 34oz Removable Water Tank for Cappuccino, Latte, Silver"}
                                </div>
                                {/* -------------- Price ------------- */}
                                <div className='priceProductDetailPage'>
                                    <div className='currencyText'>
                                        $
                                    </div>
                                    <div className='rateHomeDetails'>
                                        <div className='rateHomeDetailsPrice'>
                                            {32500}
                                        </div>
                                        <div className='addtobashetbtn'>
                                            Add to Cart 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Products
