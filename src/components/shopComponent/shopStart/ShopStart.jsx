import React from 'react'
import './ShopStart.scss'
import navigate_icon from '../../../assets/navigate_icon.png'

function ShopStart() {
    return (
        <div className='shopStart'>
            <div className="container">
                <div className="shopStart__inner">
                    <div className="shopStart__navigate">
                        <p>Home</p>
                        <img src={navigate_icon} alt="" />
                        <h4> Shop </h4>
                    </div>
                    <h1 className="shopStart__title">Shop Page</h1>
                    <p className="shopStart__text">Let’s design the place you always imagined.</p>
                </div>
            </div>
        </div>
    )
}

export default ShopStart