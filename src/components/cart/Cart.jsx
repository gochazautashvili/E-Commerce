import React, { useContext } from 'react'
import './Cart.scss'
import { ShopContext } from '../../context/ShopContext'
import product from '../../db/product'
import { CartContext } from '../../context/CartContext'
import { Link, useNavigate } from 'react-router-dom'
import CartItem from '../cartItem/CartItem'

function Cart() {
    const { visibleCart, setVisibleCart } = useContext(ShopContext)
    const { cartItems, getTotalCartAmount } = useContext(CartContext)

    const exitCart = (e) => {
        if (e.target.className === "cart__fill") {
            setVisibleCart(!visibleCart)
        }
    }

    const navigate = useNavigate()

    document.body.style.overflow = visibleCart ? "hidden" : "visible"


    return (
        <section className='cart__fill' onClick={exitCart} style={{ right: visibleCart ? "0%" : "-150%" }}>
            <aside className='cart' style={{ right: visibleCart ? "0%" : "-150%" }}>
                <h1 className="cart__title">Cart</h1>
                <div className="cart__product">
                    {product.map(item => {
                        if (cartItems[item.id] !== 0) {
                            return (
                                <CartItem key={item.id} item={item} />
                            )
                        }
                    })}
                </div>
                <div className="cart__footer">
                    <div className="cart__footer_subtotal">
                        <h3>Subtotal</h3>
                        <p>$99.00</p>
                    </div>
                    <div className="cart__footer_total">
                        <h3>Total</h3>
                        <p>${Math.round(getTotalCartAmount())}</p>
                    </div>
                    <button onClick={() => { navigate('/checkoutDetails'), setVisibleCart(false) }}>Checkout</button>
                    <Link to={'/shoppingCart'} onClick={() => setVisibleCart(false)}>View Cart</Link>
                </div>
            </aside>
        </section>
    )
}

export default Cart