import React from 'react'
import './Articles.scss'
import arrow_right_popular from '../../../assets/arrow-right-popular.png'
import Articles1 from '../../../assets/Articles1.png'
import Articles2 from '../../../assets/Articles2.png'
import Articles3 from '../../../assets/Articles3.png'

function Articles() {
    return (
        <section className='articles'>
            <div className="container">
                <div className="articles__inner">
                    <div className="articles__top">
                        <h1 className='articles__top_title'>Articles</h1>
                        <a className='articles__top_link' href="#"> More Articles <img src={arrow_right_popular} alt="" /> </a>
                    </div>
                    <div className="articles__content">
                        <article className='articles__content_item'>
                            <img className='articles__content_item_main_img' src={Articles1} alt="" />
                            <p>7 ways to decor your home</p>
                            <a className='articles__content_item_link' href="#"> Read More <img src={arrow_right_popular} alt="" /> </a>
                        </article>
                        <article className='articles__content_item'>
                            <img className='articles__content_item_main_img' src={Articles2} alt="" />
                            <p>Kitchen organization</p>
                            <a className='articles__content_item_link' href="#"> Read More <img src={arrow_right_popular} alt="" /> </a>
                        </article>
                        <article className='articles__content_item'>
                            <img className='articles__content_item_main_img' src={Articles3} alt="" />
                            <p>Decor your bedroom</p>
                            <a className='articles__content_item_link' href="#"> Read More <img src={arrow_right_popular} alt="" /> </a>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Articles