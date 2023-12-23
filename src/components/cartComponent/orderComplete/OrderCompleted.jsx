import React, { useContext } from 'react'
import './OrderCompleted.scss'
import checkOut from '../../../assets/checkOut.png'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../../context/CartContext'
import product from '../../../db/product'

function OrderCompleted() {
    const navigate = useNavigate()
    const { cartItems, finalAmount, payment } = useContext(CartContext)
    const day = new Date()
    const month = day.getMonth() + 1
    const Day = day.getDay() + 17
    const year = day.getFullYear()

    return (
        <section className='orderComplete'>
            <h1 className="checkOut__title">Check Out</h1>
            <div className="checkOut__navigate">
                <div className="orderComplete__navigate_item">
                    <img src={checkOut} alt="" />
                    <p>ShoppingCart</p>
                </div>
                <div className="orderComplete__navigate_item">
                    <img src={checkOut} alt="" />
                    <p>Checkout details</p>
                </div>
                <div className="orderComplete__navigate_item">
                    <h1>3</h1>
                    <p>Order complete</p>
                </div>
            </div>
            <div className="orderComplete__content">
                <div>
                    <p className='orderComplete__content_text'>Thank you! 🎉</p>
                    <h1 className="orderComplete__content_title">Your order has been received</h1>
                </div>
                <div className="orderComplete__content_item">
                    {product.map(item => {
                        if (cartItems[item.id] !== 0) {
                            return (
                                <div key={item.id} className="orderComplete__content_item_product">
                                    <img src={item.product_img} alt="" />
                                    <p>{cartItems[item.id]}</p>
                                </div>
                            )
                        }
                    })}
                </div>
                <div className="orderComplete__content_desc">
                    <div className="orderComplete__content_desc_item">
                        <p>Order code:</p>
                        <h3>#{Date.now()}</h3>
                    </div>
                    <div className="orderComplete__content_desc_item">
                        <p>Date:</p>
                        <h3>{`${month}.${Day}.${year}`}</h3>
                    </div>
                    <div className="orderComplete__content_desc_item">
                        <p>Total:</p>
                        <h3>$ {finalAmount}</h3>
                    </div>
                    <div className="orderComplete__content_desc_item">
                        <p>Payment method:</p>
                        <h3>{payment}</h3>
                    </div>
                </div>
                <button onClick={() => {navigate('/'), alert("success, გილოცავ შენაძენს")}} className='orderComplete__content_button'>Purchase history</button>
            </div>
        </section>
    )
}

export default OrderCompleted