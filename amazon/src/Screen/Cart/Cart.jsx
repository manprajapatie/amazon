import { React, useState, useEffect } from 'react'
import './Cart.css'
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../redux/action/action';
import {toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Cart = () => {

    const [cartItem, setcartItem] = useState([]);
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items)

    {/* ---------  Add TOtal price in cart   --------- */ }
    let a = 0;
    let cost = cartItems.map((item) => {
        return a = a + item.price
    })


    useEffect(() => {
        setcartItem(cartItems)
    }, [cartItems])

    const handleRemoveFromCart = (id) => {
        toast.error("Item Removed From Cart", {
            position: "bottom-right"
        })
        dispatch(removeFromCart(id));
    }


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

                    {
                        cartItems.map((item, ind) => {
                            return (
                                <div className='cartItemBlock'>
                                    <div className="cartItemLeftBlock">
                                        <div className="cartItemLeftBlockImage">
                                            <img className='cartItemLeftBlockimg' src={item.imageUrl} />
                                        </div>
                                        <div className="cartItemLeftBlockDetails">
                                            <div className="cartItemProductName">
                                                {item.name}
                                            </div>
                                            <div className='inStockCart'>
                                                In stock
                                            </div>
                                            <div className='elgFreeshp'>
                                                Elligible for FREE Shipping
                                            </div>
                                            <div className="removeFromCart" onClick={()=>{handleRemoveFromCart(item.id)}}>
                                                Remove From Basket
                                            </div>
                                        </div>
                                    </div>

                                    <div className="cartItemRightBlock">
                                        Rs. {item.price}
                                    </div>
                                </div>
                            );
                        })
                    }

                </div>


            </div>

            {/* ----------- Top Right ----------- */}
            <div className="topRightCart">

                <div className="subTotalTitle">
                    Subtotal ({cartItems.length} items):<span className='subTotalTitleSpan'>
                        Rs. {a}
                    </span>
                </div>

                <div className='giftAddto'>
                    <input type="checkbox" />
                    <div className='giftinp'>
                        This Order Contains a gift
                    </div>

                </div>
                <div className="ProceedtoBuy">
                    Proceed to Buy
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Cart
