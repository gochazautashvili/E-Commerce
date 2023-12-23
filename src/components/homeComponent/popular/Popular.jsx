import React from 'react'
import './Popular.scss'
import living_room_chear from '../../../assets/living_room_chear.png'
import Bedroom from '../../../assets/Bedroom.png'
import kitchen from '../../../assets/kitchen.png'
import arrowRightPopular from '../../../assets/arrow-right-popular.png'

function Popular() {
    return (
        <section className='popular'>
            <div className="container">
                <div className="popular__inner">
                    <div className="popular_main">
                        <div className="popular_desc">
                            <p>Living Room</p>
                            <a href="#">Shop Now <img src={arrowRightPopular} alt="" /></a>
                        </div>
                        <img className='popular_main_img' src={living_room_chear} alt="" />
                    </div>
                    <div className="popular_images">
                        <div className="popular_images_top">
                            <div className="popular_desc">
                                <p>Bedroom</p>
                                <a href="#">Shop Now<img src={arrowRightPopular} alt="" /></a>
                            </div>
                            <img className='popular_images_top_img' src={Bedroom} alt="" />
                        </div>
                        <div className="popular_images_bottom">
                            <div className="popular_desc">
                                <p>Kitchen</p>
                                <a href="#">Shop Now<img src={arrowRightPopular} alt="" /></a>
                            </div>
                            <img className='popular_images_top_img' src={kitchen} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Popular