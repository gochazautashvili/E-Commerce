import React from 'react'
import './Product.scss'
import MainProduct from '../../components/productComponent/mainProduct/MainProduct'
import Arrivals from '../../components/homeComponent/arrivals/Arrivals'

function Product() {
  return (
    <main className='main__product__page'>
      <div className="container">
        <MainProduct />
        <Arrivals />
      </div>
    </main>
  )
}

export default Product