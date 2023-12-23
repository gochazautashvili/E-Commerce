import React, { useContext } from 'react'
import './ProductItem.scss'
import like_icon from '../../assets/like_icon.png'
import red_like_icon from '../../assets/red_like_icon2.png'
import product_starts from '../../assets/Star_fill.png'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

function ProductItem({ id, title, new_price, old_price, product_img }) {
    const { setActiveLike, activeLike, addLikeProduct, addItemCart, likeItems } = useContext(CartContext)
    const navigate = useNavigate()


    const navigateProduct = () => {
        window.scrollTo(0, 0)
        navigate(`/product/${id}`)
    }

    return (
        <div className='productItem'>
            <div className="productItem__top">
                <div className="productItem__top_content">
                    <div className="productItem__top_sale">
                        <p className='new'>NEW</p>
                        <p className='percent'>-50%</p>
                    </div>
                    <div className="like">
                        <img onClick={() => { addLikeProduct(id), setActiveLike(!activeLike) }} src={likeItems[id] !== 0 ? red_like_icon : like_icon} alt="" />
                    </div>
                </div>
                <img className='productItem__top_main_img' src={product_img} alt="" />
                <button className='productItem__top_button' onClick={() => addItemCart(id)}>Add to cart</button>
            </div>
            <div className="productItem__bottom" onClick={navigateProduct}>
                <div className="productItem__bottom_starts">
                    <img src={product_starts} alt="" />
                    <img src={product_starts} alt="" />
                    <img src={product_starts} alt="" />
                    <img src={product_starts} alt="" />
                    <img src={product_starts} alt="" />
                </div>
                <p className="productItem__bottom_title"> {title} </p>
                <div className="productItem__bottom_prices">
                    <p className="productItem__bottom_price new"> {new_price} </p>
                    <p className="productItem__bottom_price old"> {old_price} </p>
                </div>
            </div>
        </div>
    )
}

export default ProductItem