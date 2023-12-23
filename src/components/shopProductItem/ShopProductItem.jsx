import React, { useContext } from 'react'
import "./ShopProductItem.scss"
import like_icon from '../../assets/like_icon.png'
import product_starts from '../../assets/Star_fill.png'
import red_like_icon from '../../assets/red_like_icon2.png'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

function ShopProductItem({ id, title, new_price, old_price, product_img, itemSize }) {
    const { setActiveLike, activeLike, addLikeProduct, likeItems, addItemCart } = useContext(CartContext)
    const navigate = useNavigate()

    const navigateProduct = () => {
        window.scrollTo(0, 0)
        navigate(`/product/${id}`)
    }

    return (
        <div className={`shopProductItem ${itemSize}`}>
            <div className={`shopProductItem__top ${itemSize}`}>
                <div className="shopProductItem__top_content">
                    <div className="shopProductItem__top_sale">
                        <p className='new'>NEW</p>
                        <p className='percent'>-50%</p>
                    </div>
                    <div className="like">
                        <img onClick={() => { addLikeProduct(id), setActiveLike(!activeLike) }} src={likeItems[id] !== 0 ? red_like_icon : like_icon} alt="" />
                    </div>
                </div>
                <img className='shopProductItem__top_main_img' src={product_img} alt="" />
                <button className='shopProductItem__top_button' onClick={() => addItemCart(id)}>Add to cart</button>
            </div>
            <div className="shopProductItem__bottom" onClick={navigateProduct}>
                <div className="shopProductItem__bottom_starts">
                    <img src={product_starts} alt="" />
                    <img src={product_starts} alt="" />
                    <img src={product_starts} alt="" />
                    <img src={product_starts} alt="" />
                    <img src={product_starts} alt="" />
                </div>
                <p className="shopProductItem__bottom_title"> {title} </p>
                <div className="shopProductItem__bottom_prices">
                    <p className="shopProductItem__bottom_price new"> {new_price} </p>
                    <p className="shopProductItem__bottom_price old"> {old_price} </p>
                </div>
            </div>
        </div>
    )
}

export default ShopProductItem