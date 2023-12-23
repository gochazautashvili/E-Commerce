import React from 'react'
import './BlogItem.scss'

function BlogItem({ id, title, blog_img, date }) {

    return (
        <div className='blogItem'>
            <div className="blogItem__img"><img src={blog_img} alt="" /></div>
            <h1> {title} </h1>
            <p> {date} </p>
        </div>
    )
}

export default BlogItem