import React, { useContext, useState } from 'react'
import star_icon from '../../../assets/Star_Fill.png'
import navigate_icon from '../../../assets/navigate_icon.png'
import like_icon from '../../../assets/like_icon.png'
import arrow_right from '../../../assets/arrow-right.png'
import arrow_left from '../../../assets/arrow-left.png'
import red_like_icon2 from '../../../assets/red_like_icon2.png'

import './ProductObject.scss'
import { CartContext } from '../../../context/CartContext'

function ProductObject({ id, title, new_price, old_price, img_category, img_color }) {
    const [mainImg, setMainImg] = useState(0)
    const [activeColor, setActiveColor] = useState(0)
    const [amount, setAmount] = useState(1)


    const nextImg = () => {
        if (mainImg < 2) {
            setMainImg(mainImg + 1)
        } else {
            setMainImg(0)
        }
    }

    const prevImg = () => {
        if (mainImg > 0) {
            setMainImg(mainImg - 1)
        } else {
            setMainImg(2)
        }
    }

    const handleActive = (id) => {
        setActiveColor(id)
    }

    const { addCart, addLike, likeItems, setActiveLike, activeLike } = useContext(CartContext)

    return (
        <section className='productObject'>
            <div className="productObject__left">
                <div className="productObject__left_mainImg">
                    <div className="productObject__left_mainImg_offer">
                        <p>new</p>
                        <h5>50%</h5>
                    </div>
                    <div className="productObject__left_mainImg_arrow">
                        <img src={arrow_left} onClick={prevImg} alt="" />
                        <img src={arrow_right} onClick={nextImg} alt="" />
                    </div>
                    <img className='mainImg' src={img_category[mainImg]} alt="" />
                </div>
                <div className="productObject__left_allImg">
                    <img src={img_category[0]} onClick={() => setMainImg(0)} alt="" />
                    <img src={img_category[1]} onClick={() => setMainImg(1)} alt="" />
                    <img src={img_category[2]} onClick={() => setMainImg(2)} alt="" />
                </div>
            </div>
            <div className="productObject__right">
                <div className="productObject__right_top">
                    <div className="productObject__right_reviews">
                        <img src={star_icon} alt="" />
                        <img src={star_icon} alt="" />
                        <img src={star_icon} alt="" />
                        <img src={star_icon} alt="" />
                        <img src={star_icon} alt="" />
                        <p>11 reviews</p>
                    </div>
                    <h1 className="productObject__right_title">{title}</h1>
                    <p className="productObject__right_text">Buy one or buy a few and make every space where you sit more convenient. Light and easy to move around with removable tray top, handy for serving snacks.</p>
                    <div className="productObject__right_prices">
                        <h1 className="productObject__right_price new">{new_price} $</h1>
                        <h1 className="productObject__right_price old">{old_price ? old_price + "$" : ""}</h1>
                    </div>
                </div>
                <hr />
                <div className="productObject__right_offer">
                    <p className="productObject__right_offer_text">Offer expires in:</p>
                    <div className="productObject__right_offer_timer">
                        <div className="productObject__right_offer_time">
                            <h1>2</h1>
                            <p>Day</p>
                        </div>
                        <div className="productObject__right_offer_time">
                            <h1>12</h1>
                            <p>Hours</p>
                        </div>
                        <div className="productObject__right_offer_time">
                            <h1>45</h1>
                            <p>Minute</p>
                        </div>
                        <div className="productObject__right_offer_time">
                            <h1>05</h1>
                            <p>Second</p>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="productObject__right_bottom">
                    <div className="productObject__right_measurements">
                        <p>Measurements</p>
                        <h3>17 1/2x20 5/8 "</h3>
                    </div>
                    <p className='productObject__right_bottom_color'>Choose Color <img src={navigate_icon} alt="" /></p>
                    <h1 className='productObject__right_bottom_main_color'>Black</h1>
                    <div className="productObject__right_bottom_color_item">
                        {img_color.map((item, i) => {
                            return <img style={{ border: i === activeColor ? "1px solid black" : "" }} onClick={() => handleActive(i)} key={item} src={item} alt="" />
                        })}
                    </div>
                    <div className="productObject__right_bottom_top_button">
                        <div className="productObject__right_bottom_amount">
                            <button onClick={() => { setAmount(amount > 1 ? amount - 1 : 1) }}>-</button>
                            <p>{amount}</p>
                            <button onClick={() => { setAmount(amount + 1) }}>+</button>
                        </div>
                        <div className="productObject__right_bottom_wishlist"
                         onClick={() => {addLike(id), setActiveLike(!activeLike)}}> <img src={likeItems[id] !== 0 ? red_like_icon2 : like_icon } alt="" /> Wishlist</div>
                    </div>
                    <button className="productObject__right_bottom_button" onClick={() => addCart(id, amount)}>Add to Cart</button>
                </div>
                <hr />
                <div className="productObject__right_footer">
                    <div className="productObject__right_footer_left">
                        <p>SKU</p>
                        <p>CATEGORY</p>
                    </div>
                    <div className="productObject__right_footer_right">
                        <p>1117</p>
                        <p>Living Room, Bedroom</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductObject