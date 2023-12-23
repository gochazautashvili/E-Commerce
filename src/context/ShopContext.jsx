import { createContext, useState } from "react";

export const ShopContext = createContext(null)

const ShopContextProvider = (props) => {
    const [searchProduct, setSearchProduct] = useState('')
    const [blogItemCollect, setBlogItemCollect] = useState("medium")
    const [visibleCart, setVisibleCart] = useState(false)

    const ShopItem = {
        searchProduct,
        setSearchProduct,
        blogItemCollect,
        setBlogItemCollect,
        visibleCart,
        setVisibleCart
    }

    return (
        <ShopContext.Provider value={ShopItem}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider