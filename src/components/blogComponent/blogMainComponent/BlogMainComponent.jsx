import React, { useContext, useState } from 'react'
import './BlogMainComponent.scss'
import blogData from '../../../db/blog'
import BlogItem from '../blogItem/BlogItem'
import { ShopContext } from '../../../context/ShopContext'

function BlogMainComponent({ sortTime }) {
  const { blogItemCollect } = useContext(ShopContext)

  return (
    <section className='blogMainComponent'>
      <div className={`blogMainComponent__inner ${blogItemCollect}`}>
        {blogData.map(blog => {
          if (sortTime === blog.time) {
            return <BlogItem key={blog.id} id={blog.id} title={blog.title} date={blog.date} blog_img={blog.blog_img} />
          } else if (sortTime === "All") {
            return <BlogItem key={blog.id} id={blog.id} title={blog.title} date={blog.date} blog_img={blog.blog_img} />
          } else if (sortTime === blog.Featured) {
            return <BlogItem key={blog.id} id={blog.id} title={blog.title} date={blog.date} blog_img={blog.blog_img} />
          }
        })}
      </div>
    </section>
  )
}

export default BlogMainComponent