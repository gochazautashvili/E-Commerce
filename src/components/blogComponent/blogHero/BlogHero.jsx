import React from 'react'
import './BlogHero.scss'
import blog_hero_img from '../../../assets/blog_hero_img.png'
import navigate_icon from '../../../assets/navigate_icon.png'

function BlogHero() {
  return (
    <div className='blogHero'>
      <div className="container">
        <div className="blogHero__inner">
          <div className="blogHero__top">
            <p>Home</p>
            <img src={navigate_icon} alt="" />
            <h6>Blog</h6>
          </div>
          <h1>Our Blog</h1>
          <h2>Home ideas and design inspiration</h2>
        </div>
      </div>
    </div>
  )
}

export default BlogHero