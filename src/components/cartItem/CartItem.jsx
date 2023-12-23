import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import menu_exit_icon from '../../assets/menu_exit_icon.png'

function CartItem({ item }) {
    const { cartItems, addItemCart, removeToCart, removeToItemCart } = useContext(CartContext)

    return (
        <div key={item.id} className="cart_product_item">
            <img className='cartMain' src={item.product_img} alt="" />
            <div className="cart_product_item_content">
                <h2>{item.title}</h2>
                <p>Color: Black</p>
                <div className="cart_product_item_content_amount">
                    <button onClick={() => removeToItemCart(item.id)}>-</button>
                    <p>{cartItems[item.id]}</p>
                    <button onClick={() => addItemCart(item.id)}>+</button>
                </div>
            </div>
            <div className="cart_product_item_right">
                <p>$ {item.new_price}</p>
                <img onClick={() => removeToCart(item.id)} src={menu_exit_icon} alt="" />
            </div>
        </div>
    )
}

export default CartItem