import React, { useContext } from 'react'
import './WishlistPage.scss'
import menu_exit_icon from '../../../assets/menu_exit_icon.png'
import product from '../../../db/product'
import { CartContext } from '../../../context/CartContext'

function WishlistPage() {
    const { likeItems, addItemCart, addLikeProduct } = useContext(CartContext)

    return (
        <section className='wishlist'>
            <h1 className='wishlist__title'>Your Wishlist</h1>
            <div className="wishlist__content">
                <div className="wishlist__content_title">
                    <p>Product</p>
                    <p>Price</p>
                    <p>Action</p>
                </div>
                {product.map(item => {
                    if (likeItems[item.id] !== 0) {
                        return (
                            <div key={item.id} className="orderComp__content_desc">
                                <div className="orderComp__content_desc_left">
                                    <img onClick={() => addLikeProduct(item.id)} className='exitImg' src={menu_exit_icon} alt="" />
                                    <img className='mainImg' src={item.product_img} alt="" />
                                    <div className="orderComp__content_desc_left_text">
                                        <div className="orderComp__content_desc_left_text_left">
                                            <h1>{item.title}</h1>
                                            <p>Color: Black</p>
                                        </div>
                                        <div className="orderComp__content_desc_center">
                                            <p>$ {item.new_price}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="orderComp__content_desc_center">
                                    <p className='c'>$ {item.new_price}</p>
                                </div>
                                <div className="orderComp__content_desc_right">
                                    <button onClick={() => addItemCart(item.id)}>Add to cart</button>
                                </div>
                            </div>
                        )
                    }
                })}
            </div>
        </section>
    )
}

export default WishlistPage