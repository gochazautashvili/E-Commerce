import React, { useContext, useEffect, useState } from 'react'
import './Header.scss'
import { Link, NavLink, useLocation } from 'react-router-dom'
import Exit_icon from '../../assets/exit_icon.png'
import search_icon from '../../assets/search_icon.png'
import profile_icon from '../../assets/profile_icon.png'
import cart_icon from '../../assets/cart_icon.png'
import frocent from '../../assets/frocent.png'
import right_arrow_blue from '../../assets/arrow-right_blue.png'
import { ShopContext } from '../../context/ShopContext'
import { useNavigate } from 'react-router-dom'
import Cart from '../cart/Cart'
import { CartContext } from '../../context/CartContext'

function Header() {
    const { setSearchProduct, setVisibleCart, visibleCart } = useContext(ShopContext)
    const { getTotalCartItem } = useContext(CartContext)
    const [search, setSearch] = useState(false)
    const [exit, setExit] = useState(true)
    const navigate = useNavigate()

    const handlesearch = (e) => {
        e.preventDefault()
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
                <div className="header__inner">
                    <div className="header__logo">
                        <Link to={'/'}>3legant.</Link>
                    </div>
                    <nav className="menu">
                        <ul className="menu__list">
                            <li className="menu__item">
                                <NavLink className='menu__link' to={'/'}>Home</NavLink>
                            </li>
                            <li className="menu__item">
                                <NavLink className='menu__link' to={'/shop'}>Shop</NavLink>
                            </li>
                            <li className="menu__item">
                                <NavLink className='menu__link' to={'/blog'}>Blog</NavLink>
                            </li>
                            <li className="menu__item">
                                <NavLink className='menu__link' to={'/contact'}>Contact Us</NavLink>
                            </li>
                        </ul>
                    </nav>
                    <div className="header__right__content">
                        <div className="header__right__content_search">
                            {search && <div className="header__right__content_search_box">
                                <input type="text" onChange={handlesearch} />
                            </div>}
                            <img onClick={() => { setSearch(!search) }} src={search_icon} alt="" />
                        </div>
                        <Link to={'/account'}><img src={profile_icon} alt="" /></Link>
                        <div className="header__right__content_cart">
                            <img onClick={() => setVisibleCart(!visibleCart)} src={cart_icon} alt="" />
                            <p>{getTotalCartItem()}</p>
                        </div>
                    </div>
                </div>
            </div>
            <Cart />
        </header>
    )
}

export default Header