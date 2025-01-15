import React from 'react'
import './Cart.css'

const Cart = () => {
    return (
        <div className='cart'>

            {/* ----------- Top Left ----------- */}
            <div className="topLeftCart">

                <div className='topLeftCartTitle'>
                    Shopping Cart
                </div>

                <div className='deselectAllcart'>
                    Deselect all items
                </div>

                <div className='cartPriceTextDivider'>
                    Price
                </div>

                <div className='cartItemDiv'>
                    <div className='cartItemBlock'>
                        <div className="cartItemLeftBlock">
                            <div className="cartItemLeftBlockImage">
                                <img className='cartItemLeftBlockimg' src={"https://m.media-amazon.com/images/I/71xtdgN8vIL.__AC_SX300_SY300_QL70_FMwebp_.jpg"} />
                            </div>
                            <div className="cartItemLeftBlockDetails">
                                <div className="cartItemProductName">
                                    {"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste dignissimos laborum cupiditate?"}
                                </div>
                                <div className='inStockCart'>
                                    In stock
                                </div>
                                <div className='elgFreeshp'>
                                    Elligible for FREE Shipping
                                </div>
                                <div className="removeFromCart">
                                    Remove From Basket
                                </div>
                            </div>
                        </div>

                        <div className="cartItemRightBlock">
                            Rs. {2500}
                        </div>
                    </div>
                </div>


            </div>

            {/* ----------- Top Right ----------- */}
            <div className="topRightCart">

                <div className="subTotalTitle">
                    Subtotal ({2} items):<span className='subTotalTitleSpan'>
                        Rs. {5000}
                    </span>
                </div>

                <div className='giftAddto'>
                    <input type="checkbox"/>
                    <div  className='giftinp'>
                        This Order Contains a gift
                    </div>

                </div>
                <div className="ProceedtoBuy">
                    Proceed to Buy
                </div>
            </div>
        </div>
    )
}

export default Cart
