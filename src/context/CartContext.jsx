import { createContext, useState } from "react";
import product from '../db/product'

export const CartContext = createContext(null)

const getDefaultCart = () => {
    let cart = {}
    for (let i = 1; i < product.length + 1; i++) {
        cart[i] = 0
    }
    return cart
}

const getDefaultLike = () => {
    let like = {}
    for (let i = 1; i < product.length + 1; i++) {
        like[i] = 0
    }
    return like
}

const CartContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart())
    const [likeItems, setLikeItem] = useState(getDefaultLike())
    const [activeLike, setActiveLike] = useState(false)

    const addLike = (id) => {
        if (activeLike) {
            setLikeItem((prev) => ({ ...prev, [id]: prev[id] - 1 }))
        } else {
            setLikeItem((prev) => ({ ...prev, [id]: prev[id] + 1 }))
        }
    }
    const addLikeProduct = (id) => {
        if (likeItems[id] !== id && likeItems[id] < 1) {
            setLikeItem((prev) => ({ ...prev, [id]: prev[id] + 1 }))
        } else {
            setLikeItem((prev) => ({ ...prev, [id]: prev[id] - 1 }))
        }
    }

    const getTotalLike = () => {
        let totalLike = 0;
        for (const like in likeItems) {
            if (likeItems[like] > 0) {
                totalLike += likeItems[like]
            }
        }
        return totalLike;
    }

    const addCart = (id, amount) => {
        setCartItems((prev) => ({ ...prev, [id]: prev[id] + amount }))
    }

    const removeToCart = (id) => {
        setCartItems((prev) => ({ ...prev, [id]: prev[id] = 0 }))
    }

    const addItemCart = (id) => {
        setCartItems((prev) => ({ ...prev, [id]: prev[id] + 1 }))
    }

    const removeToItemCart = (id) => {
        setCartItems((prev) => ({ ...prev, [id]: prev[id] - 1 }))
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = product.find((productItem) => productItem.id === Number(item))
                totalAmount += cartItems[item] * itemInfo.new_price
            }
        }
        return totalAmount
    }

    const getTotalCartItem = () => {
        let totalItem = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalItem += cartItems[item]
            }
        }
        return totalItem;
    }

    const [total, setTotal] = useState(0)
    const [subtotal, setSubtotal] = useState(0)
    const [shipping, setShipping] = useState("Free")
    const [finalAmount, setFinalAmount] = useState(0)
    const [payment, setPayment] = useState("Credit Card")

    const CartItem = {
        addCart,
        removeToCart,
        cartItems,
        setCartItems,
        getTotalCartAmount,
        getTotalCartItem,
        addItemCart,
        removeToItemCart,

        likeItems,
        addLike,
        getTotalLike,
        activeLike,
        setActiveLike,
        addLikeProduct,

        total,
        setTotal,
        subtotal,
        setSubtotal,
        shipping,
        setShipping,

        finalAmount,
        setFinalAmount,
        payment,
        setPayment
    }

    return (
        <CartContext.Provider value={CartItem}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContextProvider