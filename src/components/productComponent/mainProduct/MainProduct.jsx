import React from 'react'
import './MainProduct.scss'
import { useParams } from 'react-router-dom'
import product from '../../../db/product'
import navigate_icon from '../../../assets/navigate_icon.png'
import ProductObject from '../productObject/ProductObject'

function MainProduct() {
    const { id } = useParams()

    return (
        <section className='mainProduct'>
            <div className="mainProduct_navigate">
                <p>Home</p>
                <img src={navigate_icon} alt="" />
                <p>Shop</p>
                <img src={navigate_icon} alt="" />
                <p>Living Room</p>
                <img src={navigate_icon} alt="" />
                <h6>Product</h6>
            </div>
            {product.map(Value => {
                if (Value.id === Number(id)) {
                    return <ProductObject key={Value.id} params={Number(id)} id={Value.id} title={Value.title} new_price={Value.new_price} old_price={Value.old_price} img_category={Value.img_category} img_color={Value.img_color} />
                }
            })}
        </section>
    )
}

export default MainProduct