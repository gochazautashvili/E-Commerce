import React, { useContext, useEffect, useState } from 'react'
import "./ShopMainProduct.scss"
import product from '../../../db/product'
import ShopProductItem from '../../shopProductItem/ShopProductItem'
import { ShopContext } from '../../../context/ShopContext'

function ShopMainProduct({ sort, sortPrice, itemSize }) {
    const { searchProduct } = useContext(ShopContext)
    const [visible, setVisible] = useState(12)

    return (
        <section className='shopManiProduct'>
            <div className={`shopManiProduct__item ${itemSize}`}>
                {product.sort((a, b) => {
                    if (sort === "small") {
                        return a.new_price - b.new_price
                    } else if (sort === "big") {
                        return b.new_price - a.new_price
                    }
                }).filter(item => {
                    return item.title.trim().toLowerCase().includes(searchProduct.trim().toLowerCase())
                }).map(item => {
                    if (sortPrice > Math.round(item.new_price)) {
                        return (
                            <ShopProductItem itemSize={itemSize} key={item.id} like={item.like} id={item.id} title={item.title} new_price={item.new_price} old_price={item.old_price} product_img={item.product_img} />
                        )
                    }
                }).slice(0, visible)}
            </div>
            <button onClick={() => setVisible(visible + 4)} className='shopManiProduct__button'>Show more</button>
        </section>
    )
}

export default ShopMainProduct