import React, { useContext, useState } from 'react'
import './ShoppingCartItem.scss'
import product from '../../../db/product'
import { CartContext } from '../../../context/CartContext'
import menu_exit_icon from '../../../assets/menu_exit_icon.png'
import frocent from '../../../assets/frocent.png'
import { useMediaQuery } from 'react-responsive'
import { useNavigate } from 'react-router-dom'
import CartItem from '../../cartItem/CartItem'

function ShoppingCartItem() {
    const {
        cartItems,
        addItemCart,
        removeToCart,
        removeToItemCart,
        getTotalCartAmount,
        // state
        setSubtotal,
        setShipping,
    } = useContext(CartContext)

    const isMobile = useMediaQuery({ query: '(max-width: 530px)' })
    const [shopping, setShopping] = useState(0)
    const navigate = useNavigate()

    let totalAmount = Math.round(getTotalCartAmount()) * 0.21
    const fullAmount = shopping == 21 ? Math.round(getTotalCartAmount()) + Math.round(totalAmount) : Math.round(getTotalCartAmount()) + Number(shopping)

    return (
        <section className='ShoppingCartItem'>
            <h1 className="ShoppingCartItem__title">Cart</h1>
            <div className="ShoppingCartItem__navigate">
                <div className="ShoppingCartItem__navigate_item">
                    <h1>1</h1>
                    <p>ShoppingCart</p>
                </div>
                <div className="ShoppingCartItem__navigate_item">
                    <h1>2</h1>
                    <p>Checkout details</p>
                </div>
                <div className="ShoppingCartItem__navigate_item">
                    <h1>3</h1>
                    <p>Order complete</p>
                </div>
            </div>
            <div className="ShoppingCartItem__content">
                <div className="ShoppingCartItem__content_left">
                    <div className="ShoppingCartItem__content_left_category">
                        <p>Product</p>
                        <div className="ShoppingCartItem__content_left_category_right">
                            <p>Quantity</p>
                            <p>Price</p>
                            <p>Subtotal</p>
                        </div>
                    </div>
                    <div className="ShoppingCartItem__content_left_items">
                        {product.map(item => {
                            if (cartItems[item.id] !== 0) {
                                return (
                                    !isMobile ? <div key={item.id} className="shoppingCart_product_item">
                                        <div className="shoppingCart_product_item_left">
                                            <img className='cartMain' src={item.product_img} alt="" />
                                            <div className="cart_product_item_content next">
                                                <h2>{item.title}</h2>
                                                <p>Color: Black</p>
                                                <div className="cart_product_item_content_delete" onClick={() => removeToCart(item.id)}>
                                                    <img className='cart_product_item_content_delete_img' src={menu_exit_icon} alt="" />
                                                    <p>Delete</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="shoppingCart_product_item_right">
                                            <div className="cart_product_item_content_amount">
                                                <button onClick={() => removeToItemCart(item.id)}>-</button>
                                                <p>{cartItems[item.id]}</p>
                                                <button onClick={() => addItemCart(item.id)}>+</button>
                                            </div>
                                            <div className="cart_product_item_right">
                                                <p>$ {item.new_price}</p>
                                            </div>
                                            <div className="cart_product_item_right_subtitle">
                                                <p>$ {Math.round(item.new_price) * cartItems[item.id]}</p>
                                            </div>
                                        </div>
                                    </div> : <CartItem key={item.id} item={item} />
                                )
                            }
                        })}
                    </div>
                    <div className="ShoppingCartItem__coupon">
                        <h1>Have a coupon?</h1>
                        <h3>Add your code for an instant cart discount</h3>
                        <div className="ShoppingCartItem__coupon_box">
                            <img src={frocent} alt="" />
                            <input type="text" placeholder='Coupon Code' />
                            <p>Apply</p>
                        </div>
                    </div>
                </div>
                <div className="ShoppingCartItem__content_right">
                    <h1 className="ShoppingCartItem__content_right_title">Cart summary</h1>
                    <div className="ShoppingCartItem__content_right_content">
                        <label htmlFor='shop1' className="ShoppingCartItem__content_right_content_item">
                            <input checked={shopping == 0 ? "checked" : ""} type="radio" name='shop' id='shop1' value={0} onChange={e => { setShopping(e.target.value), setShipping("Free") }} />
                            <label htmlFor='shop1'>Free shipping</label>
                            <h3>$0.00</h3>
                        </label>
                        <label htmlFor='shop2' className="ShoppingCartItem__content_right_content_item">
                            <input type="radio" name='shop' id='shop2' value={15} onChange={e => { setShopping(e.target.value), setShipping("+ $15") }} />
                            <label htmlFor='shop2'>Express shipping</label>
                            <h3>+ $15.00</h3>
                        </label>
                        <label htmlFor='shop3' className="ShoppingCartItem__content_right_content_item">
                            <input type="radio" name='shop' id='shop3' value={21} onChange={e => { setShopping(e.target.value), setShipping("+ %21") }} />
                            <label htmlFor='shop3'>Pick Up</label>
                            <h3>%21.00</h3>
                        </label>
                        <div className="ShoppingCartItem__content_right_content_flex top">
                            <h1 className='subH1'>Subtotal</h1>
                            <p className='subP'>$ {Math.round(getTotalCartAmount())}</p>
                        </div>
                        <div className="ShoppingCartItem__content_right_content_flex">
                            <h1 className='totalH1'>Total</h1>
                            <p className='totalP'>$ {fullAmount} </p>
                        </div>
                        <button className='ShoppingCartItem__content_right_content_button' onClick={() => { navigate('/checkoutDetails'), setSubtotal(fullAmount) }}>Checkout</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ShoppingCartItem