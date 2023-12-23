import React from 'react'
import BlogHero from '../../components/blogComponent/blogHero/BlogHero'
import BlogMain from '../../components/blogComponent/blogMain/BlogMain'
import NewsLetter from '../../components/newsLetter/NewsLetter'

function Blog() {
    return (
        <main className='blog__main'>
            <BlogHero />
            <BlogMain />
            <NewsLetter />
        </main>
    )
}

export default Blog