import './Hero.scss'
import React from 'react'
import slideImg from '../../../assets/hero_img.png'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// swiper style

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';


const slider_img = [slideImg, slideImg, slideImg]

function Hero() {
    return (
        <section className='hero'>
            <div className="hero__content">
                <div className="hero__slider">
                    <Swiper
                        cssMode={true}
                        navigation={true}
                        pagination={true}
                        mousewheel={true}
                        keyboard={true}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        spaceBetween={30}
                        centeredSlides={true}
                        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
                        className="mySwiper"
                    >
                        {slider_img.map((img, i) => { return (<SwiperSlide key={i}><img className='hero__slider_img' src={img} alt="" /></SwiperSlide>) })}
                    </Swiper>
                </div>
                <div className="hero__content_text">
                    <div className="hero__content_title">
                        <h1>Simply Unique <span>/</span> <br /> Simply Better <span>.</span> </h1>
                    </div>
                    <div className="hero__content_desc">
                        <p><span>3legant</span> is a gift & decorations store based in HCMC, Vietnam. Est since 2019. </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero

