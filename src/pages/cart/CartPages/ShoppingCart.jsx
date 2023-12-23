import React from 'react'
import ShoppingCartItem from '../../../components/cartComponent/shoppingCart/ShoppingCartItem'

function ShoppingCart() {
    return (
        <main className='shoppingCart'>
            <div className="container">
                <ShoppingCartItem />
            </div>
        </main>
    )
}

export default ShoppingCart