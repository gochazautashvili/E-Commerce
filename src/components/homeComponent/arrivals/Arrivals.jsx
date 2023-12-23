import React from 'react'
import './Arrivals.scss'
import arrow_right_popular from '../../../assets/arrow-right-popular.png'
import product from '../../../db/product'

// swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/pagination';
// 

// swiper import

import { Scrollbar, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProductItem from '../../productItem/ProductItem';
import { Link } from 'react-router-dom';

function Arrivals() {
    return (
        <div className='arrivals'>
            <div className="container">
                <div className="arrivals__inner">
                    <div className="arrivals__text">
                        <h1>New <br /> Arrivals </h1>
                        <Link to={"/shop"}>More Product <img src={arrow_right_popular} alt="" /></Link>
                    </div>
                    <div className="arrivals__slider">
                        <Swiper
                            slidesPerView={4}
                            spaceBetween={24}
                            centeredSlides={false}
                            pagination={{ clickable: true, }}
                            scrollbar={{ hide: false, }}
                            breakpoints={{
                                200: {
                                    slidesPerView: 1,
                                    spaceBetween: 10,
                                },
                                510: {
                                    slidesPerView: 2,
                                    spaceBetween: 10,
                                },
                                640: {
                                    slidesPerView: 2,
                                    spaceBetween: 10,
                                },
                                845: {
                                    slidesPerView: 3,
                                    spaceBetween: 24,
                                },
                                1160: {
                                    slidesPerView: 4,
                                    spaceBetween: 24,
                                },
                            }}
                            modules={[Scrollbar, Pagination]}
                            className="mySwiper"
                        >
                            {
                                product.map((item) => {
                                    return <SwiperSlide key={item.id} > <ProductItem id={item.id} like={item.like} title={item.title} new_price={item.new_price} old_price={item.old_price} product_img={item.product_img} /> </SwiperSlide>
                                }).slice(0,12)
                            }
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Arrivals