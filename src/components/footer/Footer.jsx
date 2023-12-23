import React from 'react'
import './Footer.scss'
import { Link } from 'react-router-dom'
import facebook_icon from '../../assets/facebook_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
import youtube_icon from '../../assets/youtube_icon.png'

function Footer() {
    return (
        <footer className='footer'>
            <div className="container">
                <div className="footer__inner">
                    <div className="footer__top">
                        <div className="footer__top_left">
                            <h1>3legant.
                            </h1>
                            <hr />
                            <p>Gift & Decoration Store</p>
                        </div>
                        <nav className="footer__top_right">
                            <ul className="footer__menu">
                                <li className="footer__menu_item">
                                    <Link to={'/'}>Home</Link>
                                </li>
                                <li className="footer__menu_item">
                                    <Link to={'/shop'}>Shop</Link>
                                </li>
                                <li className="footer__menu_item">
                                    <Link to={'/blog'}>Blog</Link>
                                </li>
                                <li className="footer__menu_item">
                                    <Link to={'/contact'}>Contact Us</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <hr className='footer__inner_main_hr' />
                    <div className="footer__bottom">
                        <div className="footer__bottom_left">
                            <p>Copyright © 2023 3legant. All rights reserved</p>
                            <div className='footer__bottom_left_h3' >
                                <h3>Privacy Policy</h3>
                                <h3>Terms of Use</h3>
                            </div>
                        </div>
                        <div className="footer__bottom_right">
                            <a href="#"><img src={facebook_icon} alt="" /></a>
                            <a href="#"><img src={instagram_icon} alt="" /></a>
                            <a href="#"><img src={youtube_icon} alt="" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer