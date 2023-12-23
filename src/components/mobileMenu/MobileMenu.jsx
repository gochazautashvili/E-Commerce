import React, { useContext, useState } from 'react'
import './MobileMenu.scss'
import right_arrow_blue from '../../assets/arrow-right_blue.png'
import Exit_icon from '../../assets/exit_icon.png'
import frocent from '../../assets/frocent.png'
import menu_burger from '../../assets/menu_icon.png'
import menu_exit from '../../assets/menu_exit_icon.png'
import cart_icon from '../../assets/cart_icon.png'
import search_icon from '../../assets/search_icon.png'
import mobile_down_icon from '../../assets/mobile_down_icon.png'
import link_icon from '../../assets/like_icon.png'
import instagram_icon from '../../assets/instagram_black_icon.png'
import facebook_icon from '../../assets/facebook_black_icon.png'
import youtube_icon from '../../assets/youtube_black_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../context/ShopContext'
import { useNavigate } from 'react-router-dom'
import Cart from '../cart/Cart'
import { CartContext } from '../../context/CartContext'

function MobileMenu() {
    const [exit, setExit] = useState(true)
    const [mobileMenu, setMobileMenu] = useState(false)

    const { setSearchProduct, setVisibleCart, visibleCart } = useContext(ShopContext)
    const { getTotalCartItem, getTotalLike } = useContext(CartContext)

    document.body.style.overflow = "hidden"

    const navigate = useNavigate()

    const menuClick = (event) => {
        if (event.target.className === "mobile__menu_fill") {
            setMobileMenu(false)
        }
    }

    const handlesearch = (e) => {
        setSearchProduct(e.target.value)
        navigate('/shop')
    }

    return (
        <header className='header'>
            {exit && <div className="limited__time">
                <div className="limited__time_text">
                    <img src={frocent} alt="" />
                    <p>30% off storewide — Limited time! </p>
                    <Link to={'/shop'}>Shop Now <img src={right_arrow_blue} alt="" /> </Link>
                </div>
                <img onClick={() => setExit(!exit)} className='limited__time_exit' src={Exit_icon} alt="" />
            </div>}
            <div className="container">
                <div className="mobile__header__inner">
                    <div className="mobile__header_left">
                        <img onClick={() => setMobileMenu(true)} src={menu_burger} alt="" />
                        <Link className='mobile__header_left_logo' to={'/'}>3legant.</Link>
                    </div>
                    <nav className="mobile__menu_fill" onClick={menuClick} style={{ left: mobileMenu ? "0%" : "-130%" }}>
                        <div className="mobile__menu" style={{ left: mobileMenu ? "0%" : "-130%" }}>
                            <div className="mobile__menu_start">
                                <div className="mobile__menu_top">
                                    <Link className='mobile__header_left_logo' to={'/'} onClick={() => setMobileMenu(false)}>3legant.</Link>
                                    <img onClick={() => setMobileMenu(false)} src={menu_exit} alt="" />
                                </div>
                                <div className="mobile__menu_search">
                                    <img onClick={() => setMobileMenu(false)} src={search_icon} alt="" />
                                    <input type="text" placeholder='Search' onChange={handlesearch} />
                                </div>
                                <ul className="mobile__menu_list">
                                    <li className="mobile__menu_item">
                                        <Link className='mobile__menu_link' to={"/"} onClick={() => setMobileMenu(false)}>Home</Link>
                                    </li>
                                    <li className="mobile__menu_item">
                                        <Link className='mobile__menu_link' to={"/shop"} onClick={() => setMobileMenu(false)}>Shop <img src={mobile_down_icon} alt="" /></Link>
                                    </li>
                                    <li className="mobile__menu_item">
                                        <Link className='mobile__menu_link' to={"/blog"} onClick={() => setMobileMenu(false)}>Blog <img src={mobile_down_icon} alt="" /> </Link>
                                    </li>
                                    <li className="mobile__menu_item">
                                        <Link className='mobile__menu_link' to={"/contact"} onClick={() => setMobileMenu(false)}>Contact Us</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="mobile__menu_bottom">
                                <div className="mobile__menu_bottom_cart" style={{ cursor: "pointer" }} onClick={() => { setVisibleCart(!visibleCart), setMobileMenu(false) }}>
                                    <p>Cart</p>
                                    <div className="header__right__content_cart">
                                        <img src={cart_icon} alt="" />
                                        <p>{getTotalCartItem()}</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="mobile__menu_bottom_cart" onClick={() => { navigate('/wishlist'), setMobileMenu(false) }}>
                                    <p>Wishlist</p>
                                    <div className="header__right__content_cart">
                                        <img src={link_icon} alt="" />
                                        <p>{getTotalLike()}</p>
                                    </div>
                                </div>
                                <hr />
                                <button onClick={() => setMobileMenu(false)}>Sign in</button>
                                <div className="mobile__menu_bottom_social">
                                    <a href="#"><img src={instagram_icon} alt="" /></a>
                                    <a href="#"><img src={facebook_icon} alt="" /></a>
                                    <a href="#"><img src={youtube_icon} alt="" /></a>
                                </div>
                            </div>
                        </div>
                    </nav>
                    <div className="mobile__header_right">
                        <img onClick={() => setVisibleCart(!visibleCart)} src={cart_icon} alt="" />
                        <p>{getTotalCartItem()}</p>
                    </div>
                </div>
            </div >
            <Cart />
        </header >
    )
}

export default MobileMenu