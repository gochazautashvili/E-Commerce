import React from 'react'
import './Shop.scss'
import ShopStart from '../../components/shopComponent/shopStart/ShopStart'
import ShopMain from '../../components/shopComponent/shopMain/ShopMain'
import NewsLetter from '../../components/newsLetter/NewsLetter'


function Shop() {
    return (
        <main className='mainShop'>
            <ShopStart />
            <ShopMain />
            <NewsLetter />
        </main>
    )
}

export default Shop